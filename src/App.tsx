import React from "react";
import "./App.css";
import { fetchImages } from "./utils/fetch";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { AppInterface, ImageObject } from "./utils/interfaces";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Report } from "notiflix/build/notiflix-report-aio";
import { Modal } from "./Modal/Modal";

class App extends React.Component<{}, AppInterface> {
  constructor(props: object) {
    super(props);

    this.state = {
      searchQuery: "",
      page: 1,
      images: [],
      fetching: false,
      showModal: false,
      currentModalImg: "",
      totalImages: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const query = target.elements[1] as HTMLInputElement;
    const searchQuery = query.value;
    if (searchQuery) {
      this.setState({
        searchQuery: searchQuery,
        page: 1,
        images: [],
      });
    }
  }

  async componentDidUpdate(_: {}, prevState: AppInterface): Promise<void> {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.setState({
        fetching: true,
      });
      try {
        const data = await fetchImages(this.state.searchQuery, this.state.page);
        if (data && data.data.hits.length) {
          const totalHits = data.data.totalHits;
          const fetchedImages: ImageObject[] = data.data.hits;
          this.setState((prevState) => ({
            images: [...prevState.images, ...fetchedImages],
            totalImages: totalHits,
          }));
        } else {
          Report.failure(
            "No images found!",
            "Try typing something else",
            "Okay"
          );
        }
      } catch (err) {
        Report.failure("Opps!", "Something went wrong", "Okay");
        console.log(err);
      } finally {
        this.setState({
          fetching: false,
        });
      }
    }
  }

  loadMore() {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  }

  openModal(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.dataset.largeimg) {
      this.setState({
        showModal: true,
        currentModalImg: target.dataset.largeimg,
      });
    }
  }

  closeModal() {
    this.setState({
      showModal: false,
      currentModalImg: "",
    });
  }

  render() {
    const shouldShowButton = this.state.totalImages - 12 * this.state.page > 0;
    return (
      <div className="App">
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery
          images={this.state.images}
          fetching={this.state.fetching}
          openModal={this.openModal}
        />
        {shouldShowButton && <Button loadMore={this.loadMore} />}
        <Loader visible={this.state.fetching} />
        {this.state.showModal && (
          <Modal
            src={this.state.currentModalImg}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default App;

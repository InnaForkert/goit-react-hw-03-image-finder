import React from "react";
import "./App.css";
import { fetchImages } from "./utils/fetch";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { AppInterface, ImageObject } from "./utils/interfaces";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Report } from "notiflix/build/notiflix-report-aio";

class App extends React.Component<{}, AppInterface> {
  constructor(props: object) {
    super(props);

    this.state = {
      searchQuery: "",
      page: 1,
      images: [],
      fetching: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadMore = this.loadMore.bind(this);
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
      (this.state.searchQuery &&
        prevState.searchQuery !== this.state.searchQuery) ||
      prevState.page !== this.state.page
    ) {
      this.setState({
        fetching: true,
      });
      const data = await fetchImages(this.state.searchQuery, this.state.page);
      if (data && data.data.hits.length) {
        const fetchedImages: ImageObject[] = data.data.hits;
        this.setState((prevState) => ({
          images: [...prevState.images, ...fetchedImages],
          fetching: false,
        }));
      } else {
        Report.failure("No images found!", "Try typing something else", "Okay");
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

  render() {
    return (
      <div className="App">
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery
          images={this.state.images}
          fetching={this.state.fetching}
        />
        {this.state.images.length > 0 && <Button loadMore={this.loadMore} />}
        <Loader visible={this.state.fetching} />
      </div>
    );
  }
}

export default App;

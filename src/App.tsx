import React from "react";
import "./App.css";
import { fetchImages } from "./utils/fetch";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { AppInterface } from "./utils/interfaces";

class App extends React.Component<{}, AppInterface> {
  constructor(props: object) {
    super(props);

    this.state = {
      searchQuery: "",
      page: 1,
      images: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const query = target.elements[1] as HTMLInputElement;
    const searchQuery = query.value;
    if (searchQuery) {
      this.setState({
        searchQuery: searchQuery,
      });
    }
  }

  async componentDidUpdate(): Promise<void> {
    if (this.state.searchQuery) {
      const data = await fetchImages(this.state.searchQuery, this.state.page);
      if (data) {
        this.setState({
          images: data.data.hits,
        });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}

export default App;

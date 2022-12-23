import React from "react";
import "./App.css";
import { fetchImages } from "./utils/fetch";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

interface AppInterface {
  searchQuery: string;
  page: number;
}

class App extends React.Component<{}, AppInterface> {
  constructor(props: object) {
    super(props);

    this.state = {
      searchQuery: "",
      page: 1,
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
    const data = await fetchImages(this.state.searchQuery, this.state.page);
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery />
      </div>
    );
  }
}

export default App;

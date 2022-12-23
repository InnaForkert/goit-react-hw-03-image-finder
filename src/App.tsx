import React from "react";
import "./App.css";
import { fetchImages } from "./utils/fetch";
import { Searchbar } from "./Searchbar/Searchbar";

class App extends React.Component {
  constructor(props: object) {
    super(props);

    this.state = {
      searchQuery: "",
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

  async componentDidMount(): Promise<void> {
    const data = await fetchImages();
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <Searchbar handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;

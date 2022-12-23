import React from "react";
import "./App.css";
import { fetchImages } from "./utils/fetch";

class App extends React.Component {
  async componentDidMount(): Promise<void> {
    const data = await fetchImages();
    console.log(data);
  }

  render() {
    return (
      <>
        <h1>Hi</h1>
      </>
    );
  }
}

export default App;

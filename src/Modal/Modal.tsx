import React from "react";
import css from "./Modal.module.css";

export class Modal extends React.Component<
  { src: string; closeModal: () => void },
  {}
> {
  componentDidMount(): void {
    document.addEventListener("keydown", this.checkKey);
  }
  componentWillUnmount(): void {
    document.removeEventListener("keydown", this.checkKey);
  }

  checkKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      this.props.closeModal();
    }
  };

  checkOverlay = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={css.Overlay} onClick={this.checkOverlay}>
        <div className={css.Modal}>
          <img src={this.props.src} alt="" />
        </div>
      </div>
    );
  }
}

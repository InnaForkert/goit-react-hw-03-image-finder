import { MouseEventHandler } from "react";
import css from "./Button.module.css";

export function Button({
  loadMore,
}: {
  loadMore: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className={css.Button} onClick={loadMore}>
      Load more
    </button>
  );
}

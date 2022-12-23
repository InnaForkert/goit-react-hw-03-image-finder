import { Blocks } from "react-loader-spinner";
import css from "./Loader.module.css";

export function Loader({ visible }: { visible: boolean }) {
  return (
    <div className={css.Loader}>
      <Blocks
        visible={visible}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
}

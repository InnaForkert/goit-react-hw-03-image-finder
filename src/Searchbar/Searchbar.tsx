import css from "./Searchbar.module.css";

interface SearchbarProps {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

export function Searchbar(props: SearchbarProps) {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={props.handleSubmit}>
        <button type="submit" className={css["SearchForm-button"]}>
          <span className={css["SearchForm-button-label"]}>Search</span>
        </button>
        <input
          name="query"
          className={css["SearchForm-input"]}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

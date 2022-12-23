import css from "./Searchbar.module.css";

export function Searchbar({
  handleSubmit,
}: {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}) {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
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

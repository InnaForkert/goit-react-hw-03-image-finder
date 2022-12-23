interface SearchbarProps {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

export function Searchbar(props: SearchbarProps) {
  return (
    <header className="searchbar">
      <form className="form" onSubmit={props.handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
        <input
          name="query"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

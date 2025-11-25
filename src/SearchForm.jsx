import React from "react";
import { useGlobalContext } from "./context";
function SearchForm() {
  const { setsearchValue } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const NewSearch = e.target.elements.search.value;
    setsearchValue(NewSearch);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" >
          search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;

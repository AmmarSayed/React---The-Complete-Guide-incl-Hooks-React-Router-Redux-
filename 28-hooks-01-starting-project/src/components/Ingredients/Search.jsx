import React, { useState, useEffect } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const [enteredText, setEnteredText] = useState("");

  useEffect(() => {
    props.onFilterItems(enteredText);
  }, [enteredText]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" onChange={(e) => setEnteredText(e.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;

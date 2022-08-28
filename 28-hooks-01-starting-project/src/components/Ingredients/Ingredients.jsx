import React, { useState, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";
import { useReducer } from "react";
import { useCallback } from "react";
import { useMemo } from "react";

let filteredData = [];

const ingredientReducer = (currIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currIngredients, action.ingredient];
    case "DELETE":
      return currIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should not get there!");
  }
};

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...curHttpState, loading: false };
    case "ERROR":
      return { loading: false, error: action.error };
    case "CLEAR":
      return { ...curHttpState, error: null };
    default:
      throw new Error("Should not get there!");
  }
};

function Ingredients() {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  const [httpState, httpDispatch] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });

  const [filterText, setFilterText] = useState("");

  const filterItemsHandler = (text) => {
    if (!text.length) {
      setFilterText(null);
      dispatch({
        type: "SET",
        ingredients: [...ingredients],
      });
    } else {
      setFilterText(text);

      filteredData = ingredients.filter((ing) =>
        ing.title.toLowerCase().includes(text.toLowerCase())
      );
    }
  };

  const addIngredientHandler = useCallback(async (ingredient) => {
    httpDispatch({ type: "SEND" });
    try {
      const res = await fetch(
        "https://react-http-f0957-default-rtdb.firebaseio.com/ingredients.json",
        {
          method: "POST",
          body: JSON.stringify(ingredient),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      const id = data.name;
      dispatch({
        type: "ADD",
        ingredient: { id, ...ingredient },
      });
      httpDispatch({ type: "RESPONSE" });
    } catch (error) {
      httpDispatch({ type: "ERROR", error });
    }
  }, []);

  const removeItemHandler = useCallback(async (id) => {
    httpDispatch({ type: "SEND" });

    await fetch(
      `https://react-http-f0957-default-rtdb.firebaseio.com/ingredients/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        dispatch({
          type: "DELETE",
          id: id,
        });

        httpDispatch({ type: "RESPONSE" });
      })
      .catch((error) => {
        httpDispatch({ type: "ERROR", error });
      });
  }, []);

  useEffect(() => {
    httpDispatch({ type: "SEND" });

    fetch(
      "https://react-http-f0957-default-rtdb.firebaseio.com/ingredients.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const recievedIngredients = Object.entries(data).map(([key, val]) => ({
          id: key,
          ...val,
        }));

        dispatch({
          type: "SET",
          ingredients: recievedIngredients,
        });

        httpDispatch({ type: "RESPONSE" });
      })
      .catch((error) => {
        httpDispatch({ type: "ERROR", error });
      });
  }, []);

  const ingredientList = useMemo(
    () => (
      <IngredientList
        ingredients={filterText ? filteredData : ingredients}
        onRemoveItem={removeItemHandler}
      />
    ),
    [ingredients]
  );
  const clearError = useCallback(() => httpDispatch({ type: "CLEAR" }), []);
  return (
    <div className="App">
      {httpState.error && (
        <ErrorModal onClose={clearError}>{httpState.error.message}</ErrorModal>
      )}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={httpState.loading}
      />
      <section>
        <Search onFilterItems={filterItemsHandler} />
      </section>
      {ingredientList}
    </div>
  );
}

export default Ingredients;

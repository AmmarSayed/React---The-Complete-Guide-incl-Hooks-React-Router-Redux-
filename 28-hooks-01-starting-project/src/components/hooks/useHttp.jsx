import React, { useReducer, useCallback, useEffect } from "react";
const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...curHttpState, loading: false, data: action.data };
    case "ERROR":
      return { loading: false, error: action.error };
    case "CLEAR":
      return { ...curHttpState, error: null };
    default:
      throw new Error("Should not get there!");
  }
};
const useHttp = () => {
  const [httpState, httpDispatch] = useReducer(httpReducer, {
    loading: false,
    error: null,
    data: null,
  });

  const sendRequest = useCallback((url, method, body) => {
    httpDispatch({ type: "SEND" });

    fetch(url, {
      method,
      body,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        httpDispatch({ type: "RESPONSE", data });
      })
      .catch((error) => {
        httpDispatch({ type: "ERROR", error });
      });
  }, []);

  useEffect(() => {
    sendRequest(
      "https://react-http-f0957-default-rtdb.firebaseio.com/ingredients.json"
    );
  }, []);

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest,
  };
};

export default useHttp;

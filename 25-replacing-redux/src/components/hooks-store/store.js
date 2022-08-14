// This is a nother idea to manage state using custom hooks and react

import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
  const [, setState] = useState(globalState);

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);

    globalState = { ...globalState, ...newState };

    listeners.forEach((listener) => listener(globalState));
  };

  useEffect(() => {
    if (shouldListen) listeners.push(setState);

    return () => {
      if (shouldListen) listeners = listeners.filter((li) => li !== setState);
    };
  }, [shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};

import { useState, useEffect } from "react";

export function usePersistedState(key, initialState) {
  const [state, setState] = useState(() => {
    const storagedValue = localStorage.getItem(key);
    return storagedValue ? JSON.parse(storagedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

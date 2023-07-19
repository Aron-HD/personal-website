import { useState, useEffect } from "react";

const useLocalStorage = (key: string, initialValue: string) => {
  const isClient = typeof window !== 'undefined';

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (isClient) {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      }
      return initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // useEffect to update local storage when the state changes
  useEffect(() => {
    try {
      if (isClient) {
        // Allow value to be a function so we have the same API as useState
        const valueToStore =
          typeof storedValue === "function" ? storedValue(storedValue) : storedValue;
        // Save state
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  }, [isClient, key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;

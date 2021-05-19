import { useState } from 'react';

type UseLocalStorageReturnType<T> = [storedValue: T, setValue: (val: T) => void];

export function useLocalStorage<T>(key: string, initialValue?: T): UseLocalStorageReturnType<T> {

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  function setValue(val: T): void {
    setStoredValue(val);
    localStorage.setItem(key, JSON.stringify(val));
  }

  return [storedValue, setValue];

}

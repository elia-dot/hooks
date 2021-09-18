import { useState } from 'react';

const useArray = (initialValue) => {
  const [array, setArray] = useState(initialValue);

  const push = (el) => {
    setArray((arr) => [...arr, el]);
  };

  const filter = (cb) => {
    setArray((arr) => arr.filter(cb));
  };

  const update = (i, el) => {
    setArray((arr) => [
      ...arr.slice(0, i),
      el,
      ...arr.slice(i + 1, arr.length),
    ]);
  };

  const remove = (i) => {
    setArray((arr) => [...arr.slice(0, i), ...arr.slice(i + 1, arr.length)]);
  };

  const removeById = (id) => {
    setArray((arr) => arr.filter((el) => el.id !== id));
  };

  const modifyById = (id, newEl) => {
    setArray((arr) =>
      arr.map((el) => (el.id === id ? { ...el, ...newEl } : el))
    );
  };

  const clear = () => {
    setArray([]);
  };
  return { array, push, filter, update, remove, removeById, modifyById, clear };
};

export default useArray;

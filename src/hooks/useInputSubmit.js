import { useState, useEffect } from 'react';

function useInputSubmit(initialValue) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    document.querySelector('.income').innerText = value;
  });
  return [value, setValue];
}

export { useInputSubmit };

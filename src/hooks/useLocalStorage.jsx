import { useInput } from './useInput';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useInput(() => {
    return window.localStorage.getItem(key) || initialValue
  })

  const customSetter = (newValue) => {
    setValue(newValue);
    window.localStorage.setItem(key, newValue);
  }

  return [value, customSetter]
}
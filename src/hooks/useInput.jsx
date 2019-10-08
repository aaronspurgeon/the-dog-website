import { useState } from 'react';

export function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const customSetter = (newValue) => {
        console.log("New Value", newValue);
        setValue(newValue)
    }

    return [value, customSetter]
}



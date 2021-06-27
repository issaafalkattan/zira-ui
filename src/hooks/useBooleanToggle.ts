import { useState } from 'react';

const useBooleanToggle = (): [boolean, (val: boolean) => void] => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (value: boolean) => setIsOpen(value);

  return [isOpen, toggle];
}

export default useBooleanToggle;

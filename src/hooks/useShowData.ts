import { useState } from 'react';


export const useShowData = () => {
  const [showData, setShowData] = useState(false);

  const handleShowData = () => {
   showData === false ? setShowData(true) : setShowData(false);
  };

  return { showData, handleShowData };
}
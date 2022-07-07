import { useState } from "react";

const useModal = () => {
  const [isModalVisbile, setIsModalVisible] = useState<boolean>(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return { openModal, closeModal, isModalVisbile };
};

export default useModal;

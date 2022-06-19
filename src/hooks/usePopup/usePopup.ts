import { useState } from "react";

const usePopup = () => {
  const [isVisbile, setIsVisible] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const openPopup = ({ content }: { content: string }) => {
    setIsVisible(true);
    setModalContent(content);
  };

  const closePopup = () => {
    setIsVisible(false);
    setModalContent("");
  };

  return { openPopup, closePopup, isVisbile, modalContent };
};

export default usePopup;

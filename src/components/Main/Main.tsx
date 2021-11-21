import { useState } from "react";
import { Content } from "./Content";
import { Info } from "./Info";

export const Main = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const showModal = (img: string) => {
    setModalImg(img);
    setModalShow(true);
  };

  const closeModal = () => {
    setModalImg("");
    setModalShow(false);
  };

  return (
    <main className="bg-light">
      <div className="container">
        <Info />
        <Content
          showModal={showModal}
          closeModal={closeModal}
          modalShow={modalShow}
          modalImg={modalImg}
        />
      </div>
    </main>
  );
};

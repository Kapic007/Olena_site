import { Image, Modal } from "react-bootstrap";

type Props = {
  closeModal: () => void;
  modalShow: boolean;
  modalImg: string;
};

export const ContentModal: React.FC<Props> = ({
  modalShow,
  closeModal,
  modalImg,
}) => {
  return (
    <Modal show={modalShow} onHide={() => closeModal()} centered size="xl">
      <Image src={modalImg} />
    </Modal>
  );
};

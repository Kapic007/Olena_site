import { Col, Row } from "react-bootstrap"
import {works} from '../../../data/works'
import { ContentCard } from "./ContentCard"
import { ContentModal } from "./ContentModal"

type Props = {
  showModal: (arg0: string) => void,
  closeModal: () => void,
  modalShow: boolean,
  modalImg: string,
}

export const Content: React.FC<Props> = ({showModal, closeModal, modalShow, modalImg}) => {

  return (<>
    <Row className="align-items-center">
      {works && works.map((work, idx) => {
        return (<Col key={idx} lg={6}>
          <ContentCard work={work} onClick={()=>showModal(work.poster.full)} />
        </Col>)
      })}
    </Row>
    <ContentModal modalShow={modalShow} modalImg={modalImg} closeModal={closeModal}/>
  </>)
}

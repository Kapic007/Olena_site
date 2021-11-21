import { Card } from "react-bootstrap";

type Props = {
  work: {
    info: string;
    title: string;
    poster: {
      normal: string;
      full: string;
    };
  };
  onClick: () => void;
};

export const ContentCard: React.FC<Props> = ({ work, onClick }) => {
  return (
    <Card onClick={onClick}>
      <Card.Img variant="top" src={work.poster.normal} />
      <Card.Body>
        <Card.Title>{work.title}</Card.Title>
        <Card.Text>{work.info}</Card.Text>
      </Card.Body>
    </Card>
  );
};

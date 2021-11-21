import { Col } from "react-bootstrap";
import styles from "./style.module.scss";

export const Info = () => {
  return (
    <Col lg={12} className={styles.main_info}>
      <p className={styles.main_info_text}>
        Hello! I am glad to welcome you to my website! A little about myself and
        creativity. I am Ukrainian. For a long time I painted pictures using
        ink, pencil, watercolor, oil paints. During my studies at the
        university, I completely switched to computer graphics. I prefer to work
        as an illustrator. I especially like to draw people. I am experimenting
        with directions of graphics, so my drawings are very diverse. I have
        experience in typography, so I am familiar with the production
        processes, and many of my works have been brought to life.
      </p>
    </Col>
  );
};

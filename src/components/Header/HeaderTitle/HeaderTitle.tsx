import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

export const HeaderTitle = () => {
  const ref = useRef(null);

  const [offset, setOffset] = useState("");

  const useOnScreen = (ref: React.MutableRefObject<null | any>) => {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    useEffect(() => {
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, []);

    return isIntersecting;
  };

  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      window.onscroll = () => {
        setOffset(50 + window.pageYOffset / 30 + "%");
      };
    } else {
      window.onscroll = () => {};
    }
  }, [isVisible]);

  return (
    <div className={styles.header_name} style={{ top: offset }} ref={ref}>
      <h1 className={styles.header_name_title}>Olena Kapitula</h1>
    </div>
  );
};

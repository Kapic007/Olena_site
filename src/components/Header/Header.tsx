import { HeaderTitle } from "./HeaderTitle";
import { HeaderVideo } from "./HeaderVideo";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <HeaderVideo />
        <HeaderTitle />
      </div>
    </header>
  );
};

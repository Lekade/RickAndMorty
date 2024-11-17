import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
      <div className={styles.main}>
          <div className={styles.navBar}>
              <Link href={'/characters'}>Characters</Link>
              <Link href={'/episode'}>Episode</Link>
              <Link href={'/location'}>Location</Link>
          </div>

      </div>
  );
}

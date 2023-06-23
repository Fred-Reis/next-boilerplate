import Image from "next/image";
import styles from "./page.module.css";

type Props = {
  title: string;
};

export default function Home({
  title = "Fred Dev With your secondary job",
}: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.description}>
          <p>
            Hello World!&nbsp;
            <code className={styles.code}>{title}</code>
          </p>
        </div>
      </div>
    </main>
  );
}

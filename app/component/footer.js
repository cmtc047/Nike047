// app/components/Footer.js
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={`${styles.footer}`}>
        <p>จัสติน ดรูว์ บีเบอร์ เป็นนักร้องและนักแต่งเพลงชาวแคนาดา </p>
      </footer>
    </>
  );
}

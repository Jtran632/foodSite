import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Footer() {
  return (
    <footer className={[styles.footer]}>
      <span className="flex items-center justify-center head">
        <ul>
          <li className="underline">Contact Us</li>
          <li>Phone: 111-111-1111</li>
          <li>Email: TBnG@email.com</li>
          <li>Twitter & Instagram & FB: @TraciesBarAndGrill</li>
        </ul>
      </span>
    </footer>
  );
}

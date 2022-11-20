import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
export default function NavbarHeader() {
  return (
    <header className={styles.header}>
      <navbar className="mx-auto flex items-center space-x-1 justify-between head">
        <ul className="flex items-center space-x-2">
          <Image src="/grill.png" alt="logo" width={72} height={16} />
          <li>
            <Link href="/" className="text-3xl">
              Tracies BAR & Grill
            </Link>
          </li>
        </ul>

        <ul className="flex space-x-12 text-xl">
          <Link href="/">
            Home
          </Link>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </navbar>
    </header>
  );
}

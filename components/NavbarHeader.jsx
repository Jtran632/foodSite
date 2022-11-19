import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
export default function NavbarHeader() {
  return (
    <header className={styles.header}>
      <navbar className="mx-auto flex items-center space-x-1 justify-between">
        <ul className="flex items-center space-x-2">
          <Image src="/grill.png" alt="logo" width={72} height={16} />
          <li>
            <Link href="/" className="text-3xl font-bold">
              Tracies BAR & Grill
            </Link>
          </li>
        </ul>

        <ul className="flex space-x-12">
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </navbar>
    </header>
  );
}

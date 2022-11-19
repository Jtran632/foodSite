import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import NavbarHeader from "../components/NavbarHeader";
import Footer from "../components/Footer";
export default function about() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link
          rel="icon"
          href="https://www.flannerybeef.com/media/catalog/product/cache/60abb10ec21129f504277aa96de00ecf/n/e/newyork_usdaprime_dryaged_ca_1.png"
        />
      </Head>
      <NavbarHeader />
      <main className={styles.main}>
      <span>
          <Image
            src="/imageMain.png"
            alt="image main"
            width={800}
            height={1200}
          ></Image>
        </span>
      </main>
      <Footer />
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavbarHeader from "../components/NavbarHeader";
import Footer from "../components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import Review from "../json/reviews.json";
export default function Home() {
  const [reviews, setReviews] = useState([]);
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const rndInt = randomIntFromInterval(0, 490);
  const goodReviews = Review.filter((a) => a.Liked === 1);
  useEffect(() => {
    setReviews(goodReviews.slice(rndInt, rndInt + 10));
  }, []);

  console.log(reviews);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarHeader />
      <main className={styles.main}>
        <ul className="grid grid-cols-7 gap-18">
          <></>
          <li className="col-start-1 col-end-4">
            <Image src="/huynh.png" alt="logo" width={700} height={1} />
          </li>
          <ul className="col-start-5 col-end-7 space-y-8 text-sm">
            <li>{'"Not too shabby" - Jimmy T.'}</li>
            {reviews.map((i) => (
              <li key={i.Review}>
                {" "}
                {"->"} {i.Review}
              </li>
            ))}
          </ul>
          <></>
          <li className="col-start-1 col-end-4">
            <br/><br/> <br/><br/>
            {
              "We had our daughter’s 7th birthday party on Saturday, and it was beyond amazing!!! Our host Kevin is lovely and she is GREAT!! My daughter told me that she wants to come back, but the chef Isa needs to be there, she loved her. I have had more than 20 birthday parties for my kids and thiis one of the best ideas i ever had, all the kids enjoy the party, the place is huge and extremely organized!!! If you are looking for a great party this is the place, i will be doing more parties here in the future!!”- Long"
            }
          </li>
          <li className="col-start-5 col-end-8">
            <Image src="/bd.png" alt="logo" width={700} height={1} />
          </li>
          <></>
          <></>
        </ul>
      </main>
      <Footer />
    </div>
  );
}

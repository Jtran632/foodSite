/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavbarHeader from "../components/NavbarHeader";
import Footer from "../components/Footer";
import Mock from "../json/mock.json";
import { useState } from "react";
export default function Home() {
  const [menu, setMenu] = useState("appetizer");
  const appetizers = Mock.food.filter((a) => a.type_food === "appetizer");
  const entree = Mock.food.filter((a) => a.type_food === "entree");
  const drinks = Mock.drinks;

  function renderSelection() {
    switch (menu) {
      case "appetizer":
        return appetizers.map((i) => (
          <li
            key={i.food_name}
            className="text-center rounded inline-block CardItem"
          >
            <div className="flex justify-center bg-gray-700 font-bold font-mono text-sm">
              <h1>
                ${i.price} {i.food_name}
              </h1>
            </div>
            <img src={i.img} alt="food item"></img>
          </li>
        ));
      case "entree":
        return entree.map((i) => (
          <li
            key={i.food_name}
            className="text-center rounded inline-block CardItem"
          >
            <div className="flex justify-center bg-gray-700 font-bold font-mono text-sm">
              <h1>
                ${i.price} {i.food_name}
              </h1>
            </div>
            <img src={i.img} alt="food item"></img>
          </li>
        ));
      case "drink":
        return drinks.map((i) => (
          <li key={i.food_name} className="text-center rounded inline-block">
            <div className="flex justify-center bg-gray-700 font-bold font-mono text-sm">
              <h1>
                ${i.price} {i.drink_name}
              </h1>
            </div>
            <img src={i.img} alt="food item"></img>
          </li>
        ));
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarHeader />
      <main className={styles.main}>
        <div className="flex items-center space-x-10 justify-between">
          <button
            className="bg-transparent hover:bg-slate-500 text-white font-bold py-2 px-4 border border-white"
            onClick={() => setMenu("appetizer")}
          >
            Appetizer
          </button>
          <button
            className="bg-transparent hover:bg-slate-500 text-white font-bold py-2 px-4 border border-white"
            onClick={() => setMenu("entree")}
          >
            Entrées
          </button>
          <button
            className="bg-transparent hover:bg-slate-500 text-white font-bold py-2 px-4 border border-white"
            onClick={() => setMenu("drink")}
          >
            Drinks
          </button>
        </div>
        <br />

        <ul className="grid grid-cols-3 gap-4">{renderSelection()}</ul>
      </main>
      <Footer />
    </div>
  );
}

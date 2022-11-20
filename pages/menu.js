/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavbarHeader from "../components/NavbarHeader";
import Footer from "../components/Footer";
import Mock from "../json/mock.json";
import food2020 from "../json/data2020.json";
import { useState } from "react";
export default function Home() {
  const [menu, setMenu] = useState("appetizer");
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const appetizer = food2020.filter(
    (a) =>
      (a.food_category_2020 === "Appetizers & Sides") &
      (a.kids_meal_2020 === 0) &
      (a.restaurant === "Ruby Tuesday")
  );
  const salad = food2020.filter(
    (a) =>
      (a.food_category_2020 === "Salads") & (a.restaurant === "Ruby Tuesday")
  );
  const soup = food2020.filter(
    (a) => (a.food_category_2020 === "Soup") & (a.restaurant === "Ruby Tuesday")
  );
  const entree = food2020.filter(
    (a) =>
      (a.food_category_2020 === "Entrees") &
      (a.kids_meal_2020 === 0) &
      (a.restaurant === "Ruby Tuesday")
  );
  const burger = food2020.filter(
    (a) =>
      (a.food_category_2020 === "Burgers") & (a.restaurant === "Ruby Tuesday")
  );
  const sandwich = food2020.filter(
    (a) =>
      (a.food_category_2020 === "Sandwiches") &
      (a.item_name_2020 != "Mini Corn Dogs") &
      (a.restaurant === "Ruby Tuesday")
  );
  const kidsMeal = food2020.filter(
    (a) =>
      (a.kids_meal_2020 === 1) &
        (a.restaurant === "Ruby Tuesday") &
        (a.food_category_2020 === "Entrees") ||
      a.food_category_2020 === "Appetizers & Sides"
  );
  const dessert = food2020.filter(
    (a) =>
      (a.food_category_2020 === "Desserts") & (a.restaurant === "Ruby Tuesday")
  );
  const drink = food2020.filter(
    (a) =>
      (a.food_category_2020 === "Beverages") &
      (a.restaurant === "Bonefish Grill")
  );
  console.log(entree);
  function renderSelection() {
    switch (menu) {
      case "appetizer":
        return appetizer
          .filter((_, idx) => idx < 18)
          .map((i) => (
            <li
              key={i.menu_item_id}
              className="text-center rounded inline-block CardItem"
            >
              <div className="flex justify-center bg-gray-700 font-bold font-mono text-sm">
                <h1>
                  ${randomIntFromInterval(12, 14)} {i.item_name_2020}
                </h1>
              </div>
              <h1>{i.item_description_2020}</h1>
            </li>
          ));
      case "salad":
        return salad
          .filter((_, idx) => idx < 18)
          .map((i) => (
            <li
              key={i.menu_item_id}
              className="text-center rounded inline-block CardItem"
            >
              <div className="flex justify-center bg-gray-700 font-bold font-mono text-sm">
                <h1>
                  ${randomIntFromInterval(7, 10)} {i.item_name_2020}
                </h1>
              </div>
              <h1>{i.item_description_2020}</h1>
            </li>
          ));
      case "soup":
        return soup
          .filter((_, idx) => idx < 18)
          .map((i) => (
            <li
              key={i.menu_item_id}
              className="text-center rounded inline-block CardItem"
            >
              <div className="flex justify-center bg-gray-700 font-bold font-mono text-sm">
                <h1>
                  ${randomIntFromInterval(7, 10)} {i.item_name_2020}
                </h1>
              </div>
              <h1>{i.item_description_2020}</h1>
            </li>
          ));
      case "entree":
        return entree
          .filter((_, idx) => idx < 18)
          .map((i) => (
            <li
              key={i.menu_item_id}
              className="text-center rounded inline-block CardItem"
            >
              <div className="flex justify-center bg-gray-700 font-bold font-mono text-sm">
                <h1>
                  ${randomIntFromInterval(15, 20)} {i.item_name_2020}
                </h1>
              </div>
              <h1>{i.item_description_2020}</h1>
            </li>
          ));
      case "burger":
        return burger
          .filter((_, idx) => idx < 18)
          .map((i) => (
            <li
              key={i.menu_item_id}
              className="text-center rounded inline-block CardItem"
            >
              <div className="flex justify-center bg-gray-700 font-bold font-mono text-sm">
                <h1>
                  ${14} {i.item_name_2020}
                </h1>
              </div>
              <h1>{i.item_description_2020}</h1>
            </li>
          ));

      case "sandwich":
        return sandwich
          .filter((_, idx) => idx < 18)
          .map((i) => (
            <li
              key={i.menu_item_id}
              className="text-center rounded inline-block CardItem"
            >
              <div className="flex justify-center bg-gray-700 font-bold font-mono text-sm">
                <h1>
                  ${12} {i.item_name_2020}
                </h1>
              </div>
              <h1>{i.item_description_2020}</h1>
            </li>
          ));
      case "kidsMeal":
        return kidsMeal
          .filter((_, idx) => idx < 18)
          .map((i) => (
            <li
              key={i.menu_item_id}
              className="text-center rounded inline-block CardItem"
            >
              <div className="flex justify-center bg-gray-700 font-bold font-mono text-sm">
                <h1>
                  ${randomIntFromInterval(12, 14)} {i.item_name_2020}
                </h1>
              </div>
              <h1>{i.item_description_2020}</h1>
            </li>
          ));
      case "dessert":
        return dessert
          .filter((_, idx) => idx < 18)
          .map((i) => (
            <li
              key={i.menu_item_id}
              className="text-center rounded inline-block CardItem"
            >
              <div className="flex justify-center bg-gray-700 font-bold font-mono text-sm">
                <h1>
                  ${7} {i.item_name_2020}
                </h1>
              </div>
              <h1>{i.item_description_2020}</h1>
            </li>
          ));
      case "drink":
        return drink
          .filter((_, idx) => idx < 18)
          .map((i) => (
            <li
              key={i.menu_item_id}
              className="text-center rounded inline-block CardItem"
            >
              <div className="flex justify-center bg-gray-700 font-bold font-mono text-sm">
                <h1>
                  ${2} {i.item_name_2020}
                </h1>
              </div>
              <h1>{i.item_description_2020}</h1>
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
      <main className={[styles.main, "flex space-x-10 font-mono"]}>
        <div className="flex items-center space-x-10 justify-center ">
          <button
            className="bg-black hover:bg-slate-500 text-white font-bold py-2 px-4 border border-white"
            onClick={() => setMenu("appetizer")}
          >
            Appetizers
          </button>
          <button
            className="bg-black hover:bg-slate-500 text-white font-bold py-2 px-4 border border-white"
            onClick={() => setMenu("salad")}
          >
            Salads
          </button>
          <button
            className="bg-black hover:bg-slate-500 text-white font-bold py-2 px-4 border border-white"
            onClick={() => setMenu("soup")}
          >
            Soups
          </button>
          <button
            className="bg-black hover:bg-slate-500 text-white font-bold py-2 px-4 border border-white"
            onClick={() => setMenu("entree")}
          >
            Entrées
          </button>
          <button
            className="bg-black hover:bg-slate-500 text-white font-bold py-2 px-4 border border-white"
            onClick={() => setMenu("burger")}
          >
            Burgers
          </button>
          <button
            className="bg-black hover:bg-slate-500 text-white font-bold py-2 px-4 border border-white"
            onClick={() => setMenu("sandwich")}
          >
            Sandwiches
          </button>
          <button
            className="bg-black hover:bg-slate-500 text-white font-bold py-2 px-4 border border-white"
            onClick={() => setMenu("kidsMeal")}
          >
            Kids Meal
          </button>
          <button
            className="bg-black hover:bg-slate-500 text-white font-bold py-2 px-4 border border-white"
            onClick={() => setMenu("dessert")}
          >
            Dessert
          </button>
          <button
            className="bg-black hover:bg-slate-500 text-white font-bold py-2 px-4 border border-white"
            onClick={() => setMenu("drink")}
          >
            Drinks
          </button>
        </div>
        <br />
        <ul>
          <ul className="grid grid-cols-3 gap-4 justify-center">
            {renderSelection()}
          </ul>
        </ul>
      </main>
      <Footer />
    </div>
  );
}

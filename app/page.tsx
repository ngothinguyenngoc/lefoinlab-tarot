"use client";

import { useState } from "react";

const cats = [
  {
    name: "Orange Cat",
    rarity: "Common",
    reward: 1,
  },
  {
    name: "Black Cat",
    rarity: "Rare",
    reward: 3,
  },
  {
    name: "Mirroro™",
    rarity: "Legendary",
    reward: 10,
  },
];

export default function Home() {
  const [coin, setCoin] = useState(0);
  const [count, setCount] = useState(0);

  const [currentCat, setCurrentCat] = useState("???");
  const [rarity, setRarity] = useState("???");
  const [collection, setCollection] = useState<string[]>([]);

  function openCrate() {
    const randomCat =
      cats[Math.floor(Math.random() * cats.length)];

    setCurrentCat(randomCat.name);
    setRarity(randomCat.rarity);

    setCount(count + 1);
    setCoin(coin + randomCat.reward);
    if (!collection.includes(randomCat.name)) {
  setCollection([...collection, randomCat.name]);
}
  }

  return (
    <main className="min-h-screen bg-stone-100 flex items-center justify-center p-8">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-md w-full text-center">

        <h1 className="text-5xl font-bold mb-3">
          CATalog™
        </h1>

        <p className="text-gray-600 mb-8">
          Collect • Discover • Love
        </p>

        <div className="text-8xl mb-4">
          🐈‍⬛
        </div>

        <h2 className="text-3xl font-bold mb-2">
          {currentCat}
        </h2>

        <p className="text-purple-600 font-bold mb-6">
          {rarity}
        </p>

        <div className="space-y-2 mb-8">
          <p>🪙 Foin Coin: {coin}</p>
          <p>🐾 Cats Collected: {count}</p>
        </div>

        <button
          onClick={openCrate}
          className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          Open Crate
          <div className="mt-8 text-left">
  <h3 className="font-bold mb-3">
    Your Collection
  </h3>

  {collection.length === 0 ? (
    <p className="text-gray-500">
      No cats yet...
    </p>
  ) : (
    <ul>
      {collection.map((cat) => (
        <li key={cat}>
          🐾 {cat}
        </li>
      ))}
    </ul>
  )}
</div>
        </button>

      </div>
    </main>
  );
}
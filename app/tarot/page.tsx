"use client";

import { useState } from "react";

const cards = [
  "The Fool",
  "The Magician",
  "The High Priestess",
  "The Empress",
  "The Emperor",
  "The Lovers",
  "The Chariot",
  "Strength",
  "The Hermit",
  "Wheel of Fortune",
  "Justice",
  "Death",
  "Temperance",
  "The Devil",
  "The Tower",
  "The Star",
  "The Moon",
  "The Sun",
  "Judgement",
  "The World",
];

export default function TarotPage() {
  const [drawnCards, setDrawnCards] = useState<string[]>([]);
const [reading, setReading] = useState("");
const [name, setName] = useState("");
const [question, setQuestion] = useState("");
  async function drawCards() {
const shuffled = [...cards].sort(() => Math.random() - 0.5);

const selectedCards = shuffled.slice(0, 3);

setDrawnCards(selectedCards);

const res = await fetch("/api/tarot", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
  name,
  question,
  cards: selectedCards,
}),
});

const data = await res.json();

setReading(data.reading);
}


  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-2">
        Tarot Reading
      </h1>

      <p className="mb-6">
        Draw three cards and receive a personalized interpretation.
      </p>

      <input
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Your Name"
  className="border w-full p-3 mb-4"
/>

<textarea
  value={question}
  onChange={(e) => setQuestion(e.target.value)}
  placeholder="Your Question"
  className="border w-full p-3 mb-4"
/>
      <button
        onClick={drawCards}
        className="bg-black text-white px-6 py-3"
      >
        Draw Cards
      </button>

      {drawnCards.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Your Cards
          </h2>

          {drawnCards.map((card) => (
            <div key={card}>{card}</div>
          ))}
        </div>
      )}
      {reading && (
  <div className="mt-8">
    <h2 className="text-2xl font-bold mb-4">
      Tarot Reading
    </h2>

    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 whitespace-pre-wrap">
      {reading}
    </div>
  </div>
)}
<div className="mt-8 bg-purple-50 border border-purple-200 rounded-xl p-6">
  <h3 className="text-xl font-bold mb-2">
    ✨ Unlock Full Reading
  </h3>

  <p className="mb-4">
    Get a detailed tarot report with deeper insights into love,
    career, hidden influences, future possibilities, and practical advice.
  </p>

  <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold">
    Unlock Full Reading - $5
  </button>
</div>
    </main>
  );
}
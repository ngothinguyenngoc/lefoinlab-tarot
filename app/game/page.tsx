"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function GamePage() {
  const [catX, setCatX] = useState(350);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCatX((prev) => Math.max(prev - 20, 0));
      }

      if (e.key === "ArrowRight") {
        setCatX((prev) => Math.min(prev + 20, 700));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className="min-h-screen bg-stone-100 flex items-center justify-center">
      <div
        className="relative border-4 border-black bg-white"
        style={{
          width: "1000px",
          height: "1000px",
          
        }}
      >
        <h1 className="text-center text-3xl font-bold mt-4">
          CATalog™ Catch
        </h1>

        <div
  style={{
    position: "absolute",
    left: `${catX}px`,
    bottom: "300px",
    width: "300px",
    height: "300px",
    backgroundColor: "red",
  }}
/>
      </div>
    </main>
  );
}
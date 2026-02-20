"use client";

import { useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("Hepsi");

  return (
    <div className="max-w-6xl mx-auto px-4 mt-20">

      <h1 className="text-2xl font-medium mb-10">Projeler</h1>

      <div className="flex gap-8 text-sm tracking-wide uppercase border-b border-stone-200 pb-4">
        <button
          onClick={() => setFilter("Hepsi")}
          className={filter === "Hepsi"
            ? "text-black border-b-2 border-black pb-2"
            : "text-stone-400 hover:text-black transition"}
        >
          Hepsi
        </button>

        <button
          onClick={() => setFilter("35mm")}
          className={filter === "35mm"
            ? "text-black border-b-2 border-black pb-2"
            : "text-stone-400 hover:text-black transition"}
        >
          35mm
        </button>

        <button
          onClick={() => setFilter("120mm")}
          className={filter === "120mm"
            ? "text-black border-b-2 border-black pb-2"
            : "text-stone-400 hover:text-black transition"}
        >
          120 (6x6)
        </button>

        <button
          onClick={() => setFilter("Digital")}
          className={filter === "Digital"
            ? "text-black border-b-2 border-black pb-2"
            : "text-stone-400 hover:text-black transition"}
        >
          Dijital
        </button>
      </div>

    </div>
  );
}

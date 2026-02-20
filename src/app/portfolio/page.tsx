"use client";

import { useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("Hepsi");

  return (
    <div className="max-w-6xl mx-auto px-4 mt-20">

      <h1 className="text-2xl font-medium mb-10">Projeler</h1>

      {/* Sekmeler */}
      <div className="flex gap-8 text-sm tracking-wide uppercase border-b border-stone-200 pb-4 mb-12">

        <button
          onClick={() => setFilter("Hepsi")}
          className={
            filter === "Hepsi"
              ? "text-black border-b-2 border-black pb-2"
              : "text-stone-400 hover:text-black transition pb-2"
          }
        >
          Hepsi
        </button>

        <button
          onClick={() => setFilter("35mm")}
          className={
            filter === "35mm"
              ? "text-black border-b-2 border-black pb-2"
              : "text-stone-400 hover:text-black transition pb-2"
          }
        >
          35mm
        </button>

        <button
          onClick={() => setFilter("120")}
          className={
            filter === "120"
              ? "text-black border-b-2 border-black pb-2"
              : "text-stone-400 hover:text-black transition pb-2"
          }
        >
          120 (6x6)
        </button>

        <button
          onClick={() => setFilter("Digital")}
          className={
            filter === "Digital"
              ? "text-black border-b-2 border-black pb-2"
              : "text-stone-400 hover:text-black transition pb-2"
          }
        >
          Dijital
        </button>

      </div>

      {/* Geçici içerik */}
      <div className="text-stone-600">
        Aktif filtre: <span className="font-medium">{filter}</span>
      </div>

    </div>
  );
}

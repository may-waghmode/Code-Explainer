'use client';

import { useState } from "react";

export default function HomePage() {
  // react hooks
  const [code, setCode] = useState("");
  

  // logic
  async function handleExplainCode() {}

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">AI Code Explainer</h1>

      <textarea
        className="w-full h-48 p-4 border rounded mb-4 font-mono"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste code here... "
      />

      <button></button>
    </main>
  );
}

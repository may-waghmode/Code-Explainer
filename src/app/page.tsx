// Client Component
"use client";

import { use, useState } from "react";

export default function HomePage() {
  // react hooks
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState("");

  async function handleExplainCode() {
    setLoading(true);
    setExplanation("");

    // api call
    const response = await fetch("/api/explain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    // return response from openAI API
    const data = await response.json();
    setExplanation(data.explanation || "No explanation");
    setLoading(false);
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">AI Code Explainer</h1>

      <textarea
        className="w-full h-48 p-4 border rounded mb-4 font-mono"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste code here... "
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        onClick={handleExplainCode}
        disabled={Boolean(loading || !code.trim())} // button is disabled if there's no code or if it's loading
      >
        {loading ? "Analysing code..." : "Explain Code"}
      </button>

      {explanation && (
        <div className="mt-6 p-4 bg-gray-100 border rounded">
          <h2 className="text-xl font-semibold mb-2"></h2>
          <pre className="whitespace-pre-wrap"></pre>
        </div>
      )}
    </main>
  );
}

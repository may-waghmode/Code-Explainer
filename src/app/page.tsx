// Client Component
"use client";

import { useState } from "react";
import Footer from "./footer";
import "font-awesome/css/font-awesome.min.css";

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

    // return response from OpenRouter API
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
        className="buttonload bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        onClick={handleExplainCode}
        disabled={Boolean(loading || !code.trim())} // button is disabled if there's no code or if loading
      >
        {loading ? (
          <>
            <i
              className="fa fa-spinner fa-spin"
              style={{ marginRight: "8px" }}
            />{" "}
            Analysing code...
          </>
        ) : (
          "Explain Code"
        )}
      </button>

      {/* Code explanation output */}
      {explanation && (
        <div className="mt-6 p-4 bg-gray-100 border rounded">
          <h2 className="text-xl font-semibold mb-2">Explanation:</h2>
          <pre className="whitespace-pre-wrap">{explanation}</pre>
        </div>
      )}
      <Footer />
    </main>
  );
}

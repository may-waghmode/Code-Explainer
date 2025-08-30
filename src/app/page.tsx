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

    // return response from API
    const data = await response.json();
    setExplanation(data.explanation || "No explanation");
    setLoading(false);
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-white/20">
        <h1 className="text-4xl font-extrabold text-center text-white mb-6 tracking-wide">
          🚀 AI Code Explainer
        </h1>

        <textarea
          className="w-full h-48 p-4 bg-black/40 text-gray-100 border border-gray-700 rounded-xl font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none placeholder-gray-400"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
        />

        <button
          className="w-full mt-4 flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg transition transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          onClick={handleExplainCode}
          disabled={Boolean(loading || !code.trim())}
        >
          {loading ? (
            <>
              <i className="fa fa-spinner fa-spin" /> Analysing code...
            </>
          ) : (
            "✨ Explain Code"
          )}
        </button>

        {/* Code explanation output */}
        {explanation && (
          <div className="mt-8 p-6 bg-gray-900/60 border border-gray-700 rounded-xl shadow-inner text-gray-200">
            <h2 className="text-2xl font-bold mb-3 text-blue-400">
              Explanation:
            </h2>
            <pre className="whitespace-pre-wrap leading-relaxed">
              {explanation}
            </pre>
          </div>
        )}
      </div>

      <div className="mt-6">
        <Footer />
      </div>
    </main>
  );
}

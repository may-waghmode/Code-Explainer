# Colton's AI Code Explainer 🤖

A small web app that uses AI to explain code snippets — for free — using the [OpenRouter](https://openrouter.ai/) API.

Built with Next.js, TypeScript, and the App Router. You can paste in code, hit "Explain", and get a simple breakdown of what it does.

### UI

Empty textbox:
![](/public/images/homePage.png)
Loading state:
![](/public/images/loadingState.png)

---

### Getting Started

1. Clone the repo
2. Install dependencies
   ```bash
   npm install
   ```
3. Set up your OpenRouter API key
   - Go to openrouter.ai/keys and create an account
   - Generate an API key
   - Add it to .env.local:
   ```bash
   OPENROUTER_API_KEY=your-key-here
   ```
4. Run the dev server
   ```bash
   npm run dev
   ```

---

### API Model

This project currently uses:
	•	Model: meta-llama/llama-3-8b-instruct (free)
	•	Endpoint: https://openrouter.ai/api/v1/chat/completions


### Tech Stack

- Next.js (App Router)
- TypeScript
- Axios
- [OpenRouter API](https://openrouter.ai/docs/quickstart)


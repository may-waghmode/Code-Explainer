# 🤖 Colton's AI Code Explainer

A lightweight full-stack web app that explains code snippets in plain English using AI via the [OpenRouter](https://openrouter.ai/) API.

Paste code → Click “Explain Code” → Get a clear breakdown of what the code does.

Built with **Next.js (App Router)**, **TypeScript**, and the **meta-llama/llama-3-8b-instruct** model.

<br/>
<br/>

## Features

- Accepts any code snippet via textarea
- Sends the snippet to a free AI model (LLaMA 3 via OpenRouter)
- Returns a simple explanation of what the code does
- Responsive UI with loading state and disabled button handling
- API key handled securely with environment variables

<br/>
<br/>


## UI Preview

**Empty Textbox:**

![](/public/images/homePage.png)

**Loading State:**

![](/public/images/loadingState.png)

**Explanation Output:**

![](/public/images/explanation.png)


<br/>
<br/>


## 🚀 Getting Started

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

 ### How It Works
 - Frontend: User enters code in a textarea and clicks a button to trigger explanation.
 - Backend: A Next.js API route sends the code to OpenRouter’s free meta-llama/llama-3-8b-instruct model and returns the explanation.


<br/>
<br/>

---

<br/>

### API Model

This project currently uses:
• Model: meta-llama/llama-3-8b-instruct (free)
• Endpoint: https://openrouter.ai/api/v1/chat/completions
<br/>
<br/>

---

<br/>

### Tech Stack


- Next.js (App Router)
- TypeScript
- Axios
- [OpenRouter API](https://openrouter.ai/docs/quickstart)
   - meta-llama/llama-3-8b-instruct (free)

<br/>
<br/>

---

<br/>

### 🛠️ Future Ideas
- [ ] Add syntax highlighting to the explanation output
- [ ] Support multiple programming languages
- [ ] Integrate alternative models (e.g., GPT-4, Claude)
- [ ] Deploy with Vercel and add shareable links
- [ ] Add unit tests and error handling improvements
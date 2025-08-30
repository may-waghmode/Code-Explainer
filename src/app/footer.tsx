export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        borderTop: "1px solid #eaeaea",
        marginTop: "5rem",
        fontSize: "0.9rem",
        color: "#666",
      }}
    >
      <footer
        style={{
          textAlign: "center",
          padding: "1rem",
          fontSize: "0.9rem",
          color: "#666",
        }}
      >
        <footer
          style={{
            textAlign: "center",
            padding: "1rem",
            fontSize: "0.9rem",
            color: "#666",
          }}
        >
          <p>
            © {new Date().getFullYear()} Mayur Waghmode • Powered by{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0070f3", fontWeight: "bold" }}
            >
              Next.js
            </a>
            ,{" "}
            
            {" "}
            <a
              href="https://openrouter.ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ff6600", fontWeight: "bold" }}
            >
              OpenRouter
            </a>{" "}
            &amp; LLaMA-3
          </p>
          <p>
            <a
              href="https://github.com/may-waghmode"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#6cc644", fontWeight: "bold" }}
            >
              • Visit my GitHub
            </a>
          </p>
        </footer>
      </footer>
    </footer>
  );
}

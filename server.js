import express from "express";

const app = express();
app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.json({ ok: true, service: "roblox-ai-proxy" });
});

// Roblox -> Railway -> (тут будет вызов ИИ) -> Roblox
app.post("/chat", async (req, res) => {
  const { message } = req.body ?? {};
  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "message must be a string" });
  }

  // Заглушка-ответ, чтобы проверить связку
  // Потом заменим на реальный вызов OpenAI/другого API.
  return res.json({ reply: `Ты написал: ${message}` });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on", port));

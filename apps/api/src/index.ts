import express, { Request, Response } from "express"

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())

// Routes
app.use("/api/users")

// Root endpoint
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express API!")
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

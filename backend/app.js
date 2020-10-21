import express from "express"
import path from "path"
import cookieParser from "cookie-parser"

const corsOptions = {
  origin: "http://localhost:5000",
  credentials: true,
}

const app = express()
app.use(cookieParser())

server.applyMiddleware({ app, cors: corsOptions })

app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`)
)

app.use(express.static(path.join(__dirname, "build")))
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

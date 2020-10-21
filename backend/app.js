import express from "express"
import path from "path"
import cookieParser from "cookie-parser"

const app = express()
app.use(cookieParser())

app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`)
)

app.use(express.static(path.join(__dirname, "build")))
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

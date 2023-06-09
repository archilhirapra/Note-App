const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
app.use(express.json())
dotenv.config();
connectDB();

// app.get("/",(req,res)=>{
//     res.send("API is running")
// })

// app.get('/api/notes',(req,res)=>{
//     res.json(notes)
// })

app.use("/api/users",userRoutes)
app.use("/api/notes",noteRoutes)
app.use(notFound)
app.use(errorHandler)

// app.get("/api/notes/:id",(req,res)=>{
//     const note = notes.find((n)=>n._id=== req.params.id)
//     // console.log(res.params);
//     res.send(note)
// })

const PORT = process.env.PORT 

app.listen(PORT,console.log(`server runing port on ${PORT}`));
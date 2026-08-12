import express from "express";
import dotenv from "dotenv";
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'API is running smoothly' });
});


app.use((req, res, next) => {
  res.status(404).json({ status: 'error', message: 'Resource not found' });
});

app.listen(PORT, ()=>{
    console.log(`Server is listening at http://localhost:${PORT} http://localhost:8080/`);
}, );
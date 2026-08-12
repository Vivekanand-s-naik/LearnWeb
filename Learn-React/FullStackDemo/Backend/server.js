import express from "express";

const app = express();

app.get('/', (request, response) => {
    response.send("Server Is Listening...");
});

app.get('/api/get-joke', async (request, response) => {
    console.log("Testtt");
    const arr = [];
    for (let i = 0; i < 5; i++) {
        const res = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await res.json()
        arr.push(data.value);
    }
    response.send(arr);
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
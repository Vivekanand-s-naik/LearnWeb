import express from "express";

const app = express();
const PORT = 5000;

//Listen to the requests
app.use(express.json());


const data = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99, stock: 25 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 699.99, stock: 40 },
    { id: 3, name: "Desk Chair", category: "Furniture", price: 149.50, stock: 15 },
    { id: 4, name: "Coffee Maker", category: "Appliances", price: 79.99, stock: 8 },
    { id: 5, name: "Running Shoes", category: "Apparel", price: 120.00, stock: 50 },
    { id: 6, name: "Backpack", category: "Apparel", price: 45.00, stock: 30 },
    { id: 7, name: "Wireless Mouse", category: "Electronics", price: 29.99, stock: 100 },
    { id: 8, name: "Mechanical Keyboard", category: "Electronics", price: 89.99, stock: 12 },
    { id: 9, name: "Bookshelf", category: "Furniture", price: 199.00, stock: 5 },
    { id: 10, name: "Blender", category: "Appliances", price: 59.99, stock: 22 },
    { id: 11, name: "Smart Watch", category: "Electronics", price: 249.99, stock: 18 },
    { id: 12, name: "Desk Lamp", category: "Furniture", price: 34.99, stock: 60 },
    { id: 13, name: "Air Fryer", category: "Appliances", price: 119.99, stock: 14 },
    { id: 14, name: "Water Bottle", category: "Apparel", price: 25.00, stock: 85 },
    { id: 15, name: "Monitor", category: "Electronics", price: 179.99, stock: 20 },
    { id: 16, name: "Dining Table", category: "Furniture", price: 349.00, stock: 4 },
    { id: 17, name: "Toaster", category: "Appliances", price: 39.99, stock: 17 },
    { id: 18, name: "Hoodie", category: "Apparel", price: 55.00, stock: 42 },
    { id: 19, name: "Bluetooth Speaker", category: "Electronics", price: 69.99, stock: 35 },
    { id: 20, name: "Office Desk", category: "Furniture", price: 229.99, stock: 7 }
]


app.get("/api/products", (req, res) => {

    if (req.query.name) {
        console.log("req.query.name : ", req.query.name)
        return res.send(
            data.find(item => item.name.toLocaleLowerCase() === req.query.name.toLocaleLowerCase())
        )

    }
    if (req.query.category) {
        console.log("req.query.name : ", req.query.category)
        setTimeout(() => {
            res.send(
                data.filter(item => item.category.toLocaleLowerCase().includes(req.query.category.toLocaleLowerCase()))
            )
        }, 5000)
        return
    }
    res.send(data)
})


app.listen(PORT, () => {
    console.log("Server Started at Port : ", PORT);
})


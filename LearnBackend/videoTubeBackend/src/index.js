import { app } from "./app.js";
import connectDB from "./db/dbIndex.js"
import cors from "cors";

const PORT = process.env.PORT || 3000;



connectDB()
    .then(res => {
        console.log("DB Connected Successfully")

        const server = app.listen(PORT, () => {
            //Don't display localHost in produciton
            console.log(`Server Is Started At Port : http://localhost/${PORT}`);
        });

        server.on("error", (error)=>{
            console.log("Server Error : ", error);
            process.exit(1);
        });

    })
    .catch((error) => {
        console.log("Connection Unsuccessfull...\n", error);
        process.exit(1);
    })
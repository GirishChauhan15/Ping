import express from 'express'
import 'dotenv/config'
import axios from 'axios'

const app = express()

let count = 1;

const ping = async() =>{
    setInterval(async() => {
        try {
                const req = await axios.get(`${process.env.BACKEND_URL}/api/v1/health`,{
                    headers : {
                        'Content-Type' : "application/json"
                    }
                })
                console.log(`✅ Response #${count}:`, req?.data?.message);
                count += 1
        } catch (error) {
            console.log(`❌ Sorry, the operation failed.`);
        }
    }, 600000);
}


app.listen(process.env.PORT,()=>{
    ping()
    console.log(`Server is running at port ${process.env.PORT}`)
})
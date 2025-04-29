import express from 'express'
import 'dotenv/config'
import axios from 'axios'

const app = express()

const ping = async() =>{
    setInterval(async() => {
        try {
                await axios.get(`${process.env.BACKEND_URL}/api/v1/health`,{
                    headers : {
                        'Content-Type' : "application/json"
                    }
                })
        } catch (error) {
            console.log('Not working')
        }
    }, 600000);
}


app.listen(process.env.PORT,()=>{
    ping()
    console.log(`Server is running at port ${process.env.PORT}`)
})
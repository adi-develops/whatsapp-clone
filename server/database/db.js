import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

const Connection = async () => {
    try{
        mongoose.set("strictQuery", false) ;
        const URL = `mongodb+srv://${username}:${password}@cluster0.l5kmybw.mongodb.net/?retryWrites=true&w=majority`
        await mongoose.connect(URL, { useUnifiedTopology: true})
        console.log("Database Connected Successfully")
    }
    catch(error){
        console.log("Error while connecting with the database: ", error.message)
    }
}

export default Connection;
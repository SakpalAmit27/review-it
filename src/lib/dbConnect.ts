// connecting to database // 

import mongoose from "mongoose";


// to check the value of the object after the db connctio // 


type ConnectionObject = {

    isConnected?:number

}

const connection:ConnectionObject = {}

async function dbConnect (): Promise<void>{
    if(connection.isConnected) {
        console.log("already connected to database")
        return
    }
    try{
       const db = await mongoose.connect(process.env.MONGODB_URI || '',{})

       connection.isConnected = db.connections[0].readyState

       console.log("connection to db : Success")
    }catch(error){

        console.log("connection to db : failed" ,error
        )
        process.exit(1) 
    }
}

export default dbConnect;
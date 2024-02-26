import { MongoClient, Db } from "mongodb";
import connectDB from '../../lib/mongoose'
import getEnvVariable from '../utils/functions/utilFunc'
import Url from '../../models/Url'
import dotenv from 'dotenv';

dotenv.config();


let cachedDb:Db | null = null;


connectDB();


// async function connectToDatabase(uri:string):Promise<Db> {
//     if (cachedDb) return cachedDb;
//     try{
//        const client = await MongoClient.connect(uri);
//        const dbName = new URL(uri).pathname.substring(1)
//        const db = client.db(dbName)
//        cachedDb = db; 
//        return db;

//     } catch(error){
//         console.log('MongoDB connection error:')
//         throw new Error('Failed to connect to database');
//     }
// }



export async function insertURL(urlObject: {
    url:string;
    slug:string;
    shortUrl?:string;
    userId?: string
}){
    try {
        await connectDB();
        const result = await Url.create(urlObject);
        return result;
        
    } catch(error){
        console.error("Error creating new url", error)
        throw new Error("Failed to create new URL in database")
    }
}


export async function getURL(slug:string){
    try{
        await connectDB();
        const result = await Url.findOne({slug: slug});
        return result;
    } catch (error){
        console.error('Error fetching Url:', error);
        throw new Error("Failed to fetch URL from the database");
    }
}
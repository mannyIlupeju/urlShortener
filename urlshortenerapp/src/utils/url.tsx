import { MongoClient, Db } from "mongodb";
import connectDB from '../../lib/mongoose'
import getEnvVariable from '../utils/functions/utilFunc'
import dotenv from 'dotenv';

dotenv.config();


let cachedDb:Db | null = null;





async function connectToDatabase(uri:string):Promise<Db> {
    if (cachedDb) return cachedDb;
    try{
       const client = await MongoClient.connect(uri);
       const dbName = new URL(uri).pathname.substring(1)
       const db = client.db(dbName)
       cachedDb = db; 
       return db;

    } catch(error){
        console.log('MongoDB connection error:')
        throw new Error('Failed to connect to database');
    }
}

export async function insertURL(urlObject:any) {
    const uri = getEnvVariable('NEXT_MONGODB_URI')
    const db = await connectToDatabase(uri)                                                                                                         
    return await db.collection("urls").insertOne(urlObject);
}

export async function getURL(slug:string) {
    const db = await connectToDatabase('NEXT_MONGODB_URI');
    return await db.collection("urls").findOne({ slug });
}
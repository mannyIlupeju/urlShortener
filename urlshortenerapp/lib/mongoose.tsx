import mongoose from 'mongoose'
import getEnvVariable from '@/utils/functions/utilFunc';


const connectDB = async(): Promise<void> => {
    if (mongoose.connections[0].readyState) {
        console.log("Already connected.");
        return;
    }

    try {
        await mongoose.connect(getEnvVariable('NEXT_MONGODB_URI'))
        console.log('Connected to MongoDB')
    } catch(err) {
            console.error('Connection error', err)
            process.exit(1);
    }
}

export default connectDB;
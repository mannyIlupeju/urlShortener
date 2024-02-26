import mongoose, {Document, Model, Schema} from 'mongoose'

interface IUrl extends Document {
    url: string
    slug: string
    shortUrl?:string
    userId?: Schema.Types.ObjectId;
}

const urlSchema = new mongoose.Schema<IUrl>({
    url: {type: String, required: true},
    slug: {type: String, required: true, unique:true},
    shortUrl: {type: String, required: false, unique: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required:false}

}, {timestamps: true});

const Url: Model<IUrl> = mongoose.models.Url || mongoose.model<IUrl>('Url', urlSchema);

export default Url;
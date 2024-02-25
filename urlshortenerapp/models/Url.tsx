import mongoose, {Document, Model, Schema} from 'mongoose'

interface IUrl extends Document {
    url: string
    shortUrl: string
    userId: Schema.Types.ObjectId;
}

const urlSchema = new mongoose.Schema<IUrl>({
    url: {type: String, required: true},
    shortUrl: {type: String, required: true, unique:true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true}

}, {timestamps: true});

const Url: Model<IUrl> = mongoose.models.Url || mongoose.model<IUrl>('Url', urlSchema);

export default Url;
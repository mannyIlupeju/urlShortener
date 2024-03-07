import {NextApiRequest, NextApiResponse} from 'next'
import { nanoid } from 'nanoid';
import { insertURL } from '../../../utils/url';
import {validateUrl} from '../../../utils/validateUrl'

type ErrorResponse = {
    message: string;
}

type SuccessResponse = {
    slug: string;
    message: string;
}

async function handler(req:NextApiRequest, res:NextApiResponse<ErrorResponse | SuccessResponse>) {
    if (req.method === "POST") {
        const {url} = req.body.url
        try{
            if (await validateUrl(url) === false) {
                return res.status(400).send({message: 'Please enter a valid Url'})
            } else {
                //Create a slug and insert it into the database along with the url
                const slug = nanoid(7)
                await insertURL({ url, slug });
                res.status(200).json({ slug, message: 'Processing...' })
            }
        } catch(error){
            console.log(error);
            res.status(500).json({message: 'Internal Server Error'})
        }
    } else {
        res.status(405).json({message: 'Method not allowed'})
    }
}

export default handler;
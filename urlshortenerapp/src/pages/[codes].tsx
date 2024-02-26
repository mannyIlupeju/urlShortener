import { getURL } from "@/utils/url";
import { GetServerSideProps } from "next";

export default function WebRedirect(){

    return null;
}

export const getServerSideProps = async(context:any) => {
    console.log(context)

    const codes = context.params?.codes
    console.log(codes)


    // if(!codes){
    //     console.error('URL code not found')
    //     return {notFound: true}
    // }

    // const originalUrl = await getURL(codes as string);
    // console.log(originalUrl)

    // if(originalUrl) {
    //     console.log(originalUrl)
    //     return {
    //         redirect: {
    //             destination: originalUrl.url,
    //             permanent:false
    //         },
    //     };
    // } else {
    //     return {notFound: true}
    // }
}





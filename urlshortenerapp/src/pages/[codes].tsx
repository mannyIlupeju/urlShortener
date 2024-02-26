import { getURL } from "@/utils/url";


export default function WebRedirect(){
    return <div>
        Redirecting...
    </div>
}

export const getServerSideProps = async(context:any) => {
    console.log("Context:", context)

    console.log("Context params:", context.params)

    const codes = context.params?.codes
    console.log(codes)


    if(!codes){
        console.error('URL code not found')
        return {notFound: true}
    }

    const originalUrl = await getURL(codes);
    console.log(originalUrl)

    if(originalUrl) {
        console.log(originalUrl)
        return {
            redirect: {
                destination: originalUrl.url,
                permanent:false
            },
        };
    } else {
        return {notFound: true}
    }
}





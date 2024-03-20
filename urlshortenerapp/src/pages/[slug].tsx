import { GetServerSideProps } from "next";
import { getURL } from "@/utils/url";

interface UrlObject {
  url: string;
}

export default function WebRedirect(){
    return <div>Redirecting..</div>
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  const fetchedSlug = context.params?.slug as string | undefined;
  console.log(fetchedSlug)
  if (!fetchedSlug) {
   return {notFound: true};
  }

  const originalUrl: UrlObject | null = await getURL(fetchedSlug)

  if(originalUrl && originalUrl.url) {
    return {
        redirect: {
            destination: originalUrl.url,
            permanent: false
        },
    };
  } else {
    return {notFound: true}
  }
};



 





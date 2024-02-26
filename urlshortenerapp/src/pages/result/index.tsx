// pages/result.js

import { useState, useEffect, FormEvent } from 'react';
import { useGlobalContext } from '../../context/context'
import { useRouter } from 'next/router'
import Footer from '../../components/Footer'
import Loading from '../../components/Loader/Loading'
import Button from '../../components/Button/Button'

interface InputUrlState {
    url: string;
}

const ResultPage = () => { 
    const [shortURL, setShortURL] = useState<string | undefined>();
    const [inputUrl, setInputUrl] = useState<InputUrlState>({ url: '' })
    const [isCopied, setIsCopied] = useState<boolean>(false)

    const { shortenedUrl, isLoading, urlShortenerValue} = useGlobalContext()
    const router = useRouter();


   


    function copyToClipboard() {
        navigator.clipboard.writeText(urlShortenerValue)
            .then(() => {
                setIsCopied(!isCopied)
                setTimeout(() => {
                    setIsCopied(isCopied)
                }, 2000);
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    }

    function returnHomePage(event:FormEvent<HTMLElement>) {
        event.preventDefault()
        router.push('/')
    }

    function handleTotalClicks(event:FormEvent<HTMLElement>){
        event.preventDefault();
    }


    function handleTwitterShare(){
        const urlToShare = urlShortenerValue;
        const twitterIntentURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(urlToShare)}`;

        window.open(twitterIntentURL, '_blank', 'noopener,noreferrer,width=550,height=420');
    }

    function handleFacebookShare(){
        const urlToShare = urlShortenerValue;
        const facebookIntentUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`

        window.open(facebookIntentUrl, '_blank', 'noopener,noreferrer,width=550,height=420');

    }


     function handleLinkedInShare(){
        const urlToShare = urlShortenerValue;
        const LinkedInIntentUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(urlToShare)}`

        window.open(LinkedInIntentUrl, '_blank', 'noopener,noreferrer,width=550,height=420');
    }


    return (
        <>
            {isLoading ?
                <Loading />
                :
                <section className="container-width mx-auto min-h-screen p-4 md:p-12 resultBackground">

                        <div className="mx-auto p-4 md:p-12 gap-10 justify-center mb-12 w-full lg:w-1/2 background">
                            <h1 className="text-3xl md:text-4xl font-bold text-left text-green-400">Your Shortened Url</h1>
                            <p>Copy the short link and share it in messages, texts, posts, websites and other locations.</p>
                            <div className="mt-8 text-center">
                            <h2 className="text-xl md:text-2xl font-semibold">Here is your shortened Url</h2>
                            <div className="my-6">
                                <div className="flex gap-1 flex-col 2xl:flex-row items-center justify-center">
                                    <input
                                        type="url"
                                        id="url"
                                        placeholder="Shortened URL will appear here"
                                        className="w-full md:w-72 p-2 text-gray-800"
                                        value={urlShortenerValue}
                                        onChange={(e) => {
                                            e.preventDefault()
                                        }}
                                        readOnly />
                                    <Button 
                                    variant="copyUrl" 
                                    
                                    onClick={copyToClipboard}>
                                        Copy Url
                                    </Button>
                                </div>
                            </div>
                            <div className="my-8">
                                <p>ShortURL is a free tool to shorten URLs and generate short links.
                                    URL shortener allows to create a shortened link making it easy to share.
                                </p>
                            </div>
                            {isCopied &&
                                <div className="flex justify-center bg-yellow-400 w-full md:w-fit container mx-auto p-2 my-2 rounded-xl">
                                    <p className="text-center text-gray-700">Copied!</p>
                                </div>
                            }
                        <div>
                         <div className="flex md:flex-row flex-col justify-center gap-4">
                            {/* <Button 
                            variant="contained"
                            onClick={handleTotalClicks}>
                                Total of clicks of your short URL
                            </Button> */}
                            <Button     
                            variant="contained" 
                            className="mt-4 md:mt-0 md:ml-2 p-4 w-fit rounded-xl md:w-auto" 
                            onClick={returnHomePage}
                            >
                                Shorten Another Link
                            </Button>
                        </div>
                        </div>
                        </div>
                        <div className="mt-14 ">
                            <h2 className="text-2xl md:text-3xl font-bold text-left text-green-400">Share it on social networks</h2>
                            <div className="flex gap-2 mt-4">
                                <Button 
                                onClick={handleFacebookShare}
                                variant="facebook"
                                >
                                
                                    Facebook
                                </Button>
                                <Button 
                                 onClick={handleTwitterShare}
                                variant="twitter"
                                >
                                    Twitter</Button>
                                <Button 
                                variant="linkedin"
                                onClick={handleLinkedInShare}>
                                    LinkedIn
                                </Button>
                            </div>
                        </div>
                    </div>

                </section>


            }
            <Footer />
        </>
    );
}



export default ResultPage;

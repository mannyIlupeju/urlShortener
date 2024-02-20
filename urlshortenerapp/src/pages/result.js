// pages/result.js

import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context/context'
import { useRouter } from 'next/router'
import Footer from '../components/Footer/'
import Loading from '../components/Loader/Loading'



const ResultPage = () => { 
    const [shortURL, setShortURL] = useState();
    const [inputUrl, setInputUrl] = useState({ url: '' })
    const [isCopied, setIsCopied] = useState(false)
    const { shortenedUrl, isLoading, setIsLoading } = useGlobalContext()
    const router = useRouter();


    //urlShortener value edit - shortener.bio not authentic yet
    const urlShortenerValue = `https://shortener.bio/${shortenedUrl}`


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

    function returnHomePage(e) {
        e.preventDefault()
        router.push('/')
    }


    return (
        <>
            {isLoading ?
                <Loading />
                :
                <section className="container-width mx-auto min-h-screen p-4 md:p-12 resultBackground">

                    <h1 className="text-3xl md:text-4xl font-bold text-center text-green-400">Your Shortened Link</h1>
                    <div className="mt-8 text-center">
                        <div className="mx-auto p-4 md:p-12 gap-10 justify-center mb-12 w-full lg:w-1/2 background">
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
                                    <button className="bg-green-400 mt-4 md:mt-0 md:ml-2 p-2 w-fit rounded-xl md:w-auto" onClick={copyToClipboard}>
                                        Copy Url
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p>ShortURL is a free tool to shorten URLs and generate short links.
                                    URL shortener allows to create a shortened link making it easy to share.
                                </p>
                            </div>
                            {isCopied &&
                                <div className="flex justify-center bg-yellow-400 w-full md:w-fit container mx-auto p-2 my-2 rounded-xl">
                                    <p className="text-center text-gray-700">Copied!</p>
                                </div>
                            }
                        </div>
                        <div>
                            <button className="bg-green-700 mt-4 md:mt-0 md:ml-2 p-4 w-fit rounded-xl md:w-auto" onClick={returnHomePage}>
                                Shorten Another Link
                            </button>
                        </div>
                    </div>

                </section>


            }
            <Footer />
        </>
    );
}



export default ResultPage;

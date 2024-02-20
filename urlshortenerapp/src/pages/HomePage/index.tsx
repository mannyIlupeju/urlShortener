import React, { useState} from 'react';
import { useRouter } from 'next/router'
import {useGlobalContext} from '../../context/context'



const HomePage = () => {
    const [inputUrl, setInputUrl] = useState({url: ''})
    const [shortUrl, setShortUrl] = useState('')
    const [message, setMessage] = useState('')
    const router = useRouter();
    const {setShortenedUrl, setIsLoading} = useGlobalContext()

    async function submitUrl() {
        console.log(inputUrl)
        setIsLoading(true)
        
        const response = await fetch('/api/url-short', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputUrl)
        })

        const data = await response.json(); 
        console.log(data)

        setMessage(data.message)  

        setInterval(() => {
            setMessage('')   
        }, 3000);
        
        if(response.status === 200)
        {
            setShortenedUrl(data.slug)
            router.push('/result').then(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 3000);
            })    
            
        } else {
            console.log('Error: ', data.message)
        }

    }



return (
    <div className="h-screen">
        <section className="container mx-auto ">
            <h1 className="text-3xl md:text-4xl p-4 font-bold text-green-400 text-center">Shorten-Link</h1>
            <div className="my-4 md:my-4">
                <div className="mx-auto p-4 md:p-12 gap-10 justify-center mb-12 w-full lg:w-1/2 background translate-y-50">
                    <h2 className="text-xl md:text-2xl font-semibold text-center">Paste the website url to be shortened</h2>
                    <div className="mt-4 md:mt-4">
                        <div className="flex gap-1 flex-col 2xl:flex-row items-center justify-center">
                            <input 
                                type="url" 
                                id="url" 
                                placeholder="Type website url here" 
                                className="w-full md:w-96 rounded-xl lg:w-96 p-2 text-gray-800" 
                                value={inputUrl.url} 
                                onChange={(e) => {
                                    e.preventDefault()
                                    setInputUrl({...inputUrl, url:e.target.value})
                                }} 
                            />
                            <button className="bg-green-400 mt-2 md:mt-0 md:ml-2 p-2 w-fit md:w-auto rounded-xl text-zinc-800" onClick={submitUrl}>
                                Shorten Url
                            </button>
                        </div>
                    </div>
                    <div className="my-4">
                        {message}
                    </div>
                    <div className="text-center mt-4">
                        <p>ShortURL is a free tool to shorten URLs and generate short links. Our URL shortener allows you to create a shortened link making it easy to share.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="container mx-auto mb-12">
            <h2 className="text-3xl font-bold text-green-400">Simple and Fast URL Shortener</h2>  
            <div className="flex justify-center mt-2">
                <p className="text-center w-1/2">ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites.
                    Just paste the long URL and click the Shorten URL button. On the next page, copy the shortened URL and share it on sites, chat and emails.
                    After shortening the URL, check how many clicks it received.
                </p>
            </div>
        </section> 

  

        <section className="container mx-auto my-8 w-fit ">
            <h2 className="text-2xl font-bold text-green-400">Want More? Try Our Premium Features!</h2>       
            <p>Create an Account and get access to Custom Short Links, Detailed Analytics and Support</p>          
            <div className="mt-4">
                <button className="bg-green-400 mt-2 md:mt-0 md:ml-2 p-5 w-fit md:w-auto rounded-xl text-zinc-800">Create Account</button>
            </div>        
        </section>
    
    </div>


    );
}

export default HomePage;

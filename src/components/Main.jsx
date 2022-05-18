import React, { useState, useEffect } from "react";
export default function Main() {
    const [memeData, setMemeData] = useState({
        topText: "",
        memeImg: "http://i.imgflip.com/1bij.jpg",
        bottomText: ""
    })

    const [memeDataSet, setMemeDataSet] = useState([])

    const handleChange = (event) => {
        const { name, value } = event.target
        setMemeData(prevMemeData => {
            return {
                ...prevMemeData,
                [name]: value
            }
        })
    }

    const getMemeImage = () => {
        const random = Math.floor(Math.random() * memeDataSet.length)
        setMemeData(prevMemeData => {
            return {
                ...prevMemeData,
                memeImg: memeDataSet[random].url
            }
        })
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                setMemeDataSet(data.data.memes)
            })
    }, [])

    return (
        <main className="">
            <div className="container p-12">
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Top Text"
                        className="inputField"
                        name="topText"
                        onChange={handleChange}
                        value={memeData.topText}
                    />
                    <input
                        type="text"
                        placeholder="BottomText"
                        className="inputField"
                        name="bottomText"
                        onChange={handleChange}
                        value={memeData.bottomText}
                    />
                    <button className="bg-gradient-to-r from-[#711F8D] to-[#A818DA] text-white font-bold text-base md:text-xl rounded-lg py-4 col-span-2" onClick={getMemeImage}>
                        Get new meme image
                    </button>
                </div>
                <div className="mt-12 relative uppercase">
                    <img
                        src={memeData.memeImg}
                        alt="Meme"
                        className=" mx-auto"
                    />
                    <h2 className="memeText top-0 mt-2">
                        {memeData.topText}
                    </h2>
                    <h2 className="memeText bottom-0 mb-2">
                        {memeData.bottomText}
                    </h2>
                </div>
            </div>
        </main>
    );
}

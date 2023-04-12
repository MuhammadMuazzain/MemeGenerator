import React from "react";
import memesData from "../memesData";
export default function Meme() {

  const [meme , setMeme]=React.useState({
    topText : "",
    bottomText : "",
    randomImage : 'http://i.imgflip.com/1bij.jpg'
  })
  const [allMemeImages,setAllMemeImages]=React.useState(memesData);
  
  // const [memeImage,setMemeImage]=React.useState("");
  function getImage() {
    const memes=allMemeImages.data.memes;
    const random=Math.floor(Math.random()*memes.length)
    console.log(memes[random].url)
    const url=memes[random].url
    setMeme((prevMeme)=>({
      ...prevMeme,
      randomImage : url
    }));
  }
  return (
    <div className="form">
      <input type="text" name="name" placeholder="top-text" />
      <input type="text" name="name" placeholder="bottom-text" />
      <button type="submit" onClick={getImage}>
        Get Meme from Generator
      </button>
      <img src={meme.randomImage} alt="No useable textes" className="memeImage"></img>
    </div>
  );
}

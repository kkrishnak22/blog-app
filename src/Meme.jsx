import React,{useState} from 'react'
import memeData from './data/memeData'

export default function Meme() {

    const meemApi = memeData.data.memes;
    const [memeArray, setMemeArray] = useState(meemApi)
    const [meme, setMeme] = useState({
        top:"",
        bottom:"",
        randomImg:""
    })
    console.log("hi")
    
    function getMeme(){
        const randomValue = Math.floor(Math.random()* memeArray.length)
        const randomImg = memeArray[randomValue].url;
        setMeme((p)=>{
            return {
                ...p,
                randomImg: randomImg
            }
        })
        console.log("inside getMeme")
        
    }

    function handleChange(e){
        const {name,value} = e.target;
        setMeme((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
        console.log("inside handleChange")
        
    }

  return (
    <div>
      
      <input 
        type='text'
        placeholder='top-text'
        onChange={handleChange}
        name='top'
      />
      <input 
        type='text'
        placeholder='bottom-text'
        onChange={handleChange}
        name='bottom'
      />
        <button
        onClick={getMeme}
        >Get meme image</button>
        <div  >
            <img 
            src={meme.randomImg} 
            alt='random image'
            height="300px"
            width="500px"
             />
        </div>
     
    </div>
  )
}

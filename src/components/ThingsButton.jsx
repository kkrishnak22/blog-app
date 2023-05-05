import React,{useState} from 'react'

export default function ThingsButton() {
    const [thingsArray, setThingsArray] = useState(["Thing1","Thing2"])

   const ta= thingsArray.map((thing,index)=>{
        return (<div>
            <div>{thing}  </div> 
            <button
            onClick={()=>{deleteItem(index)}}
            >delete</button>
        </div> )
    })

    function addItem() {
        setThingsArray((prev)=>{
            return [...prev,`Thing${thingsArray.length+1}`]
        })
    }
    function deleteItem(mainIndex){
      const newarray = thingsArray.filter((arr,index)=>{
        return index != mainIndex
      })
      setThingsArray(newarray)
    }
  return (
    <div>
      <button
      onClick={addItem}
      > Add Item </button>
      <p> {ta} </p>
    </div>
  )
}

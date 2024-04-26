import { useState } from "react"
import { AddCategory } from "./AddCategory"
import './buscador.css'
import { DisplayGifs } from "./DisplayGifs"


export const HeaderGifs =() => {


  const [category, setCategory] = useState("")

  return (
    <>
    <h1 className="text-black text-4xl ">Gifs Expert App</h1>
    <div className="APP">
      <AddCategory
      setCategory={setCategory}
      />
      <DisplayGifs
      category={category}
      />
    </div>
    </>
  )
}
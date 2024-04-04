import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}>
      
     </div>
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
      <div className="flex flex-wrap justify-center gap-3 bg-white px-2 py-2 rounded-lg">
        <button onClick={() => setColor("red")} className="outline-double px-4 py-1 rounded-full text-white " style={{backgroundColor:"red"}}>red
      </button>
      <button onClick={() => setColor("green")} className="outline-double px-4 py-1 rounded-full text-white " style={{backgroundColor:"green"}}>green
      </button>
      <button onClick={() => setColor("blue")} className="outline-double px-4 py-1 rounded-full text-white " style={{backgroundColor:"blue"}}>blue
      </button></div>
     </div>
    </>
  )
}

export default App

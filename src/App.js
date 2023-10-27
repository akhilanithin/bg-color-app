import { useState } from 'react'
import React from 'react'

function App() {


  const [color, setColor] = useState("purple");


  return (
    <>
    <center>
      <h1 style={{backgroundColor:'black', color:"white"}}>Background Color Change</h1>
      <div style={{backgroundColor: color,height: '100vh',width: '100vw'}}>
      <button onClick={() => setColor("red")}  className='outline-none px-5 py-5 rounded-full text-white shadow-lg' style={{backgroundColor: "red",  padding: "20px",fontSize: "16px", margin: "20px",cursor: "pointer"}}>
      Red
      </button>
      <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green",padding: "20px",fontSize: "16px", margin: "20px",cursor: "pointer"}}>
                Green
              </button>
              <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue",padding: "20px",fontSize: "16px", margin: "20px",cursor: "pointer"}}>
                Blue
              </button>
              <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "orange",padding: "20px",fontSize: "16px", margin: "20px",cursor: "pointer"}}>
                Orange
              </button>
              <button onClick={() => setColor("magenta")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "magenta",padding: "20px",fontSize: "16px", margin: "20px",cursor: "pointer"}}>
                Magenta
              </button>
              <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "yellow",padding: "20px",fontSize: "16px", margin: "20px",cursor: "pointer"}}>
                Yellow
              </button>
              <button onClick={() => setColor("teal")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "teal",padding: "20px",fontSize: "16px", margin: "20px",cursor: "pointer"}}>
                Teal
              </button>
              <button onClick={() => setColor("rebeccaPurple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "rebeccaPurple",padding: "20px",fontSize: "16px", margin: "20px",cursor: "pointer"}}>
                RebeccaPurple
              </button>
              <button onClick={() => setColor("lime")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "lime",padding: "20px",fontSize: "16px", margin: "20px",cursor: "pointer"}}>
                Lime
              </button>
              <button onClick={() => setColor("aqua")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "aqua",padding: "20px",fontSize: "16px", margin: "20px",cursor: "pointer"}}>
                Aqua
              </button>
              <button onClick={() => setColor("lightSlateGray")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "lightSlateGray",padding: "20px",fontSize: "16px", margin: "20px",cursor: "pointer"}}>
                LightSlateGray
              </button>
              <button onClick={() => setColor("violet")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "violet",padding: "20px",fontSize: "16px", margin: "20px",cursor: "pointer"}}>
                Violet
              </button>
              <button onClick={() => setColor("gold")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "gold",padding: "20px",fontSize: "16px", margin: "20px",cursor: "pointer"}}>
                Gold
              </button>
        
      </div>
    </center>
  
    
    </>
  )
}

export default App
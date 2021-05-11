import React,{ useState } from 'react'
import "./Loader.css";

export default function Loader() {
    
    const [width,setWidth]=useState();
    const [url,setUrl] = useState();
    const [color,setColor] = useState();

    console.warn(color)

    const styles = {
        border: `10px solid ${color}`
      }

    return (
        <div className="image">
            
     
       <div className="input-container">
    <div className="input">
        <label for="url">URL:</label>
        <input type="text" name="url" onClick={(e)=>{setUrl(e.target.value)}} placeholder="Enter URL Here"/>
    </div>
    
    <div className="input">
        <label for="color">Color:</label>
        <input type="color" onClick={(e)=>{(setColor(e.target.value))}}name="color"/>
    </div>
         
     <div className="input">
        <label for="width">Width:</label>
        <input type="text" name="width" onClick={(e)=>{setWidth(e.target.value)}} placeholder="Enter frame width (px)"/>
    </div>
    </div>
           <div className="deneme" style={ { width: `${ width }%` } }>
               <p></p>
           </div>
            <img src={  `${url}`  }    width={  `${width}`  }  style={styles} />
          
        </div>
    )
}

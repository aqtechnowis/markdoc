import { parseJSON } from "jquery";
import * as React from "react";
import { AiFillEdit } from "react-icons/ai";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useEffect, useState } from 'react';
import { inspect } from 'util' // or directly
// or 
var util = require('util')
export function CallOutCollaps({ title, children }) {

  const [domLoaded, setDomLoaded] = useState(false);
  const [ style, setStyle ] = useState({})
  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism/coy')
    .then(mod => setStyle(mod.default));
    setDomLoaded(true);
  })
  

  return (
   domLoaded?(    <div >
   

   <div className="callOutCollaps">
     <div>
      
    
<details><summary></summary>
<p>

<span id="">{children}</span>

</p>
</details>
         
         </div>
   


     <style jsx>
       {`
         .callOutCollaps {
           display: flex;
           color: balck;
           align-items:center;
           flex-direction: row;
           padding: 12px 16px;
           background: #ffffff;
           border-radius: 0px 0px 15px 15px;
         }
         .callOutCollaps :global(p) {
           margin: 0;
         }
         

       `}
     </style>
   </div>
 </div>) : <div></div>

  );


}

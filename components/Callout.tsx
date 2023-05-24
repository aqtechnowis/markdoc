import { parseJSON } from "jquery";
import * as React from "react";
import { AiFillEdit } from "react-icons/ai";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useEffect, useState } from 'react';
import { inspect } from 'util' // or directly
// or 
var util = require('util')
export function Callout({ title, desc, children }) {

  const [domLoaded, setDomLoaded] = useState(false);
  const [ style, setStyle ] = useState({})
  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism/dracula')
    .then(mod => setStyle(mod.default));
    setDomLoaded(true);
  })
  

  return (
   domLoaded?(    <div className="callout">
   <div className="callout">
     <AiFillEdit
       size={20}
       style={{
         marginRight: "2px",
         top: "20px",
         right: "20px",
       }}
     >
       {" "}
     </AiFillEdit>
     {/* <strong>{title}</strong> */}
     <span>{title}</span>

     <style jsx>
       {`
         .callout {
           display: flex;
           flex-direction: row;
           padding: 12px 16px;
           background: #3c4257;
           color: white;
           border-radius: 8px 8px 0px 0px;
         }
         .callout :global(p) {
           margin: 0;
         }
       `}
     </style>
   </div>

   <div className="callout">
     <div><SyntaxHighlighter
             language="javascript"
             style={style}
             wrapLongLines
             customStyle={{
                //  backgroundColor: "#4f566b",
                 opacity: "1",
                 
                 // marginTop: "-2rem",
             }}
             codeTagProps={{
                 style: {
                     color: "#4f566b",
                 },
             }}>
           {/* { JSON.stringify(children, censor(children[0].props.children))} */}
           { util.inspect(children)},
         </SyntaxHighlighter></div>
   
{/* 
     <SyntaxHighlighter language="javascript" showInlineLineNumbers = {true} showLineNumbers = {true} >
       { JSON.stringify(children, censor(children))},
       
       
     </SyntaxHighlighter> */}
     {/* <SyntaxHighlighter language="javascript" style={docco}>
   {children}
 </SyntaxHighlighter> */}

     <style jsx>
       {`
         .callout {
           display: flex;
           color: white;
           flex-direction: column;
           padding: 12px 16px;
           background: #282a36;
           border-radius: 0px 0px 8px 8px;
         }
         .callout :global(p) {
           margin: 0;
         }
       `}
     </style>
   </div>
 </div>) : <div></div>

  );

  function censor(censor) {
    var i = 0;
    
    return function(key, value) {
      if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value) 
        return '[Circular]'; 
      
      if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
        return '[Unknown]';
      
      ++i; // so we know we aren't using the original object anymore
      
      return value;  
    }
  }
}

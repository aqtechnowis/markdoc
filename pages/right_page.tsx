import React from "react";
import Markdoc from "@markdoc/markdoc";
import { Callout } from "../components";


  const tags = {
    callout: {
      render:"Callout",
      attributes: {
        title: {
          type: String,
        },
        desc: {
          type: String,
        },
      },
    }
  };
  
  const doc = `
  {% callout title="CHARGED WITH EXPANDED CUSTOMER" desc="abc" icon="note" %}

{
  "id": "cu_19YMK02eZvKYlo2CPhsoQ2Pa",
  "object": "customer",
  "customer": {
    "id": "cu_19YMK02eZvKYlo2CPhsoQ2Pa",
    "object": "customer"
  }
}

  {% /callout %}
  `;
  
  const ast = Markdoc.parse(doc);
  const content = Markdoc.transform(ast, {tags} );


  const Page = () => {
    return (
    <div>   
    {
      Markdoc.renderers.react(content, React, {
        components: {
          Callout: Callout
        }})
    }
    </div>
 
    );
   };
   
   export default Page;
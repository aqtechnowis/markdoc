import React from "react";
import Markdoc from "@markdoc/markdoc";
import { Callout, NewCallOut } from "../components";


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
  
  
  

  let content="abs";


  const Page = (isResponse) => {
    let doc="";
   
  
    console.log(isResponse.isResponse)
    if(isResponse.isResponse){
      doc = `
      {% callout title="RESPONSE" desc="abc" icon="note" %}
    
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
    }else{
      doc = `
      {% callout title="RESPONSE" desc="abc" icon="note" %}
    
    
 curl -X 'PUT' \
  'https://petstore.swagger.io/v2/user/talha866' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "id":122231,
  "username": "talha866",
  "firstName": "Talha",
  "lastName": "Khan",
  "email": "talha@technowis.co",
  "password": "Test@123456",
  "phone": "+923356567889",
  "userStatus": 1
}'
    
      {% /callout %}
      `;
    }
    const ast = Markdoc.parse(doc);
    const content = Markdoc.transform(ast, {tags} );
    return (
    <div>   
    {
      Markdoc.renderers.react(content, React, {
        components: {
          Callout:isResponse.isResponse? NewCallOut : Callout
        }})
    }
    </div>
 
    );
   };
   
   export default Page;
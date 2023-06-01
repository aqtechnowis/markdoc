import React from "react";
import Markdoc from "@markdoc/markdoc";
import { Callout, NewCallOut } from "../components";

const tags = {
  callout: {
    render: "Callout",
    attributes: {
      title: {
        type: String,
      },
      desc: {
        type: String,
      },
    },
  },
};

let content = "abs";

const Page = (isResponse) => {
  let doc = "";
  let curl = {
    id: 10,
    username: "theUsername",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    status: true,
    userStatus: 1,
  };

  console.log(isResponse.isResponse);
  if (isResponse.isResponse) {
    doc = `
      {% callout title="RESPONSE" desc= ${curl} 
      
      icon="note" %}
    


    
      {% /callout %}
      `;
  } else {
    doc = `
      {% callout title="PUT " desc= {
        id: 10,
        username: "theUsername",
        firstName: "John",
        lastName: "James",
        email: "john@email.com",
        password: "12345",
        phone: "12345",
        status: true,
        userStatus: 1,
      } icon="note" %}
    
    
 curl -X POST -H "Content-Type: application/json" -d \
  '{"title": "A Great Book", 
    "description": "This is a really great book", 
    "price": 19.99, 
    "cover_image_url": "https://example.com/images/a_great_book.jpg", 
    "isbn": "978-3-16-148410-0", 
    "author_id": "auth_1a2b3c", 
    "genre_id": "genre_4d5e6f"
  }' 

    
      {% /callout %}
      `;
  }
  const ast = Markdoc.parse(doc);
  const content = Markdoc.transform(ast, { tags });
  return (
    <div>
      {Markdoc.renderers.react(content, React, {
        components: {
          Callout: isResponse.isResponse ? NewCallOut : Callout,
        },
      })}
    </div>
  );
};

export default Page;

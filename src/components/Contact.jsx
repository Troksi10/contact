import React, { useState } from "react";

function Contact() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
        };
      } else if (name === "email") {
        {
          return {
            fName: prevValue.fName,
            lName: prevValue.lName,
            email: value,
          };
        }
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="fName"
          placeholder="First Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;

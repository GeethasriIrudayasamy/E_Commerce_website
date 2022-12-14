import React, { useRef } from "react";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import classes from "./Contact.module.css";

const Contact = () => {
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const phoneInputRef = useRef();

    const addContactHandler = (event) => {
        event.preventDefault();
        const name = nameInputRef.current.value;
        const email = emailInputRef.current.value;
        const phone = phoneInputRef.current.value;
        const details = {
            name: name,
            email: email,
            phone: phone,
        };

        if (
            details.name.trim().length === 0 ||
            details.email.trim().length === 0 ||
            details.phone.trim().length === 0
        ) {
            alert("Please enter all the fields...");
        } else {
            addToList(details);

            alert("Your response has been recorded :)");

            event.target.reset();
        }
    };
    async function addToList(details) {
        const response = await fetch(
            "https://e-commerce-website-f6d8a-default-rtdb.firebaseio.com/contact_details.json",
            {
                method: "POST",
                body: JSON.stringify(details),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        await response.json();
    }

    return (
        <div>
            <Header />
            <h2 className={classes.title}> Please fill your details !</h2>
            <div>
                <div className={classes.form}>
                    <form onSubmit={addContactHandler}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" ref={nameInputRef} />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="text" ref={emailInputRef} />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <input id="phone" type="text" ref={phoneInputRef} />
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;

import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../Store/AuthContext";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import classes from "./LoginPage.module.css";

const Login = () => {
    const history = useHistory();
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const auth_ctx = useContext(AuthContext);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        setIsLoading(true);
        let url;
        if (isLogin) {
            url =
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAod3qMeAEU4zxLwAhFSyKBZSYP-QaXUHM";
        } else {
            url =
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAod3qMeAEU4zxLwAhFSyKBZSYP-QaXUHM";
        }
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(async (res) => {
                setIsLoading(false);
                if (res.ok) {
                    event.target.reset();
                    return res.json();
                } else {
                    await res.json();
                    let errorMessage = "Authentication failed!";
                    throw new Error(errorMessage);
                }
            })
            .then((data) => {
                auth_ctx.login(data.idToken, data.email);
                // console.log(data);
                history.replace("/store");
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <div>
            <Header />
            <section
                style={{
                    marginTop: "57px",
                    marginLeft: "20px",
                }}
            >
                <p
                    style={{
                        color: "blue",
                        textDecoration: "underline",
                        marginBottom: "10px",
                    }}
                >
                    Kindly use the following email and password to take a tour
                    of the website :)
                </p>

                <p>Email : anu20@gmail.com</p>

                <p>Password : 1234567</p>
            </section>
            <section className={classes.auth}>
                <h1>{isLogin ? "Login" : "Sign Up"}</h1>
                <form onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            ref={emailInputRef}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="password">Your Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            ref={passwordInputRef}
                        />
                    </div>
                    <div className={classes.actions}>
                        {!isLoading && (
                            <button>
                                {isLogin ? "Login" : "Create Account"}
                            </button>
                        )}
                        {isLoading && (
                            <p style={{ color: "blue" }}>Sending request...</p>
                        )}

                        <button
                            type="button"
                            className={classes.toggle}
                            onClick={switchAuthModeHandler}
                        >
                            {isLogin
                                ? "Create new account"
                                : "Login with existing account"}
                        </button>
                    </div>
                </form>
            </section>
            <Footer />
        </div>
    );
};
export default Login;

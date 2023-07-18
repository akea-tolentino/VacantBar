import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/session";
import { Redirect } from "react-router-dom/cjs/react-router-dom";
import './SignupForm.css'

const SignupForm = () => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            const user = {
                fname: fname,
                lname: lname,
                email: email,
                username: username,
                phone: phone,
                password: password,
                confirmPassword: confirmPassword
            }
                dispatch(signup(user))
                .catch(async (response) => {
                    let data;
                    try {
                        data = await response.clone().json();
                    } catch {
                        data = await response.text();
                    }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([response.statusText]);
                });
        } else {
            return setErrors(['Confirm Password field must match the Password field']);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <div className="signup-message">
                <h1>Create an account</h1>
            </div>
            <label>
                <input
                type="text"
                value={fname}
                onChange={e => setFName(e.target.value)}
                placeholder="First Name"
                />
            </label>
            <br/>
            <label>
                <input
                type="text"
                value={lname}
                onChange={e => setLName(e.target.value)}
                placeholder="Last Name"
                />
            </label>
            <br/>
            <label>
                <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Username"
                />
            </label>
            <br/>
            <label>
                <input
                type="text"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="Phone Number"
                />
            </label>
            <br/>
            <label>
                <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                />
            </label>
            <br/>
            <label>
                <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                />
            </label>
            <br />
            <label>
                <input
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                />
            </label>
            <br />
            <ul>
                {errors.map(error =>
                    <li>
                        {error}
                    </li>
                )}
            </ul>
            <button>Sign Up</button>
        </form>
    )
}

export default SignupForm
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/session";
import { Redirect } from "react-router-dom/cjs/react-router-dom";
import './SignupForm.css'

const SignupFormPage = () => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
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
        }
        return setErrors(['Confirm Password field must be the same as the Password nfield']);
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <ul>
                { errors.map(error =>
                    <li key={error}>
                        {error}
                    </li>
                )}
            </ul>
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
            <button>Sign Up</button>
        </form>
    )
}

export default SignupFormPage
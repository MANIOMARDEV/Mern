import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password};

        setFirstName("");
        setLastName("")
        setEmail("");
        setPassword("");
    };

    return (
        <>
            <form onSubmit={ createUser }>
                <div>
                    <p>
                        <label>First Name: </label>
                        <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value)} />
                    </p>
                        {firstName.length < 2 && firstName.length > 0 && (
                            <p style={{ color: "red"}}>Name must be at least 2 characters</p>
                        )}
                </div>
                <div>
                    <p>
                        <label>Last Name: </label>
                        <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value)} />
                    </p>
                        {lastName.length < 2 && lastName.length > 0 && (
                            <p style={{ color: "red"}}>Name must be at least 2 characters</p>
                        )}
                </div>
                <div>
                    <p>
                        <label>Email: </label>
                        <input type="text" value={email} onChange={ (e) => setEmail(e.target.value)} />
                    </p>
                        {email.length < 5 && email.length > 0 && (
                            <p style={{ color: "red"}}>Name must be at least 5 characters</p>
                        )}
                </div>
                <div>
                    <p>
                        <label>Password: </label>
                        <input type="text" value={password} onChange={ (e) => setPassword(e.target.value)} />
                    </p>
                        {password.length < 8 && password.length > 0 && (
                            <p style={{ color: "red"}}>Name must be at least 8 characters</p>
                        )}
                </div>
                <div>
                    <p>
                        <label>Confirm Password: </label>
                        <input type="text" value={confPassword} onChange={ (e) => setConfPassword(e.target.value)} />
                    </p>
                        {confPassword.length < 8 && confPassword.length > 0 && (
                            <p style={{ color: "red"}}>Name must be at least 8 characters</p>
                        )}
                        {password !== confPassword && confPassword > 0 && (
                            <p style={{ color: "red"}}>Password doesn't match</p>
                        )}
                </div>
                <input type="submit" value="Create User"/>
            </form>
            <h2>Your Form Data</h2>
            <p>
                First Name: {firstName}
            </p>
            <p>
                Last Name: {lastName}
            </p>
            <p>
                Email: {email}
            </p>
            <p>
                Password: {password}
            </p>
            <p>
                Confirmed Password: {confPassword}
            </p>
        </>
    )
}

export default UserForm;
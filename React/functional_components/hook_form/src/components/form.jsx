import React, {useState} from "react";
const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [submitted, setSubmitted] = useState(false); 

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password,confirmPassword};
        console.log("welcome",newUser)
        firstName("");
        lastName("");
        email("");
        password("");
        confirmPassword("");
        submitted(true);
    };
    return(
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={(e) => 
                    setFirstName(e.target.value)} />
                    {firstName.length < 2 &&firstName.length >0?
                    <p>First Name must be at least 2 characters</p>:
                    null}
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={(e) => 
                    setLastName(e.target.value)} />
                    {lastName.length < 2 && lastName.length >0?
                    <p>Last Name must be at least 2 characters</p>:
                    null}
            </div>
            <div>
                <label>Email: </label>
                <input type="text" value={email} onChange={(e) => 
                    setEmail(e.target.value)} />
                    {email.length < 5 && email.length > 0 ?
                    <p>Email must be at least 5 characters</p>:
                    null}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => 
                    setPassword(e.target.value)} />
                    {password.length < 8 && password.length > 0 ?
                    <p>First Name must be at least 8 characters</p>:
                    null}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={(e) => 
                    setConfirmPassword(e.target.value)} />
                    {password !== confirmPassword && confirmPassword.length > 0 ?
                    <p>passwords don't mutch</p>:
                    null}
            </div>
            <div>
                <input type="submit" value="Create User"/>
            </div>
            <fieldset>
                <legend><h1>User Data</h1></legend>
                    <h5>First Name: {firstName}</h5>
                    <h5>Last Name: {lastName}</h5>
                    <h5>Email: {email}</h5>
                    <h5>Password: {password}</h5>
                    <h5>Confirm Paswword: {confirmPassword}</h5>
            </fieldset>
        </form>
    )
}
export default Form
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebaseUtils";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button"

import './SignUpForm.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e)
        if (password !== confirmPassword) {
            alert('Passwords do not match.')
            return;
        }
        try {
            const response = await createAuthUserWithEmailAndPassword(email, password)
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user, {displayName});
                console.log(userDocRef)
            }
            resetFormFields()
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in use");
            }
            else {
                console.log("Error creating user", error.message);
            }
        }

    }

    return <div className="sign-up-form-container">
        <h2>Don't have an account?</h2>
        <span className="">Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label={'Display name'} type="text" required onChange={handleChange}  name="displayName"  value={displayName}/>
            <FormInput label={'Email'} type="email" required onChange={handleChange}  name="email"  value={email}/>
            <FormInput label={'Password'} type="password" required onChange={handleChange}  name="password"  value={password}/>
            <FormInput label={'Confirm password'} type="password" required onChange={handleChange}  name="confirmPassword"  value={confirmPassword}/>
            <Button type="submit">Sign up</Button>
        </form>
    </div>
}

export default SignUpForm;
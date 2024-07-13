import { useState, useContext } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebaseUtils'
import Button from '../../components/button/Button'
import FormInput from '../form-input/FormInput'

import './SignInForm.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/invalid-credential') {
                alert('Incorrect password')
            }
            console.log("Error signing user in", error.message);
        }
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }
    return <div className='sign-in-form-container'>
        <h2>Already have an account?</h2>
        <span className="">Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput name='email' type='text' value={email} label='Email' onChange={handleChange} required />
            <FormInput name='password' type='password' value={password} label='Password' onChange={handleChange} required />
            <div className='buttons-container'>
                <Button type='submit'>Sign in</Button>
                <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
            </div>
        </form>
        {/* <Button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</Button> */}
    </div>
}

export default SignInForm;

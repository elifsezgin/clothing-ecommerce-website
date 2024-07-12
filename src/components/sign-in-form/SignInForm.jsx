import { useEffect, useState } from 'react'
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebaseUtils'
import {
    getRedirectResult
} from 'firebase/auth'
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

    useEffect(() => {
        const fnc = async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
                console.log(userDocRef)
            }
        }
        fnc()
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response)
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
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(userDocRef)
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

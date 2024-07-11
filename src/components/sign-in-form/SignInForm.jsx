import { useEffect, useState } from 'react'
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebaseUtils'
import {
    getRedirectResult
} from 'firebase/auth'
import Button from '../../components/button/Button'
import FormInput from '../form-input/FormInput'

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

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(userDocRef)
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <FormInput name="email" value={email} label="Email" onChange={handleChange} required />
            <FormInput name="password" value={password} label="Password" onChange={handleChange} required />
            <Button type="submit">Sign in</Button>
            <Button onClick={logGoogleUser}>Sign in with Google Popup</Button>
        </form>
        {/* <Button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</Button> */}
    </div>
}

export default SignInForm;

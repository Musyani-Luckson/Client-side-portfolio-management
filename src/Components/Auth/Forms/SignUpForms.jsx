import { useState } from 'react'

import InputForm from '../../Other/InputForm'
import MessageForm from '../../Other/MessageForm'
import { NavLink, Outlet } from 'react-router-dom'
import NonForm from '../../Other/NonForm'
import { useSignUp } from "../Hooks/useSignUp"
import IconComp from '../../Other/IconComp'
// 
const fileds = [
    {
        form: {
            type: `text`,
            id: `fullname`,
            placeHolder: `Fullname`,
            name: `fullname`,
            label: `Fullname`,
            icon: `bi-person-circle`
        },
        message: {
            target: "fullname",
            id: `fullnameMessage`,
            className: `messageFiled`,
        }
    },
    {
        form: {
            type: `email`,
            id: `email`,
            placeHolder: `email`,
            name: `email`,
            label: `Email`,
            icon: `bi-envelope-fill`
        },
        message: {
            target: "email",
            id: `emailMessage`,
            className: `messageFiled`,
        }
    },
    {
        form: {
            type: `password`,
            id: `password`,
            placeHolder: `password`,
            name: `password`,
            label: `Password`,
            icon: `bi-shield-lock-fill`
        },
        message: {
            target: "password",
            id: `passwordMessage`,
            className: `messageFiled`,
        }
    }
]

function SignUp() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const credentials = { fullname, email, password }

    const { signUp, isLoading, error } = useSignUp();
    const handleChange = async (event) => {
        const ID = event.target.id;
        const VALUE = event.target.value;
        if (ID === `fullname`) {
            setFullname(VALUE)
        }
        if (ID === `email`) {
            setEmail(VALUE)
        }
        if (ID === `password`) {
            setPassword(VALUE)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // await signUp(credentials);
        console.log(credentials)
    }

    return (
        <div className='SignUp'>
            <div className='nonFormComp p-1'>
                <NonForm />
            </div>
            <div className='formComp'>
                <form className='myForm' onSubmit={handleSubmit}>
                    <div className='h5 pageName' >
                        SIGN UP
                    </div>
                    {
                        fileds.map(filed => (
                            <div key={filed.form.label} className='rounded m-3'>
                                <InputForm data={filed.form} effects={credentials} handleChange={handleChange} />
                                <MessageForm data={filed.message} msg={error} />
                            </div>
                        ))
                    }
                    <button disabled={isLoading} className="btn btn-primary ms-4 btn-sm">
                        <IconComp icon={`bi-box-arrow-in-left`} />
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}
export default SignUp

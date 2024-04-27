import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import InputForm from '../../Other/InputForm'
import MessageForm from '../../Other/MessageForm'
import NonForm from '../../Other/NonForm'
import { useLogIn } from "../Hooks/useLogIn"
import IconComp from '../../Other/IconComp'

const fileds = [
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
            message: ``
        }
    }
]


function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { logIn, isLoading, error } = useLogIn()

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await logIn(email, password);
        console.log(email, password)

    }
    const handleChange = async (event) => {
        const ID = event.target.id;
        const VALUE = event.target.value;
        if (ID === `email`) {
            setEmail(VALUE)
        }
        if (ID === `password`) {
            setPassword(VALUE)
        }
    }
    const effects = { email, password }
    return (
        <div className='SignUp'>
            <div className='nonFormComp p-1'>
                <NonForm />
            </div>
            <div className='formComp'>
                <form className='myForm' onSubmit={handleSubmit}>
                    <div className='h5 pageName'>
                        Log In
                    </div>
                    {
                        fileds.map(filed => (
                            <div key={filed.form.label} className='m-3'>
                                <InputForm data={filed.form} effects={effects} handleChange={handleChange} />
                                <MessageForm data={filed.message} msg={error} />
                            </div>
                        ))
                    }
                    <button disabled={isLoading} className="btn btn-primary ms-4 btn-sm">
                        <IconComp icon={`bi-box-arrow-in-left`} />
                        Log In
                    </button>
                </form>
            </div>
        </div>
    )
}
export default LogIn

import { useState } from 'react'
import { useClassCreate } from "../Hooks/useClassCreate"
import InputForm from './InputForm'
import MessageForm from './MessageForm'


function ClassCreateModal() {
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const credentials = { category, setCategory }
    const fileds = [
        {
            form: {
                type: `text`,
                id: `classCategory`,
                placeHolder: `School`,
                name: `classCategory`,
                label: `School Name`,
                icon: `bi-globe`
            },
            message: {
                target: "classCategory",
                id: `classCategoryMessage`,
                className: `messageFiled`,
            }
        },
        {
            form: {
                type: `text`,
                id: `className`,
                placeHolder: `NAME`,
                name: `className`,
                label: `Class Name`,
                icon: `bi-house-fill`
            },
            message: {
                target: "className",
                id: `classNameMessage`,
                className: `messageFiled`,
            }
        }
    ]
    const { classCreate, error } = useClassCreate();

    const classCreateHandler = async (event) => {
        alert(`CLASS CREATED`)
        // console.log(error)
        // await classCreate();
        // console.log(error)
    }

    const handleChange = async (event) => {
        const ID = event.target.id;
        const VALUE = event.target.value;
        if (ID === `classCategory`) {
            setCategory(VALUE)
        }
        if (ID === `className`) {
            setName(VALUE)
        }
    }

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog border-0">
                <div className="modal-content border-0">
                    <div className="modal-header border-0">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">

                        </h1>
                    </div>
                    <div className="modal-body border-0">

                        {
                            fileds.map(filed => (
                                <div key={filed.form.label} className='rounded m-3'>
                                    <InputForm data={filed.form} effects={credentials} handleChange={handleChange} />
                                    <MessageForm data={filed.message} msg={error} />
                                </div>
                            ))
                        }

                    </div>
                    <div className="modal-footer border-0">
                        <button type="button" className="btn btn-danger rounded border-0 btn-sm" data-bs-dismiss="modal">CANCEL</button>
                        <button type="button" className="btn btn-success rounded border-0 btn-sm" onClick={classCreateHandler}>CREATE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassCreateModal

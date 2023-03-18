import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import Input from '../../../Components/Input/Input'
import useForm from '../../../Hooks/useForm'
import { maxValid, minValid, emailValid } from "./../../../Validations/Rouls"
import api from "./../../Api"

export default function Users() {

    const [role, setRole] = useState("USER")
    const [users, setUsers] = useState([])

    const [formState, formHandler] = useForm({
        name: {
            value: "",
            isValid: false
        },
        username: {
            value: "",
            isValid: false
        },
        email: {
            value: "",
            isValid: false
        },
        password: {
            value: "",
            isValid: false
        },
        date: {
            value: "",
            isValid: false
        },
        image: {
            value: "",
            isValid: false
        },
    }, false)

    const getAllUsers = () => {
        fetch(`${api}users.json`)
            .then(res => res.json())
            .then(data => setUsers(Object.entries(data)))
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    const sendUser = (event) => {
        event.preventDefault()

        let id = `${formState.inputs.name.value}${Math.floor(Math.random() * 999999)}`


        let newUser = {
            id: id,
            name: formState.inputs.name.value,
            username: formState.inputs.username.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
            image: formState.inputs.image.value,
            date: formState.inputs.date.value,
            role,
            courses:[]
        }

        console.log(newUser);

        fetch(`${api}users.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(res => {
            if (res.ok) {
                swal("Your registration was successful", {
                    icon: "success",
                }).then(() => getAllUsers())
            }
        })
    }

        const deletUser = id => {
            swal("Arue you shur?", {
                icon: "warning",
                buttons: ["Cancel", "Yes"]
            })
        }

        const editUser = id => {
            console.log(id);
        }

        return (
            <>
                <div className="container py-3">
                    <form className="well form-horizontal" action=" " method="post" id="contact_form">
                        <fieldset>
                            <legend>Add New User</legend>

                            {/* <!-- Text input--> */}

                            <div className="form-group row">
                                <label className="col-md-2 control-label">Name</label>
                                <div className="col-md-4 inputGroupContainer">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                        <Input
                                            validations={[
                                                minValid(4),
                                                maxValid(15)
                                            ]}
                                            onRender={formHandler}
                                            id="name" placeholder="Name" className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-md-2 control-label" >UserName</label>
                                <div className="col-md-4 inputGroupContainer">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                        <Input
                                            validations={[
                                                minValid(4),
                                                maxValid(15)
                                            ]}
                                            onRender={formHandler}
                                            id="username"
                                            placeholder="UserName" className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-md-2 control-label">E-Mail</label>
                                <div className="col-md-4 inputGroupContainer">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                        <Input
                                            validations={[
                                                minValid(4),
                                                maxValid(18),
                                                emailValid()
                                            ]}
                                            onRender={formHandler}
                                            id="email"
                                            name="email" placeholder="E-Mail Address" className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-md-2 control-label">Password</label>
                                <div className="col-md-4 inputGroupContainer">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                        <Input
                                            validations={[
                                                minValid(4),
                                                maxValid(18),
                                            ]}
                                            onRender={formHandler}
                                            id="password"
                                            name="email" placeholder="Password" className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>


                            <div className="form-group row">
                                <label className="col-md-2 control-label">Date</label>
                                <div className="col-md-4 inputGroupContainer">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                                        <Input
                                            validations={[
                                                minValid(4),
                                                maxValid(16)
                                            ]}
                                            onRender={formHandler}
                                            id="date"
                                            name="city" placeholder="Date" className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>


                            <div className="form-group row">
                                <label className="col-md-2 control-label">Image</label>
                                <div className="col-md-4 inputGroupContainer">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                                        <Input
                                            validations={[
                                                minValid(4),
                                                maxValid(28)
                                            ]}
                                            onRender={formHandler}
                                            id="image"
                                            name="city" placeholder="image" className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Select Basic --> */}

                            <div className="form-group row">
                                <label className="col-md-2 control-label">State</label>
                                <div className="col-md-4 selectContainer">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                        <select name="state" className="form-control selectpicker" >
                                            <option value=" " >Please select your state</option>
                                            <option>Alabama</option>
                                            <option>Alaska</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            {/* <!-- radio checks --> */}
                            <div className="form-group row">
                                <label className="col-md-2 control-label">Role?</label>
                                <div className="col-md-4">
                                    <div className="radio">
                                        <label>
                                            <input type="radio" name="hosting" value="USER"
                                                onClick={event => setRole(event.target.value)}
                                            /> User
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                            <input
                                                onClick={event => setRole(event.target.value)}
                                                type="radio" name="hosting" value="ADMIN" /> Admin
                                        </label>
                                    </div>
                                </div>
                            </div>


                            {formState.isFormValid ?
                                (<div className="alert alert-success" role="alert" id="success_message">Success <i className="glyphicon glyphicon-thumbs-up"></i> Thanks , Your Form is Valid</div>) :
                                (<div className="alert alert-warning" role="alert" id="success_message"><i className="glyphicon glyphicon-thumbs-up"></i> Your Form is NOT Valid</div>)
                            }



                            <div className="col-md-12">
                                <button type="submit" className="btn btn-info col-md-4"
                                    onClick={(event) => sendUser(event)}
                                >Add New User </button>
                            </div>


                        </fieldset>
                    </form>
                </div>
                <div className='mt-5'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Edir</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr>
                                    <td>{user[1].id}</td>
                                    <td>{user[1].name}</td>
                                    <td>{user[1].username}</td>
                                    <td>{user[1].email}</td>
                                    <td>
                                        <button
                                            onClick={() => editUser(user[0])}
                                            className='btn btn-success btn-sm'>
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => deletUser(user[0])}
                                            className='btn btn-danger btn-sm'>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

            </>
        )
    }

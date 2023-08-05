import React, { useContext, useEffect, useState } from 'react'
import "./Courses.css"
import swal from 'sweetalert'
import Input from '../../../Components/Input/Input'
import useForm from '../../../Hooks/useForm'
import { maxValid, minValid, emailValid } from "./../../../Validations/Rouls"
import api from "./../../Api"
import AuthContext from '../../../Context/authContext'

export default function Courses() {
    const [courses, setCourses] = useState([])
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("Web")

    let authContext = useContext(AuthContext)

    const [formState, formHandler] = useForm({
        title: {
            value: "",
            isValid: false
        },
        shortname: {
            value: "",
            isValid: false
        },
        date: {
            value: "",
            isValid: false
        },
        time: {
            value: "",
            isValid: false
        },
        score: {
            value: "",
            isValid: false
        },
        student: {
            value: "",
            isValid: false
        },
        image: {
            value: "",
            isValid: false
        },
        price: {
            value: "",
            isValid: false
        },
    }, false)

    const getAllCourses = () => {
        fetch(`${api}courses.json`)
            .then(res => res.json())
            .then(data => setCourses(Object.entries(data)))
    }

    useEffect(() => {
        getAllCourses()
    }, [])

    const saveCourse = (event) => {
        event.preventDefault()

        let id = `${formState.inputs.title.value}${Math.floor(Math.random() * 999999)}`


        let newCourse = {
            id: id,
            title: formState.inputs.title.value,
            shortname: formState.inputs.shortname.value,
            price: formState.inputs.price.value,
            category: category,
            image: formState.inputs.image.value,
            date: formState.inputs.date.value,
            time: formState.inputs.time.value,
            score: formState.inputs.score.value,
            student: formState.inputs.student.value,
            teacher: authContext.userInfo,
            description
        }

        console.log(newCourse);

        fetch(`${api}courses.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCourse)
        }).then(res => {
            if (res.ok) {
                swal("Your course was successfully saved", {
                    icon: "success",
                }).then(() => getAllCourses())
            }
        })
    }

    const deleteCourse = id => {
        swal("Are you sure?", {
            icon: "warning",
            buttons: ["cancel", "Delete"]
        }).then(res => {
            if (res) {

                fetch(`${api}courses/${id}.json` , {
                    method:"DELETE",
                }).then(res => {
                    if(res){
                        swal({
                            title:"Course was deleted successfully",
                            icon:"success"
                        }).then(()=> getAllCourses())
                    }
                })
                
            }
        })
    }

    console.log(formState);

    return (
        <>
            <div className="container py-3">
                <form className="well form-horizontal" action=" " method="post" id="contact_form">
                    <fieldset>
                        <legend>Add New Course</legend>

                        <div className="form-group row">
                            <label className="col-md-2 control-label">Title</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <Input
                                        id="title"
                                        validations={[
                                            minValid(3),
                                            maxValid(30)
                                        ]}
                                        onRender={formHandler}
                                        className="form-control"
                                        name="first_name" placeholder="Title" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-2 control-label" >ShortName</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <Input
                                        id="shortname"
                                        validations={[
                                            minValid(3),
                                            maxValid(30)
                                        ]}
                                        onRender={formHandler}
                                        className="form-control"
                                        name="last_name" placeholder="ShortName" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-2 control-label">Date</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                                    <Input
                                        id="date"
                                        validations={[
                                            minValid(3),
                                            maxValid(20)
                                        ]}
                                        onRender={formHandler}
                                        className="form-control"
                                        name="city" placeholder="Date" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-2 control-label">Time</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                                    <Input
                                        id="time"
                                        validations={[
                                            minValid(1),
                                            maxValid(6)
                                        ]}
                                        onRender={formHandler}
                                        className="form-control"
                                        name="city" placeholder="Time" type="number" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-2 control-label">Score</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                                    <Input
                                        id="score"
                                        validations={[
                                            minValid(1),
                                            maxValid(6)
                                        ]}
                                        onRender={formHandler}
                                        className="form-control"
                                        name="city" placeholder="Score" type="number" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-2 control-label">Student</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                                    <Input
                                        id="student"
                                        validations={[
                                            minValid(1),
                                            maxValid(6)
                                        ]}
                                        onRender={formHandler}
                                        className="form-control"
                                        name="city" placeholder="Student" type="number" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-2 control-label">Image</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                                    <Input
                                        id="image"
                                        validations={[
                                            minValid(3),
                                            maxValid(30)
                                        ]}
                                        onRender={formHandler}
                                        className="form-control"
                                        name="Image" placeholder="Image" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-2 control-label">Price</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                                    <Input
                                        id="price"
                                        validations={[
                                            minValid(3),
                                            maxValid(20)
                                        ]}
                                        onRender={formHandler}
                                        className="form-control"
                                        name="city" placeholder="Price" type="number" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-md-2 control-label">Category</label>
                            <div className="col-md-4 selectContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                    <select onClick={event => setCategory(event.target.value)}
                                        name="category" className="form-control selectpicker" >
                                        <option value="-1" >Please select your state</option>
                                        <option value="Web">Web</option>
                                        <option value="Frontend">Frontend</option>
                                        <option value="Backend">Backend</option>
                                        <option value="Web-design">Web Design</option>
                                        <option value="Research">Research</option>
                                        <option value="Game">Game</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Seo">SEO</option>
                                    </select>
                                </div>
                            </div>
                        </div>



                        <div className="form-group row">
                            <label className="col-md-2 control-label">Description</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                                    <textarea
                                        onChange={(event) => setDescription(event.target.value)}
                                        className="form-control" name="comment" placeholder="Description"></textarea>
                                </div>
                            </div>
                        </div>

                        {(formState.isFormValid && description.length) ?
                            (<div className="alert alert-success" role="alert" id="success_message">Success <i className="glyphicon glyphicon-thumbs-up"></i> Thanks , Your Form is Valid</div>) :
                            (<div className="alert alert-warning" role="alert" id="success_message"><i className="glyphicon glyphicon-thumbs-up"></i> Your Form is NOT Valid</div>)
                        }

                        <div className="col-md-12">
                            <button
                                onClick={(event) => saveCourse(event)}
                                type="submit" className="btn btn-info col-md-4" >Save </button>
                        </div>

                    </fieldset>
                </form>
            </div>

            <div className='mt-5'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Teacher</th>
                            <th>Title</th>
                            <th>ShortName</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(course => (
                            <tr key={course[0]}>
                                <td>{course[1].category}</td>
                                <td>{course[1].teacher?.name}</td>
                                <td>{course[1].title}</td>
                                <td>{course[1].shortname}</td>
                                <td>{course[1].price}</td>
                                <td>
                                    <button

                                        className='btn btn-success btn-sm'>
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => deleteCourse(course[0])}
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

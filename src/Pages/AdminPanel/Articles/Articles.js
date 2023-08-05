import React, { useContext, useEffect, useState } from 'react'
import swal from 'sweetalert'
import Input from '../../../Components/Input/Input'
import useForm from '../../../Hooks/useForm'
import { maxValid, minValid, emailValid } from "./../../../Validations/Rouls"
import api from "./../../Api"
import AuthContext from '../../../Context/authContext'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default function Articles() {
    const [articles, setArticles] = useState([])
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("Web")
    const [htmlData , setHtmlData] = useState(null)

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
        score: {
            value: "",
            isValid: false
        },
        image: {
            value: "",
            isValid: false
        },

    }, false)

    const getAllArticles = () => {
        fetch(`${api}articles.json`)
            .then(res => res.json())
            .then(data => setArticles(Object.entries(data)))
    }

    useEffect(() => {
        getAllArticles()
    }, [])

    const saveArticle = (event) => {
        event.preventDefault()

        let id = `${formState.inputs.title.value}${Math.floor(Math.random() * 999999)}`

        let date = new Date()

        // let formData = new FormData()

        // formData.append("id" , id)
        // formData.append("date" , date)
        // formData.append("category" , category)
        // formData.append("title" , formState.inputs.title.value)
        // formData.append("shortname" , formState.inputs.shortname.value)
        // formData.append("image" , formState.inputs.image.value)
        // formData.append("score" , formState.inputs.score.value)
        // formData.append("arthor" , authContext.userInfo)
        // formData.append("description" , description)
        // formData.append("htmlData" , htmlData)

        // console.log(formData);

        let newArticle = {
            id: id,
            title: formState.inputs.title.value,
            shortname: formState.inputs.shortname.value,
            category: category,
            image: formState.inputs.image.value,
            date,
            score: formState.inputs.score.value,
            arthor: authContext.userInfo,
            description,
            htmlData
        }

        console.log(newArticle);

        fetch(`${api}articles.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArticle)
        }).then(res => {
            if (res.ok) {
                swal("Your article was successfully saved", {
                    icon: "success",
                }).then(() => getAllArticles())
            }
        })
    }

    const deleteArticle = id => {
        swal("Are you sure?", {
            icon: "warning",
            buttons: ["cancel", "Delete"]
        }).then(res => {
            if (res) {

                fetch(`${api}articles/${id}.json`, {
                    method: "DELETE",
                }).then(res => {
                    if (res) {
                        swal({
                            title: "the article was deleted successfully",
                            icon: "success"
                        }).then(() => getAllArticles())
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
                        <legend>Add New Article</legend>

                        <div className="form-group row">
                            <label className="col-md-2 control-label">Title</label>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <Input
                                        id="title"
                                        validations={[
                                            minValid(3),
                                            maxValid(40)
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
                                            maxValid(40)
                                        ]}
                                        onRender={formHandler}
                                        className="form-control"
                                        name="last_name" placeholder="ShortName" type="text" />
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
                            <label className="col-md-2 control-label">Category</label>
                            <div className="col-md-4 selectContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                    <select onClick={event => setCategory(event.target.value)}
                                        name="category" className="form-control selectpicker" >
                                        <option value="-1" >Please select your state</option>
                                        <option value="Global">Global</option>
                                        <option value="Ekonomik">Ekonomik</option>
                                        <option value="Data">Data</option>
                                        <option value="Web">Web</option>
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

                        <div className='py-3'>
                            <CKEditor
                                editor={ClassicEditor}
                                data="<p>Hello from CKEditor 5!</p>"
                                onReady={editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setHtmlData(data)
                                    console.log({ event, editor, data });
                                }}
                                
                                                          />
                        </div>
                        {(formState.isFormValid && description.length) ?
                            (<div className="alert alert-success" role="alert" id="success_message">Success <i className="glyphicon glyphicon-thumbs-up"></i> Thanks , Your Form is Valid</div>) :
                            (<div className="alert alert-warning" role="alert" id="success_message"><i className="glyphicon glyphicon-thumbs-up"></i> Your Form is NOT Valid</div>)
                        }

                        <div className="col-md-12">
                            <button
                                onClick={(event) => saveArticle(event)}
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
                            <th>Arthur</th>
                            <th>Title</th>
                            <th>ShortName</th>

                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map(article => (
                            <tr key={article[0]}>
                                <td>{article[1].category}</td>
                                <td>{article[1].arthor?.name}</td>
                                <td>{article[1].title}</td>
                                <td>{article[1].shortname}</td>
                                <td>
                                    <button

                                        className='btn btn-success btn-sm'>
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => deleteArticle(article[0])}
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

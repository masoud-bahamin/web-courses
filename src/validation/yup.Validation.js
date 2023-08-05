import * as yup from "yup" ;


export const loginSechma = yup.object().shape({
    username:yup.string().min(4).max(30).required(),
    password:yup.string().required().min(3)
})

export const registerSchema = yup.object().shape({
    name:yup.string().min(3).max(25).required(),
    username:yup.string().min(3).max(25).required(),
    email:yup.string().email().required(),
    password:yup.string().min(4).max(30).required()
})

export const commentSchema = yup.object().shape({
    subject:yup.string().min(3).max(30).required(),
    message:yup.string().min(5).max(300).required()
})
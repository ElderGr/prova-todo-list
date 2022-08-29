import * as Yup from 'yup'

export const signUpSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).max(10).required(),
    passwordConfirm: Yup.ref('password')
})
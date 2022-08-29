import * as Yup from 'yup'

export const signInSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).max(10).required()
})
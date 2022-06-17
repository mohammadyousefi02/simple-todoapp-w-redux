import React from 'react'

import {useDispatch, useSelector} from 'react-redux'

import {useNavigate} from 'react-router-dom'

import {login} from "./redux/slices/loginSlice"

import {useFormik} from 'formik'

import * as Yup from 'yup'

function Login() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      const user = {
        email: values.email,
        password: values.password
    }
    dispatch(login({user,cb:()=>navigate("/todos")}))
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required()
    })
  })

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const {pending,token} = useSelector(state => state.login)

  

  return (
    <div >
        <input value={formik.values.email} onChange={formik.handleChange} name="email" type="text" placeholder='enter your email' />
        <input value={formik.values.password} onChange={formik.handleChange} name="password" type="password" placeholder='enter your password' />
        <button onClick={formik.handleSubmit}>Login</button>

        <span>{pending}</span>
        <span>{token}</span>

        <div>
          {pending === "failed" && <span>enter your email and password correctly</span>}
          {formik.errors.email ? <p>{formik.errors.email}</p> : null}
          {formik.errors.password ? <p>{formik.errors.password}</p> : null}
        </div>


    </div>
  )
}

export default Login
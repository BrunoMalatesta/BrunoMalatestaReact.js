import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Container, Form, Button} from "semantic-ui-react"
import {useFormik} from "formik";
import * as Yup from "yup"



export const Formulario = () => {

  const formik = useFormik({
    initialValues: {
        name:"",
        email: "",
        direccion:"",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string().email("Este email no es valido").required("El email es obligatorio"),
      direccion: Yup.string().required("La contraseña es obligatoria"),
    }),
    onSubmit:(formData) => {
      console.log(formData)
    }
 })

  return (
    <Container>
      <h1>Completa el Formulario para finalizar la compra</h1>
      <Form onSubmit={formik.handleSubmit}>
          <Form.Input type="text" placeholder="Nombre y Apellido" name="name" onChange={formik.handleChange} error={formik.errors.name} value={formik.values.name}/>
          <Form.Input type="email" placeholder="Correo Electronico" name="email"onChange={formik.handleChange} error={formik.errors.email} value={formik.values.email}/>
          <Form.Input type="text" placeholder="Direccion" name="direccion"onChange={formik.handleChange} error={formik.errors.direccion} value={formik.values.direccion}/>

          <Button type="submit">Registrar</Button>
          <Button type="button" onClick={formik.handleReset}>Limpiar Formulario</Button>
      </Form>
    </Container>
  )
}



import React, { useContext } from "react";
import 'semantic-ui-css/semantic.min.css'
import {Container, Form, Button} from "semantic-ui-react"
import {useFormik} from "formik";
import * as Yup from "yup"
import { db } from '../../Components/Firebase/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { Context } from "../../context/CartContext";
import Swal from 'sweetalert2';



export const Formulario = () => {
  const { quantity, cart, total, clear } = useContext(Context);

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



 const usuario = {
  name: "Bruno",
  phone: "+54 2975072078",
  email: "user@mail.com"
}

const finalizarCompra = ()=>{
  const  ventasCollection = collection(db, "ventas");
  addDoc(ventasCollection,{
      usuario,
      items:cart,
      total,
      date:serverTimestamp()
  })
  .then(result => {
      console.log(result.id);
      Swal.fire({
          title: 'Gracias por su compra!',
          html: `Numero de Referencia de Compra: <b>${result.id}</b>`,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })

  });
  modificarStock(cart);
  clear();
}

const modificarStock = () => {
  cart.forEach(item => {
      const product = doc(db, "productos", item.id);
      updateDoc(product, {stock: item.stock - item.quantity})
  })
}






  return (
    <Container>
      <h1>Completa el Formulario para finalizar la compra</h1>
      <Form onSubmit={formik.handleSubmit}>
          <Form.Input type="text" placeholder="Nombre y Apellido" name="name" onChange={formik.handleChange} error={formik.errors.name} value={formik.values.name}/>
          <Form.Input type="email" placeholder="Correo Electronico" name="email"onChange={formik.handleChange} error={formik.errors.email} value={formik.values.email}/>
          <Form.Input type="text" placeholder="Direccion" name="direccion"onChange={formik.handleChange} error={formik.errors.direccion} value={formik.values.direccion}/>

          <Button type="submit" onClick={finalizarCompra}>Finalizar Compra</Button>
          <Button type="button" onClick={formik.handleReset}>Limpiar Formulario</Button>
      </Form>
    </Container>
  )
}



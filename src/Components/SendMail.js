import React from 'react'
import "./SendMail.css"
import CloseIcon from "@mui/icons-material/Close"
import { Button } from '@mui/material'
import {useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../features/mailSlice'
import {db} from "./firebase";
import firebase from 'firebase'
const SendMail = () => {
  const {register,handleSubmit,watch,formState:{errors}} = useForm();
  const onSubmit = (data) =>{
    console.log(data)
    db.collection('emails').add(
      {
        to:data.To,
        subject:data.subject,
        message:data.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })

      dispatch(closeSendMessage())
  }
  const dispatch = useDispatch();
  return (
    <div className='sendMail'>
       <div className='sendMail__header'>
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" 
        onClick={()=> dispatch(closeSendMessage())} />
       </div>
       <form onSubmit={handleSubmit(onSubmit)}>
        <input
         name="To" 
         placeholder='To' 
         type="email"
         {...register("To",{required:true})}
          />
         {errors.To?.type==='required' && <p className='sendMail__error'>To is required </p>}
        <input 

        name="subject" 
        placeholder='Subject' 
        type="text" 
       {...register("subject",{required:true})}
        />
                 {errors.subject?.type==='required' && <p className='sendMail__error'>To is required </p>}

        <input 
        name="message" 
        placeholder='Message...' 
        className='sendMail__message' 
        type="text"
        {...register("message",{required:true})}
         />
         {errors.message?.type==='required' && <p className='sendMail__error'>To is required </p>}

        <div className='sendMail__options'>
            <Button
             className="sendMail__send"
             variant="contained"
             color="primary"
             type="submit"
            >Send</Button>
        </div>
       </form>
    </div>
  )
}

export default SendMail
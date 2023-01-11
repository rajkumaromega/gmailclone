import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import EmailList from './Components/EmailList';
import Mail from './Components/Mail';
import SendMail from './Components/SendMail';
import {useDispatch, useSelector} from "react-redux"
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Components/Login';
import { auth } from './Components/firebase';
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   auth.onAuthStateChanged((user)=>{
  //     if(user){
  //       dispatch(
  //         login({
  //           displayName:user.displayName,
  //           email:user.email,
  //           photoUrl:user.photoURL,
  //         })
  //       )
  //     }
  //   })
  // })
  return (
   
    <Router>
      {!user ? (
        <Login />
      ):(
      <div className="App">
      <Header />
        <div className='app__body'>
            <Sidebar />
            <Routes>
            <Route path="/mail" element={<Mail/>}></Route>
            <Route path="/" element={<EmailList />}></Route>
          </Routes>
        </div>    
       {sendMessageIsOpen && <SendMail />  }
      </div>
      )}
    </Router>
  );
}

export default App;

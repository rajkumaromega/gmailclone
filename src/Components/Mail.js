import {IconButton}  from '@mui/material'
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox"
import ErrorIcon from "@mui/icons-material/Error"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import WatchLaterIcon from "@mui/icons-material/WatchLater"
import LabelImportantIcon from "@mui/icons-material/LabelImportant"
import DeleteIcon from "@mui/icons-material/Delete"
import EmailIcon from "@mui/icons-material/Email"
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore"
import  PrintIcon from "@mui/icons-material/Print"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"


import React from 'react'
import "./Mail.css"
import MoreVert from '@mui/icons-material/MoreVert'
import { useHistory, useNavigate } from 'react-router-dom'
import Print from '@mui/icons-material/Print'
import { useSelector } from 'react-redux'
import { selectMail, selectOpenMail } from '../features/mailSlice'
const Mail = () => {
//   const history = useHistory();
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);
  console.log(selectOpenMail);
  return (
    <div className='mail'>
      <div className='mail__tools'>
        <div className='mail__toolsLeft'>
        <IconButton onClick={() => navigate("/")}>
                <ArrowBackIcon />
        </IconButton>
            <IconButton>
                <MoveToInboxIcon />
            </IconButton>
            <IconButton>
                <ErrorIcon />
            </IconButton>
            <IconButton>
                <DeleteIcon />
            </IconButton>
            <IconButton>
                <EmailIcon />
            </IconButton>
            <IconButton>
                <WatchLaterIcon />
            </IconButton>
            <IconButton>
                <CheckCircleIcon />
            </IconButton>
            <IconButton>
                <LabelImportantIcon />
            </IconButton>
            <IconButton>
                <MoreVert />
            </IconButton>
        </div>
        <div className='mail__toolsRight'>
        <IconButton>
            <UnfoldMoreIcon />
         </IconButton>
            <IconButton>
                <PrintIcon />
            </IconButton>
            <IconButton>
                <ExitToAppIcon />
            </IconButton>
        </div>
      </div>
      <div className='mail__body'>
        <div className='mail__bodyHeader'>
            <h2>{selectedMail?.subject}title</h2>
            <LabelImportantIcon className='mail__important' />
            <p>{selectedMail?.title}</p>
            <p className='mail__time'>{selectedMail?.time}</p>
        </div>
        <div className='mail__message'>{selectedMail?.description}</div>
      </div>
    </div>
  )
}

export default Mail
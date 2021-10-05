import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorIcon from '@material-ui/icons/Error';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
const Message = ({text,icon}) => (
  <div className="toast__msg">
    {icon}
    <span>{text}</span>
  </div>
)
const customToast = {
  success:(text)=> toast.success(<Message text={text} icon={<CheckCircleOutlineIcon className="toast__msg-icon"/>}/>),
  error:(text)=> toast.error(<Message text={text} icon={<ErrorIcon className="toast__msg-icon"/>}/>),
  warning:(text)=> toast.warning(<Message text={text} icon={<WarningIcon className="toast__msg-icon"/>}/>),
  info:(text)=> toast.info(<Message text={text} icon={<InfoIcon className="toast__msg-icon"/>}/>),
}

export {customToast};
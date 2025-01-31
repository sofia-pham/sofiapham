import React, { useState } from 'react'

//custom hook, to use multiple times in the app
const useAlert = () => {
  const [alert, setalert] = useState({show: false, text: '', type: 'danger'})

  const showAlert = ({text, type = 'danger'}) => setalert({show: true, text, type})

  const hideAlert = () => setalert({show: false, text: '', type: 'danger'})
  
  return {
    alert, showAlert, hideAlert
  }
}

export default useAlert
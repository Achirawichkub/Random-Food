import React, { useState } from 'react'
import  Toast  from 'react-bootstrap/Toast'
import  Button  from 'react-bootstrap/Button'

function BasicToast() {
    const [show,setShow] = useState(false);
    const toggleShow = () => setShow(!show)
  return (
    <><Button onClick={toggleShow} className='mb-2'>
          Toggle Toast
      </Button>
        <Toast show={show} onClose={toggleShow}>
              <Toast.Header>
                  <strong className='mr-auto'>Achirawich</strong>
                  <small>Just now</small>
              </Toast.Header>
              <Toast.Body>Hello Toast</Toast.Body>
        </Toast>
    </>
  )
}

export default BasicToast
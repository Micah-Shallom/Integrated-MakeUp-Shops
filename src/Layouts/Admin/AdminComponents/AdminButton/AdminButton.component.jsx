import React from 'react'
import { AdminBtn } from './AdminButton.styles'

const AdminButton = ({children, submit}) => {
  return (
    <AdminBtn submit={submit}>
      {children}
    </AdminBtn>
  )
}

export default AdminButton

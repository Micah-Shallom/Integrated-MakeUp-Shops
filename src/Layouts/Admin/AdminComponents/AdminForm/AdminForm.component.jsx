import React from 'react';
import {Input} from './AdminForm.style'

const AdminForm = ({handleChange,...otherProps}) => {
  return (
    <Input 
      onChange={handleChange}
      {...otherProps}
    />
  )
}

export default AdminForm

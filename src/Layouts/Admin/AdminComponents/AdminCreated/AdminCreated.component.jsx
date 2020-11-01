import React from 'react'
import { AdminCreatedContainer } from './AdminCreated.style';
// import {IconButton } from '@material-ui/icons'
import { Avatar, IconButton, Tooltip } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { MoreVertOutlined } from '@material-ui/icons';

const AdminCreated = () => {
  return (
    <AdminCreatedContainer>
      <IconButton>
        <Avatar />
      </IconButton>

      <div className="userInfo">
        <p className="userInfo__name">
        Micah Shallom
        </p>
        <p className="userInfo__email">
        micahshallom@gmail.com
        </p>
        <p className="userInfo__gender">Male</p>
        <p className="userInfo__phone">
          09071111150
        </p>
      </div>

      <div className="icons">

      <Tooltip title='Remove Agent' arrow>
        <IconButton>
          <DeleteForeverIcon/>
        </IconButton>
      </Tooltip>
      <Tooltip title='Agent Transactions' arrow>
        <IconButton>
          <AccountBalanceIcon/>
        </IconButton>
      </Tooltip>
      <Tooltip title='More Options' arrow>
        <IconButton>
          <MoreVertOutlined/>
        </IconButton>
      </Tooltip>
      </div>

    </AdminCreatedContainer>
  )
}

export default AdminCreated;

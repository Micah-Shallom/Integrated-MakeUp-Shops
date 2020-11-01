import React from 'react';
import {CountContainer} from './DashBoardCount.styles'

const DashBoardCount = ({title,count,color,...icon}) => {
  return (
    <CountContainer color={color}>
        <div className="icon">
          <icon.icon/>
        </div>
        <h2 className="title">{title}</h2>
        <h1 className="count_value">{count}</h1>
    </CountContainer>
  )
}

export default DashBoardCount

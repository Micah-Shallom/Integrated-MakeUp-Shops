import React from 'react';
import {DashBoardItem} from './DashBoardLayoutItem.styles';

const DashBoardLayoutItem = ({title,...icon}) => {
  return (
    <DashBoardItem>
    <div className="text">
        <span className="icon"> <icon.icon/> </span>
        <span className="title">{title}</span>
    </div>
    </DashBoardItem>
  )
}

export default DashBoardLayoutItem

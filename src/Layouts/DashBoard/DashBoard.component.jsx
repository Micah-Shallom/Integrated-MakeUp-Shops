import React from 'react';
import {CountContainer, DashBoardContainer,DashBoardCounter} from './DashBoard.styles.js';
import {countData} from './DashBoardCountData';

const DashBoard = () => {
  return (
    <DashBoardContainer>
      <DashBoardCounter>
          {
           countData.map(({id,count,color,title,...icon}) => (
            <CountContainer  key={id} color={color}>
                <div className="icon">
                  <icon.icon/>
                </div>
                <h1 className="count_value">{count}</h1>
                <h2 className="title">{title}</h2>
              </CountContainer>
           ))
          }
      </DashBoardCounter>
    </DashBoardContainer>
  )
}

export default DashBoard

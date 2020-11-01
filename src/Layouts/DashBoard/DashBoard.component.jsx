import React from 'react';
import DashBoardCount from '../../Components/DashBoardCount/DashBoardCount';
import {DashBoardContainer,DashBoardHeader,DashBoardCounter} from './DashBoard.styles';
import {countData} from './DashBoardCountData';

const DashBoard = () => {
  return (
    <DashBoardContainer>
      <DashBoardHeader>
        <div className="intro">
          <h1 className='title'>DashBoard</h1>
          <p className='subtitle'>Welcome Micah Shallom</p>
        </div>

        <div className="links">
          Hello
        </div>
      </DashBoardHeader>

      <DashBoardCounter>
          {
            countData.map(({id,...otherProps}) => <DashBoardCount key={id} {...otherProps} />)
          }
      </DashBoardCounter>
    </DashBoardContainer>
  )
}

export default DashBoard

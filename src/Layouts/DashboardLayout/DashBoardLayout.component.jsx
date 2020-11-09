import React from 'react';
import {DashBoardLayoutContainer,UserProfile,DashBoardRoutes,LayoutContainer, DashBoardLayoutItem} from './DashboardLayout.styles';
import {DashboardData} from './DashBoardData'

import profilePhoto from '../../assets/Images/pexels-alexander-krivitskiy-1264442.jpg'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const DashBoardLayout = ({match:{url}, history}) => {
  return (
    <LayoutContainer>
      <DashBoardLayoutContainer>

        <UserProfile>
          <img className='profile_img' src={profilePhoto} alt="user_image"/>

          <p className="name">Micah Shallom</p>
          <p className="userName">@ms_intellect</p>
        </UserProfile>

        <DashBoardRoutes>
           {
             DashboardData.map(({id,title,link,...icon}) => (
              <DashBoardLayoutItem onClick={() => history.push(`/home/${link}`)} key={id} >
                  <div className="text">
                    <span className="icon">
                     <icon.icon/>
                    </span>
                    <span className="title">{title}</span>
                </div>
                  </DashBoardLayoutItem>
             ))
           }
        </DashBoardRoutes>
      </DashBoardLayoutContainer>
    </LayoutContainer>
  )
}

export default withRouter(DashBoardLayout)

import React from 'react';
import {DashBoardLayoutContainer,UserProfile,DashBoardRoutes,LayoutContainer} from './DashboardLayout.styles';
import {DashboardData} from './DashBoardData'
import DashBoardLayoutItem from '../../Components/DashBoardLayoutItem/DashBoardLayoutItem.component';
import profilePhoto from '../../assets/Images/pexels-alexander-krivitskiy-1264442.jpg'

const DashBoardLayout = () => {
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
              DashboardData.map(({id,...otherProps}) => <DashBoardLayoutItem key={id} {...otherProps} />)
            }
        </DashBoardRoutes>
      </DashBoardLayoutContainer>

    </LayoutContainer>
  )
}

export default DashBoardLayout

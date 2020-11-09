import React from 'react'
import { withRouter } from 'react-router'
import { HeaderContainer } from './Header.styles'

const pageUrlToPageInfo = {
    dashboard : {
        title : 'Welcome to IMS',
        subtitle : 'Keep a birds eye view of your activities'
    },
    admin : {
        title : 'Welcome Admin',
        subtitle : 'Nice to have you today'
    },
    profile : {
        title : 'Your Profile',
        subtitle : 'View Profile '
    },
    students : {
        title : 'All Registered Students',
        subtitle : 'View Registered Students'
    },
    businessowner : {
        title : 'All Reistered Business Owners',
        subtitle : 'View Registered Business Owners'
    },
    settings : {
        title : 'All Settings'
    }
}
const Header = ({match:{params:{page}}}) => {

    const {title, subtitle} = pageUrlToPageInfo[page]
    return (
       <HeaderContainer>
           <div className="header_info">
               <h2 className="title">{title}</h2>
               <p className="subtitle">{subtitle}</p>
           </div>
           <div className="breadCrumbs">
               /home/dashboard
           </div>
       </HeaderContainer>
    )
}

export default withRouter(Header)

import {FaAddressBook, FaCarCrash, FaCrown, FaHome, FaLaptopCode, FaSchool, FaShoppingBag, FaUser} from 'react-icons/fa';

export const DashboardData= [
  {
    id : 1,
    title : 'Dashboard',
    icon : FaHome,
    link : 'dashboard'
  },
  {
    id : 2,
    title : 'Profile',
    icon : FaUser,
    link : 'profile'
  },
  {
    id : 3,
    title : 'Admin',
    icon : FaLaptopCode,
    link : 'admin'
  },
  // {
  //   id : 4,
  //   title : 'Agent',
  //   icon : FaAddressBook,
  //   link : 'agent'
  // },
  // {
  //   id : 5,
  //   title : 'Shops',
  //   icon : FaShoppingBag,
  //   link : 'shops'
  // },
  {
    id : 5,
    title : 'Business Owner',
    icon : FaCrown,
    link : 'business'
  },
  {
    id : 6,
    title : 'Students',
    icon : FaSchool,
    link : 'students'
  },
  {
    id : 7,
    title : 'Settings',
    icon : FaCarCrash,
    link : 'settings'
  },
]
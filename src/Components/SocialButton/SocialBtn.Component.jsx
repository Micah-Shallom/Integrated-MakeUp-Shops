import React from 'react'
import { SButton } from './SocialBtn.styles';

const SocialBtn = ({children,icon,type,handleClick}) => (
  <SButton onClick={handleClick} type={type}>
    <div>
      {icon}
    </div>
    {children}
  </SButton>
)

export default SocialBtn;

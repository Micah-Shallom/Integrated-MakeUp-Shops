import React from 'react'
import { SButton } from './SocialBtn.styles';

const SocialBtn = ({title,icon,type}) => (
  <SButton type={type}>
    <div>
      {icon}
    </div>
    {title}
  </SButton>
)

export default SocialBtn;

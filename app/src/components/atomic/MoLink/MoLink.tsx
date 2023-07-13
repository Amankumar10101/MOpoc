
import * as React from 'react';
import Link from '@mui/material/Link';


interface Ilink{
    link?: string,
    name?: string,
  
}

const MoLink: React.FC<Ilink> = ({ link, name }) => {

  const linkStyle: any = {
    color: '#00B7FD',
    fontSize: 'smaller',
    textAlign: 'end',
  };

  return (
      <Link href={link} underline="none" sx={linkStyle}>
        {name}
      </Link> 
  );
}
export default MoLink;
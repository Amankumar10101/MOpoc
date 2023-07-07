/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Link from '@mui/material/Link';
import '../../../styles/components/atomic/MoLink.scss';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

interface link{
    link?: string,
    name?: string,
}

export default function MoLink(props : link ) {

    const {name, link}=props;
  return (
      <Link href={link} underline="none" className='link'>
        {name}
      </Link> 
  );
}

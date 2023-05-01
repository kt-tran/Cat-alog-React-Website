import React from 'react';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import DoneIcon from '@mui/icons-material/Done';

export function HypoallergenicRenderer(props) {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
  if (cellValue === 1) {
    return (
      <span>
        <DoneIcon color="success" />
      </span>
    );
  }
  else {
    return (
      <span>
        <NotInterestedIcon color="error" />
      </span>
    );
  }
};
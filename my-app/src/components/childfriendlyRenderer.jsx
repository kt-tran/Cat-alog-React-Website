import React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#89cff0',
  }
});

export function ChildfriendlyRenderer(props) {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
  return (
    <span>
      <StyledRating
        name="read-only customized-color"
        value={cellValue}
        precision={1}
        icon={<ChildFriendlyIcon fontSize="inherit" />}
        emptyIcon=" "
        readOnly
      />
    </span>
  );
};
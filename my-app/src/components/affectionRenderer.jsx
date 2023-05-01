import React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  }
});

export function AffectionRenderer(props) {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
  return (
    <span>
      <StyledRating
        name="read-only customized-color"
        value={cellValue}
        precision={1}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon=" "
        readOnly
      />
    </span>
  );
};
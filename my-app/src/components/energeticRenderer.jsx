import React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#FFBF00',
    }
  });

export function EnergeticRenderer(props) {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
    return (
        <span>
            <StyledRating
            name="read-only customized-color"
            value={cellValue}
            precision={1}
            emptyIcon=" "
            icon={<ElectricBoltIcon fontSize="inherit" />}
            readOnly
            />
        </span>
        );
};
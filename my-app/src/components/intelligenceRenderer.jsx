import React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import PsychologyIcon from '@mui/icons-material/Psychology';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#7120a0',
    }
  });

export function IntelligenceRenderer(props) {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
    return (
        <span>
            <StyledRating
            name="read-only customized-color"
            value={cellValue}
            precision={1}
            emptyIcon=" "
            icon={<PsychologyIcon fontSize="inherit" />}
            readOnly
            />
        </span>
        );
};
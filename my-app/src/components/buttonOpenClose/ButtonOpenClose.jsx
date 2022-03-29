
import * as React from 'react';
import Button from '@mui/material/Button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import "./ButtonOpenClose.scss";
import { useState } from 'react';

export default function ButtonOpenClose() {
  
  return (
    <Stack direction="row" spacing={2}>
      <Button className='buttonOpen' variant="contained" endIcon={<ExpandMoreIcon />}>
        Open Add Task Bar
      </Button>
    </Stack>
  );
}


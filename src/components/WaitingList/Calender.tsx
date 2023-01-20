import './Calender.scss';
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function BasicDateTimePicker() {
  const [value, setValue] = React.useState<Dayjs | null>();

  return (
    <div className='CalenderLocation'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker className='CalenderStyle'
      
        renderInput={(props) => <TextField {...props} />}
        label="현재 날짜 및 시각"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
    </div>

  );
}
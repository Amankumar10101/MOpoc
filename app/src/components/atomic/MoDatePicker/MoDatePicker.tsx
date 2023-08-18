import * as React from 'react';
import dayjs , { Dayjs} from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IDateInterface } from '@/app/src/interfaces/components/date';


export default function DatePickerValue(props: IDateInterface) {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs()) ;
  const { label, width, placeholder, name, id, className } = props;
 

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
        disablePast
          value={value}
          onChange={(newValue) => setValue(newValue)}
          format="LL"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
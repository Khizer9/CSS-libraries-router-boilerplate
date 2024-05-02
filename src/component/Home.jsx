import React from 'react';
import InputMui from './InputMui'
import CustomizedSwitches from './SwitchMui'
import ButtonRB from './ButtonRB'
import CardRB from './CardRB'
import DatePickerAntd from './DatePickerAntd'
import UploadAntd from './UploadAntd'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h3>Want to login? <Link to={'/login'}>Click here</Link> </h3>
        <InputMui />
        <CustomizedSwitches />
        <ButtonRB />
        <CardRB />
        <DatePickerAntd />
        <UploadAntd />
    </div>
  );
}

export default Home;

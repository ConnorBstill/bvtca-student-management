import { useNavigate } from 'react-router-dom';

import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

import './RegisterScreen.css';

const RegisterScreen = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Make request to get jwt
    // Store the jwt in local storage
    navigate('/home');
  }

  return (
    <div className='register-container'>

      <div className='register-form-container'>
        <h1>Register</h1>

        <Input placeholder='Username' type='input' />

        <Input placeholder='Password' type='password' />

        <Input placeholder='Confirm password' type='password' />

        <Button onClick={() => handleRegisterClick()}>Register</Button>
      </div>
    </div>
  );
}

export default RegisterScreen;

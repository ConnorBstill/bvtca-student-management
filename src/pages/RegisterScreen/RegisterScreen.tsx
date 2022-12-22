import Input from '../../components/common/Input';

import './RegisterScreen.css';

const RegisterScreen = () => {

  return (
    <div className='register-container'>

      <div className='register-form-container'>
        <h1>Register</h1>

        <Input placeholder='Username' type='input'/>

        <Input placeholder='Password' type='password' />

        <Input placeholder='Confirm password' type='password' />
      </div>
    </div>
  );
}

export default RegisterScreen;

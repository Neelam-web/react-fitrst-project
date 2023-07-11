import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FiLogIn} from "react-icons/fi"
import Swal from 'sweetalert2'
import Typed from 'react-typed'
function Login() {
 

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")



const loginUser =(e)=>{
e.preventDefault();

const payLoad = { email,password};
Swal.fire({
  title: 'Successfully Login!',
  text: 'Thanks for Login ',
  icon: 'success',
  confirmButtonText: 'Go For Shopping',
})


};


  return (
<div className='image img-fluid'>
     <div className='con'><FiLogIn className='text-white text-8xl icon' />
     
    <Form onSubmit={loginUser}className= ' m-5 text-center sub'>
      <div><h1 className='lg'><b> <Typed strings={['Login Form']}typeSpeed={100}loop={true} /></b></h1></div>
      <Form.Group className="m-6" controlId="formBasicEmail">
        <Form.Label
        ><b className='email'>Email Address</b></Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} 
        value={email} />
      </Form.Group>

      <Form.Group className="m-6 " controlId="formBasicPassword">
        <Form.Label className='pass'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} /> 
</Form.Group>
     
      <Button className='bttn'variant="primary" type="submit">
       <b>Login </b>

    </Button> 


      <p className='link'>

        <a className='co' href='#'>Forgot Password</a> Or <a className='co' href='#'>Signup</a>
      </p>
    </Form>


    </div>
    </div>
  );
}

export default Login;
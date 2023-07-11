import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FiLogIn} from "react-icons/fi"
import Swal from 'sweetalert2'
import Typed from 'react-typed'
function Signup() {
 

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
<div>
     <div className='signup'><FiLogIn className='text-white text-8xl icon' />
     
    <Form onSubmit={loginUser}className= ' m-5 text-center sub'>
      <div><h1 className='lg'><b> <Typed strings={['Signup']}typeSpeed={100}loop={true} /></b></h1></div>

      <Form.Group className="m-2" controlId="formBasicName">
        <Form.Label
        ><b className='First Name'>First Name</b></Form.Label>
        <Form.Control type="Name" placeholder="Enter Your First Name" onChange={(e) => setName(e.target.value)} 
        value={name} />
      </Form.Group>
      <Form.Group className="m-2" controlId="formBasicName">
        <Form.Label
        ><b className='Last Name'> Last Name</b></Form.Label>
        <Form.Control type="Name" placeholder="Enter Your Last Name" onChange={(e) => setName(e.target.value)} 
        value={name} />
      </Form.Group>

      <Form.Group className="m-2" controlId="formBasicEmail">
        <Form.Label
        ><b className='email'>Email Address</b></Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} 
        value={email} />
      </Form.Group>

      <Form.Group className="m-2 " controlId="formBasicPassword">
        <Form.Label className='pass'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} /> 
</Form.Group>
<Form.Group className="m-2" controlId="formBasicEmail">
        <Form.Label
        ><b className='Confirmed Password'>Confirmed password</b></Form.Label>
        <Form.Control type="email" placeholder="confirmed password" onChange={(e) => setPassword(e.target.value)} 
        value={password} />
      </Form.Group>
     
      <Button className='bttn'variant="primary" type="submit">
       <b>Signup </b>

    </Button> 


      <p className='link'>

        <a className='co' href='#'>Forgot Password</a> Or <a className='co' href='#'>Signup</a>
      </p>
    </Form>


    </div>
    </div>
  );
}

export default Signup;
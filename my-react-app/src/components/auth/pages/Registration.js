import{TextField,FormControlLabel,Checkbox,Button,Box,Alert} from '@mui/material';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Registration=()=>{
        const[error,setError]=useState({
    status:false,
    msg:"",
    type:""
  })
  const navigate=useNavigate();
  const handleSubmit=(e) =>{
    e.preventDefault();
    const data=new FormData(e.currentTarget)
    const actualData = {
      name: data.get('name'),
  password: data.get('password'),
  email: data.get('email'),
  password_confirmation: data.get('password_confirmation'),
  scholar_no: data.get('scholar_no'),
   contact_no: data.get('contact_no'),
course: data.get('course'),
  branch: data.get('branch'),
room_no: data.get('room_no'),
    };
    
    //Violation
    if(actualData.email && actualData.password){
      console.log(actualData);
      if(actualData.password===actualData.password_confirmation){
        console.log(actualData)
      document.getElementById('login-form').reset()
      setError({status:true,msg:"Login Success",type:'success'})
      navigate('/')
    }
    else
    {
       setError({status:true,msg:"Password and confirm Password doesn't match",type:'error'}) 
    }
  }
  else
    {
      setError({ status: true, msg: "All Fields are required", type:'error' });
    }
  
    return(
    <>
   <Box component="form" noValidate sx={{ mt: 1 ,ml:2 }} id="registration-form"
      onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          name='name'
          label="Name"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="scholar_no"
          name="scholar_no"
          label="Scholar No."
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="room_no"
          name="room_no"
          label="Room Number"
        />
       <TextField
          margin="normal"
          required
          fullWidth
          id="contact_no"
          name="contact_no"
          label="Contact Number"
        /> 
        <TextField
          margin="normal"
          required
          fullWidth
          id="course"
          name="course"
          label="Course"
        />
         <TextField
          margin="normal"
          required
          fullWidth
          id="branch"
          name="branch"
          label="Branch"
        />
        


        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password_confirmation"
          name="password_confirmation"
          label="Confirm Password"
          type="password"
        />
        <Box textAlign="center">
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 ,px:5}}>
            Join
          </Button>
        </Box>
        
      {error.status?<Alert severity={error.type}>{error.msg}</Alert>:' '
};
      </Box>
    </>
    );
}
}
export default Registration;
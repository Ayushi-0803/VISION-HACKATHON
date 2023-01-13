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
      email: data.get('email'),
  password: data.get('password'),
    };
    
    //Violation
    if(actualData.email && actualData.password){
      console.log(actualData);
      document.getElementById('login-form').reset()
      setError({status:true,msg:"Login Success",type:'success'})
      navigate('/')
    }
    else
    {
      setError({ status: true, msg: "All Fields are required", type:'error' });
    }
  }
    return(
    <>
   <Box component="form" noValidate sx={{ mt: 1 }} id="registration-form"
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
export default Registration;
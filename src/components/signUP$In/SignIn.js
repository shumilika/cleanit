import { Box, TextField } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUserEmailAction } from '../../actions/CleaningsActions';

const SignIn = ({password, setPassword}) => {

    const {email} = useSelector(state=>state.clean);
    const dispatch = useDispatch();

    return (
        <div>
          <h4>Sign In</h4>

<div>
<Box >
    
     <TextField id="email" label="Email" variant="standard" value={email} onChange={e=>dispatch(setCurrentUserEmailAction(e.target.value))} />
    <br />
     <TextField id="outlined-password-input"  label="Password"  type="password"
          autoComplete="current-password" variant="standard" value={password} onChange={e=>setPassword(e.target.value)} />
 </Box>  

<br />

</div> 
        </div>
    );
};

export default SignIn;
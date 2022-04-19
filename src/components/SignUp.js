import React, {useState} from 'react';


const SignUp = () => {
    const [state, setState] = useState({email:'', password:''})
    return (

        <div>
            <input type={'text'} placeholder={'Enter your email'} value={state.email}/>
            <input type={'text'} placeholder={'Enter your password'} value={state.password}/><br/><br/>
            <button>Log in</button>
            <button>Sign Up</button>
        </div>
    );
};

export default SignUp;
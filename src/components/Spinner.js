import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Spinner = ({visible}) => {



    return (
        <ThreeDots
        visible={visible}
        height="80"
        width="80"
        color="#ff7dc0"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -50%)'}}
            wrapperClass=""
  />
    );
};

export default Spinner;
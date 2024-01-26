import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Spinner = (visible) => {
    return (
        <ColorRing
  visible={visible}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
    );
};

export default Spinner;
import React from 'react';
import loading from '../../src/Spinner.gif';

const Spinner = ()=> {
    return (
      <>
        <div className='text-center'>
          <img style={{height: '5rem', width: "5rem"}} src={loading} alt="loading" />
        </div>
      </>
    )
}

export default Spinner;
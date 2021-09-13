


import React from 'react';

// componente que va a tener un mensaje de error 

const Error = ({ mensaje}) => {


    return ( 

 
        <p className="alert alert-danger error">{ mensaje}</p>      // Recibiendo via props el mensaje

   



     );
}
 
export default Error;
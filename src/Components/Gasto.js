

import React from 'react';



const Gasto = ({gasto}) => { // extrayendo los gastos desde el componente de listado , que estamos recorriendo 

    return (


        <li className="gastos">

            <p>

                {gasto.nombre}
               <span className="gasto">${gasto.cantidad}</span> 

            </p>



        </li>




      );
}
 
export default Gasto;


import React from 'react';

import Gasto from './Gasto'; // importando el componente de gasto 

const Listado = ({ gastos}) => {
    return ( 


        <div className="gastos-realizados">


            <h2>Listado </h2>
            {gastos.map(gasto =>( // dando por explicito el return 




                <Gasto  // en este componente de listado  creamos o importamos otro componente mas de gasto 
                // para pasarle la iteracion que estoy haciendo con map 
                
                key={gasto.id} // cuando estamos iterando , le tenemos que pasar un id unico, por eso instalamos sohrtid o uuid



                gasto={gasto} // gasto es el parametro que le pasamos al map 



                
                />


            ))}



        </div>




     );
}
 
export default Listado;
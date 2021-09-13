

import React from 'react';

import { revisarPresupuesto  } from '../Helpest'; // importando el helper o funcion a este componente 



const ControlPresupuesto = ({presupuesto, restante }) => {

    return (

        <>


        <div className="alert alert-primary">


        presupuesto : $ {presupuesto}


        </div>

            {/* lo que esta entre parentesis es la funcion que esta en el helper en la cual le pasamos el parametro de presupuesto y restante*/}
        <div className={revisarPresupuesto(presupuesto, restante)}>



            Restante : ${restante}



        </div>




        </>



      );
}
 
export default ControlPresupuesto;
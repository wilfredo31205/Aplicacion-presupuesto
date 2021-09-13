import React, { useState } from 'react';

import Error from '../Components/Error'; // importando el componente de error 


const Pregunta  = ({GuardarPresupuesto , Guardarrestante,actualizarpregunta }) => {





    const [Cantidad, setCantidad] = useState(0); // iniciando en 0 para que el usuario coloque su presupuesto

    const [error, setError] = useState(false)


    const DefinirPresupuesto = (e)=>{

        setCantidad(parseInt(e.target.value,10)) // leyendo lo que el usuario coloque  y que sea en base a 10


    }

    // Submit para definir el presupuesto

    const AgregarPresupuesto = (e)=>{

        e.preventDefault();


        // validando campos 

            if(Cantidad <1 ||isNaN(Cantidad)){// isNaN(Cantidad : si no es un numero lo que el usuario coloca , tambien va a lanzar un error // NAM QUE NO ES UN NUMERO 

                setError(true);

                    return; // que nos retorne el resultado 

            }


        // si se pasa la validacion 

        setError(false);

        GuardarPresupuesto(Cantidad) // pasandole la cantidad al state 
        Guardarrestante(Cantidad)
        actualizarpregunta(false);


    }




    return (

        <>

        <h2>Coloca tu presupuesto</h2>

            {error ?  <Error mensaje = "El presupuesto es incorrecto" /> : null } {/* importando el componente de error donde esta el error */ }

            <form
            
            onSubmit={AgregarPresupuesto}
            
            
            >

                <input 
                
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto"
                onChange={DefinirPresupuesto}
                
                
                
                />

                <input 
                
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"
                onChange={DefinirPresupuesto}
                
                
                />



            </form>


        </>




      );
}
 
export default Pregunta ;
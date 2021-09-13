import React, { useState } from 'react';

import Error from './Error';

import shortid from 'shortid';


const Formulario = ({ guardarGasto , guardarCreargasto}) => { // pasando la funcion de gasto que esta en app.js 


    const [nombre , guardarNombre] = useState(''); // state para reiniciar el form 
    
    const [cantidad , guardarcantidad] = useState(0); // iniciando el state en 0 

    const [error, setError] = useState(false)



    // Cuando el usuario agrega un gasto 

    const Agregargasto = (e)=>{

        e.preventDefault();


        // validar 

        if(cantidad<1|| isNaN(cantidad) || nombre.trim() === ''){// isNaN : colocando que si dejan el campo vacio o no es un numero lo que introduzcan 



            setError(true);

            return; // retornando el resultado


        } 
        setError(false); // en caso de que pase la validacion , borramos el mensaje previo 



        /// cosntruir el gasto

        // npm i shortid : shortid: nos funciona para crear id un poco mas corto que uuid


        const gasto ={ // creando el objeto de gasto 

            nombre,
            cantidad,
            id: shortid.generate() // shortid.generate() : de esta manera se generan id con shortid

        }

        console.log(gasto);


        // pasar el gasto al componenete principal 

        guardarGasto(gasto); // pasandole el arreglo de objeto que se llama gasto 


        guardarCreargasto(true) // una vez que se genere el gasto , pasa a true


        //resetear el form 

        guardarNombre('') 
        guardarcantidad(0)



        }




    return ( 


        <form

        onSubmit={Agregargasto}
        
        >



        <h2>Agrega tus gastos aqui </h2>

        { error ? <Error mensaje="Ambos campos son obligatorios" /> : null}


        <div className="campo">

            <label>Nombre Gasto</label>

            <input
            
                type="text"
                className="u-full-width"
                placeholder="Ej. Transporte"
                value={nombre}
                onChange={e=>guardarNombre(e.target.value)}
            
            
            />

         </div>


         <div className="campo">

            <label>Cantidad Gasto</label>

            <input

                type="number"
                className="u-full-width"
                placeholder="300"
                value={cantidad}
                onChange={e=>guardarcantidad(parseInt(e.target.value , 10))} // con parseint lo convertimos a numero ya que estaba en string 


            />

            </div>


            <input
            
            type="submit"
            className="button-primary u-full-width"
            value="Agregar Gasto"
            
            
            
            />




        </form>



     );
}
 
export default Formulario;
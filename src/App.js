

import React, { useState , useEffect } from 'react';

import Pregunta from './Components/Pregunta';

import Formulario from './Components/Formulario';

import Listado from './Components/Listado';


import ControlPresupuesto from './Components/ControlPresupuesto';

function App() {


  // definir el state
  
  const [ presupuesto , GuardarPresupuesto] = useState(0)

  const [ restante , Guardarrestante] = useState(0)

  const [mostrarpregunta , actualizarpregunta] = useState(true);

  const [gastos , guardarGastos] =  useState([]) // state para guardar nuestro objeto de gastos

  const [gasto , guardarGasto] =  useState({}) // state para guardar nuestro objeto de gastos



  const [crearGasto , guardarCreargasto] =  useState(false) // state de los gastos



  // useefect que actualiza el restante


  useEffect(() => {


    if(crearGasto){ // si crear gasto esta como true , en caso contrario no ejecutes nada


      //Agrega el nuevo prepuesto

      guardarGastos([ // state del objeto vacio que lo colocamos para que se vayan llenando 

        ...gastos, // tomando una copia de los gastos previos 
  
        gasto // y agregamos el nuevo gasto 
         
  

      ])

        // resta el prepuesto actual

        const presupuestoRestante = restante - gasto.cantidad;

        Guardarrestante(presupuestoRestante); // pasandiole el resultado al state de





        // Una vez que se ejecute   , lo reseteamos

        guardarCreargasto(false);


    }


 
  }, [gasto]) // como dependencia le pasamo el gasto 







  // cuando agregemos un nuevo gasto 

  // const agregarNuevoGasto = (gasto)=>{ // pasando esta funcion via props al componente de formulario  y 
  //   // y le colocamos como parametro gasto que de igaul manera en el componente de formulario hay un arreglo
  //   //de objeto que se llama gasto se le pasa a esta funcion


  //   console.log(gasto);



  //   // guardarGastos([ // state del objeto vacio que lo colocamos para que se vayan llenando 

  //   //   ...gastos, // tomando una copia de los gastos previos 

  //   //   gasto // y agregamos el nuevo gasto 
       


  //   // ])




  // }


  return (
   
    <div className="container">

      <header>

      <h1>Gasto Semanal</h1>


      <div className="contenido-principal contenido">

          
          {/*A esto se le llama carga condicional de componentes,  
            si se cumple esta condicion se ejecuta este compoenente y 
            si no mostramos el formulario y el listado de los gastos 
          
          */}

          { mostrarpregunta ? // en caso de que pregunta sea true , vamos a mostrar la pregunta 
          
          (   // colocando el parentesis para dar por explicito el return y colocando el resto de los componentes y state
            
            
            <Pregunta

          GuardarPresupuesto={GuardarPresupuesto} // pasando el state via props 
          Guardarrestante={Guardarrestante}// pasando el state via props 
          actualizarpregunta={actualizarpregunta}


      />
      
      ) : // y en caso de que sea false va a mostrar el formulario y listado de los gastos
      
      (

        <div className="row">


        <div className="one-half column">

            <Formulario
            
            guardarGasto={guardarGasto}
            guardarCreargasto={guardarCreargasto}


            
            />

        </div>



        <div className="one-half column">

              <Listado 
              
              gastos={ gastos} // llevando los gastos via props al componente de listado r
              
              
              />


              <ControlPresupuesto
              
              presupuesto={presupuesto} //pasando los state via props a este compoenete 
              restante={restante}
              
              />

        </div>




      </div>

        
      ) 
      
      
      }



   

 

      </div>



      </header>

      </div>

  );
}

export default App;

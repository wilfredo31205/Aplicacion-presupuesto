
/// Helper para importarlo al componenete de controlPresupuesto

export const revisarPresupuesto = (presupuesto , restante ) =>{


    // Cuando el presupuesto tenga mas del 75 vamos a mostrarlo en color verde, 
    // cuando vaya a la mitad en color amarillo 
    // y cuando se este agotando en color rojo 


    let clase; 



    if((presupuesto / 4 ) > restante){ // si el presupuesto que estamos tomando que le pasamos a esta funcion 

        // lo dividimos entre 4  es decir que si le paso 100 y lo divido entre 4 , tenemos 25 

        // si esa parte o si ese resultado es mayor al restante , entonces estamos por ahi del 25 % 

        // porque si tengo 25 y mi restante es 24, me quedan menos del 75 % 


        clase = 'alert alert-danger';

    }else if((presupuesto / 2 ) > restante){ // si el presupuesto dividido entre 2 , es mayor que el restante 

        clase = 'alert alert-warning';


    } else {

        clase = 'alert alert-success';


    }


            return clase;

}


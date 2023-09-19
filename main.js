

let responsable
let objetivo
let Sitio 
let tiempo 
let dominio 
let precio 
let precioDominio
let precioHosting


iniciar();

function iniciar() {

    let iniciador = prompt('¿Desea presupuestar un Sitio Web?: Responde Si o No')
    
        if( iniciador == "si" || iniciador == "Si" || iniciador == "SI"){

                
                while (iniciador) {
                    //Mensaje para comenzar
                        alert('Entonces Comencemos con unas preguntas.')
                    // comienzan preguntas, estas le darian valores a las variables ya declaradas al inicio.
                        formulario()
                        condominio()
                        conhosting()
                        total()
                         break
                    }
                   
            }


        else {
                alert('Debe de responder Si para Iniciar. ')
                reiniciar()
        }

}

//funciones hechas a parte para organizarme.


//con esta funcion se reinciará el formulario
    function reiniciar (){
        alert ('Volvamos a empezar.')
        iniciar()}

//esta funcion representa el bloque de codigo del formulario
function formulario(){
    

    responsable = prompt('Escribe el nombre de la Empresa o Responsable.');

    objetivo = prompt ('¿Que objetivo tiene con su Sitio/Aplicacion Web?')

//aqui se detrminará el valor de la pagina segun el cliente pida.
    Sitio = prompt('Usted busca: "blog", "tienda", "aplicacion", "empresarial", "gubernamental" (Todo en minusculas )')

    switch (Sitio) {
        
        case 'blog':
            precio = 50;
            tiempo = '7 dias'; 
        break;

        case 'tienda':
            precio = 70;
            tiempo = '20 dias';
        break;

        case 'aplicacion':
            precio = 70;
            tiempo = '20 dias';
        break;

        case 'empresarial':
            precio = 40;
            tiempo = '15 dias';
        break;

        case 'gubernamental':
            precio = 40;
            tiempo = '20 dias';
        break;

        default:
            alert('por favor ingrese bien el proyecto que usted busca. De lo contrario no podremos continuar');

            reiniciar()
            break;
        }

    //escribir resultados
    document.write(responsable + ' ha pedido un sitio con el objetivo de ' + objetivo + '. Especificamente este será un sitio ' + Sitio + '. Su precio es de ' + precio + 'u$s '+ ' y tardará ' + tiempo + '. ' )
    }


                    //si necesita un dominio
                     function condominio(){
                        let preguntaDominio = prompt('¿Necesitas un Dominio?')
                  
                        if (preguntaDominio == "si" || preguntaDominio == "Si" || preguntaDominio == "SI" ){
                            //pregunta el nombre de tu dominio
                                let nombreDominio = prompt('Escribe tu Dominio (sin ".com")')
                            //le añade el .com
                                dominio = nombreDominio + '.com'
                            //le damos el valor el precio.
                                precioDominio = 10
                            //escribimos rersultados
                            
                             document.write(' Ademas, a se le sumará un dominio de' + precioDominio + 'u$s. Con el nombre de ' + dominio + '.')
                             document.write('<br>')
                            }
                        else{
                            precioDominio = 0
                        }}


                       //si necesita un hosting
                    function conhosting(){
                        let preguntaHosting = prompt('¿Necesitas un Hosting?')

                        if (preguntaHosting == "si" || preguntaHosting == "Si" || preguntaHosting == "SI" ){
                        //le otrogamos el valor al dominio
                            precioHosting = 40
                        //mostramos el precio
                        document.write(' Ademas a este se le sumará un Hosting de ' + precioHosting + 'u$s' + '.');
                        document.write('<br>')
                       
                        }
                        else{
                            precioHosting = 0
                        }}



    //permite sacar el total de las variables globales
    function total(){
        let total = Number(precio) + Number(precioDominio) + Number(precioHosting);

        document.write( 'En total son ' + total + 'u$s ')
    }

  

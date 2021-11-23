/** 
  @file validaciones.js
  @author Manuel Solis Gomez masogo008@gmail.com
  @license gp3
  @description archivo destinado a validar nuestro formulario
*/

'use strict'

window.onload = iniciar; //cuando se carge la pagina se abrira la funcion de iniciar

/**
 * 
 * Funcion empleada para iniciar los eventos del programa
 * 
 */
function iniciar() 
{
  let curso = document.getElementById('sCurso'); //Tomara el select de cursos
  curso.onchange = modulos; // Le añadimos que al cambiar el select realice la funcion dada
  for (let indice = 0; indice < 3; indice++) 
    {
        document.getElementById('iCalculo'+(indice+1)).onchange = media; // Le añadimos que al cambiar el input realice la funcion dada
    }
  let botonCero = document.getElementById('btnCero'); //Tomara el boton de boton a cero
  botonCero.onclick = vaciar; // Le añadimos que al clickar el boton realice la funcion dada
}

/**
 * 
 * Funcion encargada de crear los elementos de select de modulos
 * 
 */
function modulos() 
{
    let valorCurso = document.getElementById('sCurso').value; //tomamos el valor del select para saber que select mostrar

    if (document.getElementById('moduloContenedor'))  //si existe la p de modulos, lo borramos
    {
        document.getElementById('moduloContenedor').remove(); //la borramos
    }

    //CREACION DE ELEMENTOS
    let p = document.createElement('p');
    let label = document.createElement('label');
    let select = document.createElement('select');
    let optionOculta = document.createElement('option');

    //AÑADIR ATRIBUTOS A LOS ELEMENTOS
    p.setAttribute('id', 'moduloContenedor');
    label.setAttribute('for', 'modulos');
    select.setAttribute('name', 'modulos');
    select.setAttribute('id', 'provincia');
    optionOculta.setAttribute('selected', 'selected');
    optionOculta.setAttribute('hidden', 'hidden');
    optionOculta.setAttribute('value', 'vacio');

    //COLOCAR ELEMENTOS Y NODOS DE TEXTO
    p.appendChild(label);
    label.appendChild(document.createTextNode(' Modulos '));
    p.appendChild(select);
    select.appendChild(optionOculta);
    optionOculta.appendChild(document.createTextNode(' MODULOS '));

  if (valorCurso == '1DAW') 
  {
      
    let optionEntorno = document.createElement('option');
    let optionLenguajeMarca = document.createElement('option');
    let optionBaseDatos = document.createElement('option');
      
    optionEntorno.setAttribute('value', 'entorno');
    optionLenguajeMarca.setAttribute('value', 'lenMarca');
    optionBaseDatos.setAttribute('value', 'baseDatos');

    //MODULOS DE 1DAW
    select.appendChild(optionEntorno);
    optionEntorno.appendChild(document.createTextNode(' Entorno '));
    select.appendChild(optionLenguajeMarca);
    optionLenguajeMarca.appendChild(document.createTextNode(' Lenguaje de Marca '));
    select.appendChild(optionBaseDatos);
    optionBaseDatos.appendChild(document.createTextNode(' Base de datos '));
  }
  else
  {
      if (valorCurso == '2DAW') 
      {
        let optionDwec = document.createElement('option');
        let optionDiw = document.createElement('option');
        let optionDwes = document.createElement('option');

        optionDwec.setAttribute('value', 'dwec');
        optionDiw.setAttribute('value', 'diw');
        optionDwes.setAttribute('value', 'dwes');
        
        //MODULOS DE 2DAW
        select.appendChild(optionDwec);
        optionDwec.appendChild(document.createTextNode(' DWEC '));
        select.appendChild(optionDiw);
        optionDiw.appendChild(document.createTextNode(' DIW '));
        select.appendChild(optionDwes);
        optionDwes.appendChild(document.createTextNode(' DWEC '));
      } 
      else 
      {
        alert('elige un curso')
      }
  }
  //COLOCAMOS EL BLOQUE
  let body = document.getElementsByTagName('body')[0];
  let elementoAbajo = document.getElementsByTagName('p')[3];
  body.insertBefore(p, elementoAbajo);
}
/**
 * 
 * Funcion encargada de realizar la media de los campos numericos solo si todos tienen algo 
 * 
 */
function media() 
{
    let lleno = true;

    for (let indice = 0; indice < 3; indice++) 
    {
        if(document.getElementById('iCalculo'+(indice+1)).value.length == 0) 
        {
            lleno = false;
        }
    }
    if (lleno) 
    {
        let suma = 0
        for (let indice = 0; indice < 3; indice++) 
        {
            suma += parseInt(document.getElementById('iCalculo'+(indice+1)).value)
        }

        let resultado = (suma/3);

        console.log(document.getElementById('spanMedia').textContent=resultado);
    }
}
/**
 * 
 * Funcion encargada de colocar a cero los campos numericos
 * 
 */
function vaciar() 
{
    for (let indice = 0; indice < 3; indice++) 
    {
        document.getElementById('iCalculo'+(indice+1)).value = '0';
    }

    console.log(document.getElementById('spanMedia').textContent='N/A');
}
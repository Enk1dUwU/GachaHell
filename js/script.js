window.onload= function()
{

    

}
function addFrame()
{
    //crear el div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'buildcont';
    //crear el frame
    var nuevoFrame = document.createElement('iframe');
    nuevoFrame.src = 'builds/builds.xml';
    nuevoFrame.width = '60%';
    nuevoFrame.height = '100%';
    //añadir el frame al div
    nuevoDiv.appendChild(nuevoFrame);
    //coger el div contenido
    var cont = document.getElementsByClassName('contenido')[0];
    //añadir el nuevo div con el frame al contenido
    cont.appendChild(nuevoDiv);

}


function leerArchivo() {
    const input = document.getElementById('archivoInput');
    const file = input.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const contenido = e.target.result;
        document.getElementById('resultado').innerText = contenido;
      };

      reader.readAsText(file);
    } else {
      alert('Selecciona un archivo primero.');
    }
  }

  function crearArchivo()
  {
    const fs = require('fs');

    const contenido = 'Este es el contenido del archivo que estoy creando.';

    fs.writeFile('mi_archivo.txt', contenido, 'utf8', (error) => {
    if (error) {
        console.error('Error al crear el archivo:', error);
        return;
    }

    console.log('Archivo creado exitosamente.');
    });
  }

  function listarArchivos() 
  {
    const fs = require('fs');

    const rutaCarpeta = '../resources/genshin/builds/';
    
    fs.readdir(rutaCarpeta, (error, archivos) => {
      if (error) {
        console.error('Error al leer la carpeta:', error);
        return;
      }
    
      const cantidadArchivos = archivos.length;
      console.log('Cantidad de archivos en la carpeta:', cantidadArchivos);
      document.getElementsByClassName("bar").innerHTML = "Builds = " + cantidadArchivos
    });
  }

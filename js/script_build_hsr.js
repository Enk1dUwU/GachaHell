window.onload= function()
{
    let builds = ["hanya","clara"];
    for (let i = 0; i < builds.length; i++)
    {
      //crear el div
      var nuevoDiv = document.createElement('div');
      nuevoDiv.className = 'framecont';
        //crear el p
      var nuevoP = document.createElement('p');
      nuevoP.className = 'subcont_nombre';
      var n = builds[i];
      var nombre = n.replace(n[0],n[0].toUpperCase())
      nuevoP.innerHTML = nombre;
      //crear el frame
      var nuevoFrame = document.createElement('iframe');
      nuevoFrame.src = 'builds/' + builds[i] + '.xml';
      nuevoFrame.width = '60%';
      nuevoFrame.height = '100%';
      //añadir el frame al div
      nuevoDiv.appendChild(nuevoP);      
      nuevoDiv.appendChild(nuevoFrame);
      //coger el div contenido
      var cont = document.getElementsByClassName('contenido')[0];
      //añadir el nuevo div con el frame al contenido
      cont.appendChild(nuevoDiv);
    }
}

window.onload= function()
{
    let materials = [];
    for (let i = 0; i < materials.length; i++)
    {
      //crear el div
      var nuevoDiv = document.createElement('div');
      nuevoDiv.className = 'framecont';
      //crear el p
      var nuevoP = document.createElement('p');
      nuevoP.className = 'subcont_nombre';
      var n = materials[i];
      var nombre = n.replace(n[0],n[0].toUpperCase())
      nuevoP.innerHTML = nombre;
      //crear el frame
      var nuevoFrame = document.createElement('iframe');
      nuevoFrame.src = 'materials/' + materials[i] + '.xml';
      nuevoFrame.width = '60%';
      nuevoFrame.height = '100%';
      //añadir el p y el frame al div
      nuevoDiv.appendChild(nuevoP);
      nuevoDiv.appendChild(nuevoFrame);
      //coger el div contenido
      var cont = document.getElementsByClassName('contenido')[0];
      //añadir el nuevo div con el frame al contenido
      cont.appendChild(nuevoDiv);
    }
}

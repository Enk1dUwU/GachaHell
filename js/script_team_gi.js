window.onload= function()
{
    let teams = ["wrio-furina","wrio-permafrost","tighnari-hyperbloom","frozennerds"];
    for (let i = 0; i < teams.length; i++)
    {
      //crear el div
      var nuevoDiv = document.createElement('div');
      nuevoDiv.className = 'framecont';
      //crear el p
      var nuevoP = document.createElement('p');
      nuevoP.className = 'subcont_nombre';
      var n = teams[i];
      var char = "-";
      var pos = n.indexOf(char);
      if (pos>0)
      {
        var aux = n.split("-");
        var nombre = aux[0].replace(aux[0][0],aux[0][0].toUpperCase()) + "-" + aux[1].replace(aux[1][0],aux[1][0].toUpperCase());
        nuevoP.innerHTML = nombre;
      }
      else
      {
        var nombre = n.replace(n[0],n[0].toUpperCase())
        nuevoP.innerHTML = nombre;
      }
      //crear el frame
      var nuevoFrame = document.createElement('iframe');
      nuevoFrame.src = 'teams/' + teams[i] + '.xml';
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

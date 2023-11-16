window.onload= function()
{
    let teams = ["team1","team2","team3","team4","team5","team6"];
    for (let i = 0; i < teams.length; i++)
    {
      //crear el div
      var nuevoDiv = document.createElement('div');
      nuevoDiv.className = 'framecont';
      //crear el frame
      var nuevoFrame = document.createElement('iframe');
      nuevoFrame.src = 'teams/' + teams[i] + '.xml';
      nuevoFrame.width = '60%';
      nuevoFrame.height = '100%';
      //añadir el frame al div
      nuevoDiv.appendChild(nuevoFrame);
      //coger el div contenido
      var cont = document.getElementsByClassName('contenido')[0];
      //añadir el nuevo div con el frame al contenido
      cont.appendChild(nuevoDiv);
    }
}

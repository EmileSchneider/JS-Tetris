function buildGrid(x,y) {
  var grid = []; // Grid = die Liste fuer die Listen
  for (i = 0; i < x; i++) {
    var subList = []; //die einzelne Liste im Grid 
      for (j = 0; j < y; j++) {
        sublist.push(0);  //fuege 0 hinzu  
    } 
    grid.push(sublist); //fuege die Subliste dem Grid hinzu
  }
  return(grid);
}

function draw() {
      /* initialisere canvas*/
      var canvas = document.getElementById('tetris');
      if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      
      /* iteriere durch die Liste der Listen*/
      for ( i = 0; i < tetrisgrid.length; i++) {
        var liste = tetrisgrid[i];
        // iteriere durch die subListe
        for (j = 0; j < liste.length; j++) {
          if (liste[j] == 1) {
           ctx.fillStyle = 'rgba(200, 0, 0, 1)';
           ctx.fillRect(j*21, i*21, 20, 20); 
          }
        }
      }
   }       
}   
tetrisgrid = buildGrid(800,1200)
draw();

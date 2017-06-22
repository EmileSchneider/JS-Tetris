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

//How to define a new Class in JS

function createClass(input) {
  var obj = {};
  obj.var = input;
  obj.methode = function() {
    doStu;ff
  };
  return obj;
}

//How do initiate an object

var newObject = createClass('DATA');
DATA.var;
DATA.methode();


function listOfLists(x,y) {
	var obj = {};
	obj.x = x;
	obj.y = y;
	
	obj.listOfLists = [];
	
	obj.createListofLists = function () {
		for (i = 0; i < obj.x; i++) {
			var subList = [];				
			for (j = 0; i < obj.y, j++) {
				subList.push(0);				
			}
			obj.listOfLists.push(subList);
		}
	}	
	return obj;
}

function matrix(x,y) {
	var obj = {};
	obj.x = x;
	obj.y = y;
	var newMatrix = listOfLists(x,y);
	
	//gibt aus ob Feld(x,y) 0 oder 1 ist
	function returnXY(matrix,reqX, reqY) {
		var zwischenSpeicher = matrix[reqX];
		return zwischenSpeicher[reqY];
	}
	
	//ueberschreibt den Wert rewX,rewY in der Matrix newMatrix 
	function rewriteXY(newMatrix,rewX rewY, rewValue) {
		var zwischenSpeicher = newMatrix[rewX];
		zwischenSpeicher[rewY] = rewValue;
		newMatrix[rewX] = zwischenSpeicher;
		return newMatrix;	
	}
	
	//verschiebt alle 1 Werte der Matrix um ein Y-Wert nach unten
	function matrixShiftDown(newMatrix) {
		for (i = 0; i < newMatrix.length; i++) {
			for (j = 0; j < i.length; j++) {
				if (returnXY(newMatrix,i,j) == 1 {
					rewriteXY(newMatrix,i,j,0);
					rewriteXY(newMatrix,i,j++,1);
				}
			}
		}	
		return(newMatrix);	
	}
}










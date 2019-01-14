//EXERCICE 1

//1.1

//creation of text area
let section = document.createElement("div");
document.body.appendChild(section);
section.style.width = "350px";

//creation of area title, i.e. the h1
let sectionTitle = document.createElement("h1");
sectionTitle.textContent = "Cinéma Le Dauphin";

//creation of area paragraph, i.e. a 'p'
let sectionBody = document.createElement("p");
sectionBody.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu’à minuit le vendredi et le samedi).";

//creation of area button, i.e. an input type button
let sectionBtn = document.createElement("input");
sectionBtn.type = "button";
sectionBtn.value = "Voir les films à l’affiche cette semaine";

//creation of function that displays text area
function createInterface() {
  section.appendChild(sectionTitle);
  section.appendChild(sectionBody);
  section.appendChild(sectionBtn);
}

//call the function that displays text area
createInterface();

//1.2

//creation of a two-dimensional table
let moviesArray = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
];

//1.3

//creation of an html table
let graphicArray = document.createElement("table");
//hiding the table
graphicArray.hidden = true;
//creation of the html table elements
let headerArray = document.createElement("thead");
let graphicArrayRow = document.createElement("tr");

//creation of the function that generate and fills the table whith JavaScript
function createTable(array, booleen) {
  document.body.appendChild(graphicArray);
  graphicArray.appendChild(headerArray);
  headerArray.appendChild(graphicArrayRow);
  //enumerations variables
  let i = 1;
  let j = 0;
  let k = 0;
  //intermediate variables of sequential processing
  let currentItem;
  let currentItemJ = [];
  let currentItemK;
  //declaration of elements html
  let cellHead;
  let cellBody;
  let graphicArrayRowB;
  //conditional test to create or not a header
  if (booleen === true) {
    let lineHead = array[0];
    //sequential processing to create a header with the first line/array of two-dimensional table
    while (k < lineHead.length) {
      currentItemK = lineHead[k];
      cellHead = document.createElement("th");
      cellHead.textContent = currentItemK;
      graphicArrayRow.appendChild(cellHead);
      k++;
    }
  }
  //sequential processing to fill the table cells
  while (i < array.length) {
    currentItem = array[i];
    graphicArrayRowB = document.createElement("tr");
    graphicArray.appendChild(graphicArrayRowB);
    i++;
    j = 0;
    while (j < currentItem.length) {
      currentItemJ = currentItem[j];
      cellBody = document.createElement("td");
      cellBody.textContent = currentItemJ;
      graphicArrayRowB.appendChild(cellBody);
      j++;
    }
  }
  return array;
}

//1.4
//creation of an event listener that, on click, hides the interface and call the function that displays the table
sectionBtn.addEventListener("click",changePage,false);

//creation of the function that displays the table
function changePage() {
  section.hidden = true;
  graphicArray.hidden = false;
}

//call the function that generate and fills the table whith JavaScript
createTable(moviesArray, true);

//-------------------------------------------------------------------------------------------

//EXERCICE 2

//2.1

//creation of a two-dimensional table
let subtancesArray = [
  ["SUBSTANCES", "Température de fusion ou solidification en °C", "Température d’ébullition en °C"],
  ["acide acétique", "17", "118"],
  ["acide nitrique", "-41", "86"],
  ["acide sulfurique", "10", "290"],
  ["alcool éthylique", "-114", "78"],
  ["aluminium", "660", "2450"]
];

//2.2

// creation of a function that must return an array of strings containing the names of substances whose boiling temperature in °C is lower than the number passed in parameter
function temperatureSubstances(array, number) {
  //creation of an string array
  let lowerTempArray = [];
  //enumeration variable
  let i = 0;
  //intermediate variables of sequential processing
  let currentItem;
  //sequential processing
  while (i < array.length) {
    currentItem = array[i];
    //conditional test find the values corresponding to the indicated parameter
    if (currentItem[2] < number) {
      lowerTempArray.push(currentItem[0]);
    }
    i++;
  }
  return lowerTempArray;
}

//call the function
temperatureSubstances(subtancesArray, 90);

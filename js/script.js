document.getElementById("gaan").addEventListener("click", function() {


    let mijnStad = document.getElementById("stad");
    let mijnLand = document.getElementById("land");
    let eerste = document.getElementById("0");
    let tweede = document.getElementById("1");
    let derde = document.getElementById("2");
    let vierde = document.getElementById("3");
    let vijfde = document.getElementById("4");


    fetch ("https://api.openweathermap.org/data/2.5/forecast?q=" + mijnStad.value + ","
                + mijnLand.value + "&units=metric&APPID=03ee4d6350dce429ec8cdaaa483ac603")
        .then(response => response.json())
        .then(function (data){
            console.log(data.list);
            dagen = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
            let dag = new Date();
            let vandaag = dag.getDay();
            let dag2 = dag.getDay()+1;
            let dag3 = dag.getDay()+2;
            let dag4 = dag.getDay()+3;
            let dag5 = dag.getDay()+4;
            var dezeMaand = dag.getMonth();
            var ditJaar = dag.getFullYear();
            //console.log(dagen[dag2]);
            //console.log(dagen[dag3]);



            let aftel = 7;
            if (dag.getHours() > 21){
                aftel -= 7;
            }
            else if (dag.getHours() > 18){
                aftel -= 6;
            }
            else if (dag.getHours() > 15){
                aftel -= 5;
            }
            else if (dag.getHours() > 12){
                aftel -= 4;
            }
            else if (dag.getHours() > 9){
                aftel -= 3;
            }
            else if (dag.getHours() > 6){
                aftel -= 2;
            }
            else if (dag.getHours() > 3){
                aftel -= 1;
            }
            else if (dag.getHours() > 0){
                aftel -= 0;
            }
            //console.log(aftel);


            //console.log(gemTemp);

            let neerslagVandaag = data.list[0].weather[0].description;
            let windSnelheidVandaag = Math.round(data.list[0].wind.speed*1.852);
            let gemTempVandaag = 0;

            for (i = 0; i < aftel; i++) {
                gemTempVandaag += data.list[i].main.temp;
            }
            gemTempVandaag = gemTempVandaag / aftel;
            console.log(gemTempVandaag);

            let gemTempDag2 = 0;

            for (j = aftel; j < aftel+8; j++){
                gemTempDag2 += data.list[j].main.temp;
            }
            gemTempDag2 = gemTempDag2/8;
            console.log(gemTempDag2);

            let gemTempDag3 = 0;

            for (k = j; k < j+8; k++){
                gemTempDag3 += data.list[k].main.temp;
            }
            gemTempDag3 = gemTempDag3 / 8;
            console.log(gemTempDag3);

            let gemTempDag4 = 0;

            for (l = k; l < k+8; l++){
                gemTempDag4 += data.list[l].main.temp;
            }
            gemTempDag4 = gemTempDag4 / 8;
            console.log(gemTempDag4);

            let gemTempDag5 = 0;

            for (m = l; m < l+8; m++){
                gemTempDag5 += data.list[m].main.temp;
            }
            gemTempDag5 = gemTempDag5 / 8;
            console.log(gemTempDag5);

            eerste.innerHTML = "<h1>" + dagen[vandaag] + "</h1>";
            tweede.innerHTML = "<h1>" + dagen[dag2] + "</h1>";
            derde.innerHTML = "<h1>" + dagen[dag3] + "</h1>";
            vierde.innerHTML = "<h1>" + dagen[dag4] + "</h1>";
            vijfde.innerHTML = "<h1>" + dagen[dag5] + "</h1>";


        })
});







/*
let dag = new Date();
let vandaag = dag.getDay();
let dag2 = dag.getDate()+1;
let dag3 = dag.getDate()+2;
let dag4 = dag.getDate()+3;
let dag5 = dag.getDate()+4;
var dezeMaand = dag.getMonth();
var ditJaar = dag.getFullYear();


 */


/*let vglUur = "";
            switch (uur) {

            }*/





/* &units=metric
* switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*
* */
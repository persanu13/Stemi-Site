var cuvat1 = String;
var cuvat2 = String;
var titlu1 = document.querySelector("#titlu1");
var titlu2 = document.querySelector("#titlu2");
var titlu3 = document.querySelector("#titlu3");
cuvant1 = "Hi,/I'm Stemi,/web developer";
cuvant2 = "About me!";
cuvant3 = "My Skills...";

 Creare(cuvant1,titlu1);
 Creare(cuvant2,titlu2);
 Creare(cuvant3,titlu3);

function Creare(cuvant,titlu){
     lungime = cuvant.length;
     rand = document.createElement("DIV");
     titlu.appendChild(rand);

     for(i = 0; i<lungime; i++){
      litera = cuvant.slice(i ,i+1);
     
      if(litera == "/"){
        rand = document.createElement("DIV");
        titlu.appendChild(rand);
      }else {
        if(litera ==" "){
            litera = "&nbsp";
        }
        h1 = document.createElement("H1");
        rand.appendChild(h1);
        h1.innerHTML = litera;

      }

     }   
}


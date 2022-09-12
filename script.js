//testasvimui
// document.getElementById("mygtukas2").addEventListener("click", testavimui2);

///testavimas

//document.querySelectorAll("div.deze").addEventListener("click", testavimui2);

///testavimas iki cia

document.getElementById("mygtukas").addEventListener("click", vykdom); //stebim mygtuko bukle ir vykdom()
document.getElementById("number").addEventListener("keypress", mygtukas); //linksmybem : ENTER mygtuko klausymas
let kvadratuSkaicius = 0;
let alertSkaicius = 0;
let duombaze = [];

let atidarytuSkaicius = 0;
let atidarytasSkaiciusIsimintas = 0;
let atidarytasSkaiciusId = 0;

let atvertuSkaicius = 0;

let counterMinus = 0;

function vykdom() {
  //restartuojam jei iveda nauja reiksme (istrinam "bendra" div)
  if (kvadratuSkaicius != 0) {
    document.getElementById("bendras").innerHTML = "";
    kvadratuSkaicius = 0;
    duombaze = [];
    counter(0);
    atvertuSkaicius = 0;
    counterMinus = 0;
  }

  if (kvadratuSkaicius == 0) {
    kvadratuSkaicius = document.getElementById("number").value;
    if (kvadratuSkaicius) {
      if (kvadratuSkaicius <= 1) {
        kvadratuSkaicius = 0;
        alert(
          "nu ir kas čia per žaidimas? " +
            '"' +
            "prašom" +
            '"' +
            " įvesti didesnį skaičių"
        );
      }
      if (kvadratuSkaicius < 21) {
        skaiciuIsdalinimas(); //uzpildom duomenu baze skaiciais
        duombazesSutvarkymas(); //sutvarkome ja
        //row sukurimas
        for (let i = kvadratuSkaicius; i > 0; i--) {
          const row = document.createElement("div");
          row.innerHTML = "";
          row.id = "row" + i;
          document.getElementById("bendras").appendChild(row);
        }
        // deziu sukurimas ir uzpildymas row
        for (let i = kvadratuSkaicius; i > 0; i--) {
          let row = i;
          for (let i = kvadratuSkaicius; i > 0; i--) {
            const deze = document.createElement("div");

            //skaiciu magija irasyti i dezutes
            let w = parseInt(i); // del klaidos pasalinimo
            let q = (row - 1) * kvadratuSkaicius + w - 1;

            duombaze[q]
              ? (deze.innerHTML = duombaze[q])
              : (deze.innerHTML = "BONUS");

            deze.id = "row" + row + "deze" + w;
            deze.className = "deze";
            document.getElementById("row" + row).appendChild(deze);
            deze.addEventListener("click", dezesPaspaudimas);
          }
        }
      } else {
        alert(
          "nu kas čia dabar? ... taigi buvo " +
            '"' +
            "prašoma" +
            '"' +
            " įvesti mažiau nei 20 ..."
        );
      }
    } else {
      alert(
        "Įvesties klaida\nVis dėlto kažkaip reikėtų spręsti šią problemą... "
      );
    }
  }
}
//linksmybes
function mygtukas(event) {
  if (event.key === "Enter") {
    switch (alertSkaicius) {
      case 0:
        event.preventDefault();
        document.getElementById("mygtukas").click();
        alert(
          "ką aš sakiau?\nSPAUDŽIAM MYGTUKĄ, o ne enter ...\n...nu bet šį kartą paspausiu už tave...click..."
        );
        alertSkaicius++;
        break;
      case 1:
        event.preventDefault();
        document.getElementById("mygtukas").click();
        alert(
          "rimtai? vis dar enter? \ntai gal mygtuką pavadint enter?...\n...click..."
        );
        document.getElementById("mygtukas").innerHTML = "ENTER";
        alertSkaicius++;
        break;
      case 2:
        event.preventDefault();
        document.getElementById("mygtukas").click();
        alert("$#%^%%$#\n...click...");
        alertSkaicius++;
        break;
      case 3:
        alert(
          "nu kaip sakoma :\nko neišmokai - tai neprilaižysi\nstengiamės padėt išmokt... daugiau už tave nespaudinėsim!"
        );
        document.getElementById("mygtukas").className = "red";
        alertSkaicius++;
        break;
      default:
        break;
    }
  }
}
// duombaze uzpildom skaiciais
function skaiciuIsdalinimas() {
  let skaiciausRastasDuombazeje = false;
  let maksSkaiciuKiekis = kvadratuSkaicius * kvadratuSkaicius;
  let naujasSkaicius = Math.floor(Math.random() * maksSkaiciuKiekis);
  if (duombaze.length >= maksSkaiciuKiekis) return;
  do {
    do {
      for (let i = 0; i < duombaze.length; i++) {
        if (duombaze[i] === naujasSkaicius) {
          skaiciausRastasDuombazeje = true;
        }
      }
      break;
    } while (skaiciausRastasDuombazeje === false);

    if (skaiciausRastasDuombazeje === false) {
      duombaze[duombaze.length] = naujasSkaicius;
      // console.log(
      //   "skaicius : " +
      //     naujasSkaicius +
      //     " / duombaze : " +
      //     duombaze +
      //     " / jos ilgis : " +
      //     duombaze.length
      // );
    }
    if (skaiciausRastasDuombazeje === true) {
      // console.log(
      //   "rekomenduotas skaicius rastas duomenu bazeje, siulom nauja - ieskom toliau"
      // );
      skaiciuIsdalinimas();
    }
  } while (duombaze.length < maksSkaiciuKiekis);
  counter();
  return;
}

function duombazesSutvarkymas() {
  //skaiciu eiles sudubliavimas

  if (duombaze.length % 2 === 0) {
    // su mazinam iki porinio skaiciaus ir sutvarkome kad nebutu 0
    for (let i = 0; i < duombaze.length; i++) {
      duombaze[i] === 0 ? (duombaze[i] = duombaze.length) : null; // nolio pasalinimas ir pridejimas skaiciaus, taip u=tikriname kad didziausio skaiciaus vieta bus random
    }
  } else {
    for (let i = 0; i < duombaze.length; i++) {
      duombaze[i] === 0 ? (duombaze[i] = duombaze[duombaze.length - 1]) : null; // nuli pakeiciam paskutiniu skaitmeniu
    }
    duombaze.pop(); // paskutini skaitmeni ismetam
  }

  for (let i = 0; i < duombaze.length; i++) {
    duombaze[i] > duombaze.length / 2
      ? (duombaze[i] = duombaze[i] - duombaze.length / 2)
      : null;
  }
  console.log("Duombaze po sutvarkymo : " + duombaze);
}

//testavimui
function dezesPaspaudimas(a) {
  let skaicius = a.target.innerHTML;
  let id = a.target.id;
  if (a.target.className === "atspetas") {
    return;
  }
  if (a.target.innerHTML === "BONUS") {
    document.getElementById(a.target.id).className = "atspetas";
    counterMinus++;
    counter();
    return;
  }
  if (id === atidarytasSkaiciusId) {
    document.getElementById(atidarytasSkaiciusId).className = "deze";
    atidarytuSkaicius = 0;
    return;
  }
  console.log("paspaustas" + skaicius);
  parseInt(skaicius);
  if (atidarytuSkaicius != 0) {
    if (atidarytasSkaiciusIsimintas === skaicius) {
      console.log(
        "valio" + " deziu ID " + a.target.id + " ir " + atidarytasSkaiciusId
      );
      document.getElementById(a.target.id).className = "atspetas";
      document.getElementById(atidarytasSkaiciusId).className = "atspetas";
      atvertuSkaicius++;
    } else {
      console.log("blogai");
      //stengiames nors trumpam parodyti bloga varianta
      document.getElementById(a.target.id).className = "pazymetas";
      setTimeout(() => {
        document.getElementById(a.target.id).className = "deze";
      }, 1000);
      ///iki cia blogo varianto parodymas

      document.getElementById(atidarytasSkaiciusId).className = "deze";
    }
    atidarytuSkaicius = 0;
  } else {
    atidarytuSkaicius = 1;
    document.getElementById(a.target.id).className = "pazymetas";
    atidarytasSkaiciusIsimintas = skaicius;
    atidarytasSkaiciusId = a.target.id;
  }
  counter();
}

function counter(b) {
  let a =
    kvadratuSkaicius * kvadratuSkaicius - atvertuSkaicius * 2 - counterMinus;
  if (b == 0) {
    console.log("counter 0");
    a = 0;
    document.getElementById("counter").innerHTML = a;

    return;
  }
  document.getElementById("counter").innerHTML = a;
  if (a == 0) {
    document.getElementById("counter").innerHTML = "VALIO !!!";
  }
}

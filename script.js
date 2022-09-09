document.getElementById("mygtukas").addEventListener("click", vykdom); //stebim mygtuko bukle ir vykdom()
document.getElementById("number").addEventListener("keypress", mygtukas); //linksmybem : ENTER mygtuko klausymas
let kvadratuSkaicius = 0;
let alertSkaicius = 0;

function vykdom() {
  //restartuojam jei iveda nauja reiksme (istrinam "bendra" div)
  if (kvadratuSkaicius != 0) {
    document.getElementById("bendras").innerHTML = "";
    kvadratuSkaicius = 0;
  }
  //sukuriam kvadratelius
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
        //row sukurimas
        for (let i = kvadratuSkaicius; i > 0; i--) {
          const row = document.createElement("div");
          row.innerHTML = "";
          row.id = "row" + i;
          document.getElementById("bendras").appendChild(row);
        }
        for (let i = kvadratuSkaicius; i > 0; i--) {
          let row = i;
          for (let i = kvadratuSkaicius; i > 0; i--) {
            const deze = document.createElement("div");
            deze.innerHTML = "";
            deze.id = "row" + row + "deze" + i;
            document.getElementById("row" + row).appendChild(deze);
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

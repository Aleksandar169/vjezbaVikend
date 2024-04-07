function podaciForme(){
    let ocjena=document.getElementById("ocjena").ariaValue;
    let indeks=document.getElementById("brIndeksa").value;

    if(ocjena<5 || ocjena>10){
        document.getElementById("greskaOcjena").innerHTML=
        " ocjena mora biti u opsegu 5-10";
        console.log(" ocjena mora biti u opsegu 5-10");
        document.getElementById("greskaOcjena").style.display="block";
        return false;
    }
    let pom=/^\d{4}\/\d{4}$/;

    if(!indeks.match(pom)){
        document.getElementById("greskaIndeks").innerHTML=
        "indeks nije unijet u dobrom formatu";
        return false;
    }


    let godina=indeks.split("/")[0];
    let broj=indeks.split("/")[1];
    if(godina<2000 || broj<1 || broj>1000){
        document.getElementById("greskaIndeks").innerHTML=
        "godina mora biti preko 2000 a broj izmedju 1i1000";
        return false;

    }
    if(ocjena>=6 && !document.getElementById("chbox").checked){

        document.getElementById("greskaBox").innerHTML=
        "niste cekirali";
        return false;
    }

    const objekat={
        ocjena: ocjena,
        datumIzlaska: document.getElementById("date").value,
        brojIndeksa: indeks,
        rok: document.querySelector('input[name="rok]:checked').value,
        redniBrojIzlaska: document.getElementById("selekt").value,
        polozen: document.getElementById("chBox").checked,
    };
    return JSON.stringify(objekat);
}
document.getElementById("dugme").addEventListener("click", function(){
    let rezultat=podaciForme();
    if(rezultat){
        document.getElementById("podaci").value=rezultat;
        document.getElementById("ocjena").value="";
        document.getElementById("indeks").value ="";
        document.getElementById("date").value ="";
        document.querySelector('input[name="rok"]:checked').checked = false;
        document.getElementById("izlazak").value = "1";
        document.getElementById("polozen").checked = false;
        document.getElementById("razlogGreske").style.display = "none";
        document.getElementById("greskaBox").style.display = "none";
        document.getElementById("greskaIndeks").style.display = "none";
        document.getElementById("greskaOcjena").style.display = "none";

    }
});
const form = document.querySelector(".form");
const infoIMC = document.querySelector("#bInfo");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    setResultado(calcIMC());
});

// ICONE E FUNCIONAMENTO DA INFORMAÇÃO
let infob = 1;
infoIMC.addEventListener('click', function(e) {
    e.preventDefault();
    const sobreimc = document.querySelector(".sobreimc");
    const icon = document.querySelector("#icone");
    if(infob == 1){
        sobreimc.style.display = "block";
        icon.classList.remove("gg-info");
        icon.classList.add("gg-close-o");
        infob = 0;
    }else{
        sobreimc.style.display = "none";
        icon.classList.remove("gg-close-o");
        icon.classList.add("gg-info");
        infob = 1;
    }    
});

//  ENVIA OQ DEVE SER MOSTRADO COMO RESULTADO(MENSAGEM)
function setResultado (msg){
    const IMC = document.querySelector(".mostrarIMC");
    if(msg === NaN){
        msg = "Digete os Dados";
    }
    IMC.innerHTML = msg;
}

// FAZ OS CÁLCULOS E DEFINE OQ SERA ENVIADO
function calcIMC(){
    const dPeso = document.querySelector(".peso");
    const dAltura = document.querySelector(".altura");
    let peso = Number(parseFloat((dPeso.value).replace(',','.')));
    let altura = Number(parseFloat((dAltura.value).replace(',','.')));
    let imc = (peso/(altura*altura))*10000;
    if(!peso || !altura){
        return "Preencha os campos";
    }
    if(altura <= 0 || peso <= 0){
        const msg = "Digite dados válidos";
        return msg;
    }else{ 
        return imc.toFixed(2);
    }
}

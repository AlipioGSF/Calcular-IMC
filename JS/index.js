function meuIMC(){
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".mostrarIMC");
    const dados = [];
    function calcIMC(evento){
        evento.preventDefault();
        const peso = document.querySelector(".peso");
        const altura = document.querySelector(".altura");
        const imc = Number(peso.value)/Number(altura.value ** 2);
        dados.push({
            peso: peso.value,
            altura: altura.value,
            imc: Number(peso.value)/Number(altura.value ** 2)
        });

        if(!(peso.value && altura.value)){
            alert("Preencha todos os campos");
        }

        if(altura.value > 3){
            altura.value = altura.value/100;
        }
        
        if(altura.value !== Number || peso.value !== Number){
            resultado.innerHTML = "Não use (,), use (.)"
        }

        if(altura.value > 0 && peso.value > 0){
            resultado.innerHTML = `${(Number(peso.value)/Number(altura.value ** 2)).toFixed(1)}`;
        }
        
        console.log(dados);
    }
    form.addEventListener('submit', calcIMC)
}
meuIMC();
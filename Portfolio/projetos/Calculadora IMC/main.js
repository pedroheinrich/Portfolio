const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    /* Previne o comportamento padrão do evento submit do JS, ou seja,
    impede o recarregamento da página */
    event.preventDefault();

    
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const alturaEnCentimetros = altura/100;


    const imc = (peso / (alturaEnCentimetros * alturaEnCentimetros)).toFixed(2);

    if (!isNaN(imc)) {
        const value = document.getElementById('valor');
        let description = '';

        value.classList.add('attention');
        
        document.getElementById('infos').classList.remove('hidden');
    
        if (imc < 18.5){
            description = 'Cuidado! Estás muy abajo de tu peso ideal!';
        } 

        else if (imc >= 18.5 && imc <= 25) {
            description = "Wow, estás en tu peso ideal!";
            value.classList.remove('attention');
            value.classList.add('normal');
        }

        else if (imc > 25 && imc <= 30) {
            description = "Vamos a empezar una dieta en el lunes?";
        }

        else if (imc > 30 && imc <= 35) {
            description = "Ojo, todavia se puede arreglar facil con eso!";
        }

        else if (imc > 35 && imc <= 40) {
            description = "Cuidado! Sabes que te estas haciendo?";
        }

        else {
            description = "LPM! Ya podés participar del documental Quilos Mortales!";
        }

        value.textContent = imc.replace('.', ',');
        document.getElementById('description').textContent = description;
    }
});

form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calculate').click();
    }
});
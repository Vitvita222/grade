let qula = document.querySelector('.qulischasaw');
let result1 = document.querySelector('.result');
let gamotvla = document.querySelector('.gamotvla');


gamotvla.addEventListener('click', () => {
    if (qula.value >= 80 && qula.value <= 100){
        result1 = document.querySelector('.result').value = "A";
        return
    }
    else if (qula.value >= 60 && qula.value <= 79){
        result1 = document.querySelector('.result').value = "B";
        return
    }
    else if (qula.value >= 30 && qula.value <= 59){
        result1 = document.querySelector('.result').value = "D";
        return
    }
    else if (qula.value >= 0 && qula.value <= 29){
        result1 = document.querySelector('.result').value = "F";
        return 
    }else{
        result1 = document.querySelector('.result').value = "Are you Siriuz rait nau???";
    }
})
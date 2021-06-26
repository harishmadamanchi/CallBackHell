function decreament_show(value,displayed){
    displayed(value);
}
let displayElement = document.getElementById('valueholder');
function displayed(value) {
    setTimeout(() => {
        if(value >= 0) {
            console.log(value.toFixed(2));
            displayElement.innerHTML = value;
            value = value - 1;
            decreament_show(value,displayed);
        }
        else {
            displayElement.innerHTML = 'Happy BirthDay!!!';
            console.log('Happy BirthDay!!!');
        }
    },1000);
    
}

decreament_show(10,displayed);

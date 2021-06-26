let displayElement = document.getElementById('valueholder');

function decrease(value, callback, wish) {
    value = value-1;
    if(value % 2 === 0) {
        displayElement.classList.remove('red');
        displayElement.classList.add('blue');
    }else {
        displayElement.classList.remove('blue');
        displayElement.classList.add('red');
    }
    setTimeout(() => {
        // console.log(`value: ${value}`);
        value >= 0 ? callback(value) : wish();
    },1000)
}

function wishes() {
    displayElement.classList.remove('blue');
    displayElement.classList.add('green');
    displayElement.innerHTML = 'Happy BirthDay!!!'   
    // console.log('Happy BirthDay!!!');
}
decrease(11,function(data) {
    displayElement.innerHTML = data   
    // console.log(data);
    decrease(data,function(data1) {
        displayElement.innerHTML = data1   
        // console.log(data1);
        decrease(data1,function(data2) {
            displayElement.innerHTML = data2   
            // console.log(data2);
            decrease(data2,function(data3) {
                displayElement.innerHTML = data3   
                // console.log(data3);
                decrease(data3,function(data4) {
                    displayElement.innerHTML = data4   
                    // console.log(data4);
                    decrease(data4,function(data5) {
                        displayElement.innerHTML = data5   
                        // console.log(data5);
                        decrease(data5,function(data6) {
                            displayElement.innerHTML = data6   
                            // console.log(data6);
                            decrease(data6,function(data7) {
                                displayElement.innerHTML = data7   
                                // console.log(data7);
                                decrease(data7,function(data8) {
                                    displayElement.innerHTML = data8   
                                    // console.log(data8);
                                    decrease(data8,function(data9) {
                                        displayElement.innerHTML = data9   
                                        // console.log(data9);
                                        decrease(data9,function(data10) {
                                            displayElement.innerHTML = data10   
                                            // console.log(data10);
                                            decrease(data10,function(data11) {
                                                displayElement.innerHTML = data11   
                                                // console.log(data11);
                                            },wishes)
                                        },wishes)
                                    },wishes)
                                },wishes)
                            },wishes)
                        },wishes)
                    },wishes)
                },wishes)
            },wishes)
        },wishes)
    },wishes)
},wishes)


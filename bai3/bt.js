for (let i = 1; i <= 5; i++) {
    let number = '';

    for (let k = 5 - i; k > 0; k--) {
        number += ' ';
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        number += '1';
    }

    console.log(number);
}


// bai 2
// myArr = [9,7,9,0,7,8,387,123,456]
// let number = i;
// for (let i=0; i < myArr; i++);
// if (i % 2 === 0 || i === 0) {
//      number(myArr); 
//     }
//     console.log(number);
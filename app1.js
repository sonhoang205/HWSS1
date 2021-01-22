
let input = prompt('Nhập vào số').split(", ");
// console.log(input)


let test = true;
let result = []
for (let i = 0; i < input.length; i++) {
    let x = Number(input[i])
    // console.log(x)
    if (x <= 2) {
        test = false;
    }
    else {
        for (var j = 2; j <= x - 1; j++) {
            if (x % j == 0) {
                test = false;
                break;
            } else {
                test = true
            }
            // console.log(x + ' ' + j + ' ' + test);
        }
        // console.log(x + ' ' + test);
    }

    if (test == true) {
        result.push(x)


    }    
}
console.log('các số nguyên tố là ' + result)

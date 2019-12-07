

const doCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, [1,2,3])
    }, 2000);
}

doCallback((error, result) => {
    if (error) {
        return  console.log(error)
    } console.log(result)
})

const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {

        const sum = 2+2

        resolve(sum);

        reject("Things went wrong")
        
    }, 2000);
})

doWorkPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

//Closures 



function isFast(engineSize) {
    var a = 'is fast';
    return function(horsepower) {
        console.log(engineSize + horsepower);
    }
}

var mustang = isFast('v8');

mustang(123);

function canDrink(yearofbirth){
    var age = 2019 - yearofbirth;
    return function(beer){
        let drink = beer;
        if (age > 21){
            console.log(`buy john a ${drink}`)
        }
    }
}

const john = canDrink(1990);

john('budlight');

var ages = [1 , 3 , 4];
var total = [];

function function1(value){
    var perc = .2;
    total.push(value + value * perc)
}

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);



function myFunction(value) {
  return value * 2;
}

ages.forEach(function1);
console.log(numbers2);

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

add(1, 2).then((sum) => {
    console.log(sum);

    add(sum, 3).then((sum2) => {

    }).catch((e) => {
        console.log(e)
    })
}).catch((e) => {
    console.log(e)
})
  
add(1,2).then((sum) => {
    return add(sum , 1)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})
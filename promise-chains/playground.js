

 const person = {
        name: 'John',
        bills: [10, 43, 23, 45],
        calcTips: function(){
            
            var total = this.bills.map(afterTips)
            
            return total;
        }
    }

    function afterTips(value) {
        var perc;

        if (value > 20) {
            perc = .3
        } else {
            perc = .2
        }
        return value + value * perc
    }

    console.log(person.calcTips())


    const add = (a , b) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(a + b)
            }, 2000)
        })
    }

    const subtract = ( a , b ) => {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(a - b)
            }, 2000)
        })
    }

    const multiply = ( a , b ) => {
        return new Promise ((resolve , reject) => {
            setTimeout(() => {
                resolve( a * b)
            }, 2000)
        })
    }

    const doWork = async() => {
        const sum = await add(1, 2);
        const sum2 = await subtract(sum , 3);
        const sum3 = await multiply(sum , sum2);
        return sum3
    }

    doWork().then((result) => {
        console.log(result)
    }).catch((e) =>{
        console.log(e)
    })
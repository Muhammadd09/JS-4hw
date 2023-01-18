

function myRandom(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}


alert('Keling random misollar yechamiz')


let prCount = +prompt('Nechta misol yechmohchisiz?')
let minInit = +prompt('Minimal sonni kiriting')
let maxInit = +prompt('Maksimal sonni kiriting')


for (let i = 1; i <= prCount; i++) {
    let num1 = myRandom(minInit, maxInit)
    let num2 = myRandom(minInit, maxInit)

    let pr = +prompt(`${i}) Misol: ${num1} + ${num2} = ?`)
    let answer = (num1 + num2) == pr ? 'Togri :)' : 'Notogri :('
    alert(`${i}) Misol: ${num1} + ${num2} = ${num1 + num2}.
    Sizning Javobingiz: ${pr}, va javobingiz: ${answer}
    `)


    
}

    let pr2 = +prompt(`${i}) Misol: ${num1} * ${num2} = ?`)
    let answer2 = (num1 + num2) == pr2 ? 'Togri :)' : 'Notogri :('
    alert(`${i}) Misol: ${num1} * ${num2} = ${num1 * num2}.
    Sizning Javobingiz: ${pr2}, va javobingiz: ${answer2}
    `)


    let pr3 = +prompt(`${i}) Misol: ${num1} - ${num2} = ?`)
    let answer3 = (num1 + num2) == pr3 ? 'Togri :)' : 'Notogri :('
    alert(`${i}) Misol: ${num1} - ${num2} = ${num1 - num2}.
    Sizning Javobingiz: ${pr3}, va javobingiz: ${answer3}
    `)



    let pr4 = +prompt(`${i}) Misol: ${num1} / ${num2} = ?`)
    let answer4 = (num1 + num2) == pr4 ? 'Togri :)' : 'Notogri :('
    alert(`${i}) Misol: ${num1} / ${num2} = ${num1 / num2}.
    Sizning Javobingiz: ${pr4}, va javobingiz: ${answer4}
    `)
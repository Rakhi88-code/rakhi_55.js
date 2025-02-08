//document.write("Hello Javascript")
//document.write(`<h1>Javascript</h1>`)
let name1="IQ INDIA"
document.write(`<center><h2>JAVASCRIPT</h2></center>`)
document.write(`<center><h1>${name1}</h1></center>`)
document.write(`<hr>`)
console.log(name1)

let num1=56
let num2=70
let res=num1+num2
//document.write(`<h3 style="color:red;"> ${num1}+${num2}= ${res}</h3>`)
//document.write(`<h3> <span style="color:green;">${num1}</span> +${num2}= ${res}</h3>`)
document.write(`<h3> ${num1} + ${num2} = ${res}</h3>`)
console.log(res)

// let n1=prompt("Enter you Number : ") //without number using promp only string result are comes if we add 3+4 then result comes are 34 instead of 7
// let n2=prompt("Enter your Number: ")
let n1=Number(prompt("Enter you Number : "))
let n2=Number(prompt("Enter your Number: "))
let total=n1+n2
document.write(`result : ${total}`)
console.log("meow")

const DOM = document.getElementById("makeIt")

let allEmails = []
const extractEmail = customers.customer.map(function(arguement){
    return allEmails = allEmails.concat(arguement.contacts.email)
})
console.log(allEmails)

allEmails.forEach(function(arguement){
    DOM.innerHTML +=
    `<h2> ${arguement}</h2>`
 })
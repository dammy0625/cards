const contact = document.querySelector(".contact")
const address = document.querySelector(".address")
const u = document.querySelector(".u")
const a = document.querySelector(".a")




contact.onclick = ()=>{
    u.classList.toggle("show")
}
address.onclick = ()=>{
    a.classList.toggle("show")
}
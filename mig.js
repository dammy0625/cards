const con = document.querySelector(".contact")
const slider = document.querySelector(".slider")

con.onclick = ()=>{
    slider.classList.toggle("sli")
}
slider.onclick = ()=>{
    slider.classList.remove("sli")
}
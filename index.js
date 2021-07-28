const buy = document.querySelectorAll("h6");
const box = document.querySelectorAll(".box");
const p = document.querySelectorAll("p");
const slider = document.querySelector(".slider")
const close = document.querySelector("h2")
const h3 = document.querySelector("h3")
const cart = document.querySelector(".cart")
const check = document.querySelector(".check")
const out = document.querySelector(".out")
const h4= document.querySelector("h4")

buy.forEach((btn)=>{
    btn.onclick = ()=>{
        let fest = btn.parentElement
        let sec = fest.firstChild
        let ted = sec.nextSibling
        let sr = ted.getAttribute("src")
        h4.innerText += ted.nextElementSibling.innerText
        
if(sr === 'davedr.jpg'){
h3.innerHTML = "this is a project i made of @ santan-dave <br> i made this during the lockdown <br> i was really in my element creating this <br><br><strong>made with graphite pencils and other simple material like <br> stump,tombow eraser,etc..</strong> "
}else if(sr === 'girldr.jpg'){
    h3.innerHTML = "this is a project i made of a friend of mine <br>i made this during the lockdown <br> i was actually just testing my feet in the waters of hyper-realism..lol.. <br>but am glad it came out soo well,and am proud of the result..seriously"
}else if(sr === 'grandmadr.jpg'){
    h3.innerHTML = "this is a project i made of a picture of an old woman i saw online <br> i made during the lockdown <br> this was my first project of the lockdown and also testing my feet in the waters of hyper-realism..lol.. <br>but am glad it came out soo well,and am proud of the result..seriously"
}else if(sr === 'lituboydr.jpg'){
    h3.innerHTML = "this is a project i made of a baby's picture i made during the lockdown <br> this is one of the projects i made during the lockdown also.. <br>am glad it came out soo well,and am proud of the result.."
}else if(sr === 'migueldr.jpg'){
    h3.innerHTML = "this is a project i made of an acquaintance <br> this is  one of my projects i made during the lockdown also.. <br>am glad it came out soo well,and am proud of the result.."
}
        slider.style.cssText =  'background-image:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(' + sr + ');background-size: cover;'
        
        slider.classList.add("slid")   
    }
    close.onclick = ()=>{
        slider.classList.remove("slid") 
    }
    check.onclick = ()=>{
        slider.classList.remove("slid")
setTimeout(()=>{
out.classList.add("outni")

},900)


    }
})
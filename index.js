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
const pay= document.querySelector(".pay")
const phone= document.querySelector(".phone")
const cad= document.querySelector("#cad")
const cvv= document.querySelector("#cvv")


buy.forEach((btn)=>{
    btn.onclick = ()=>{
        let fest = btn.parentElement
        let sec = fest.firstChild
        let ted = sec.nextSibling
        let sr = ted.getAttribute("src")
        let sik = ted.nextElementSibling.innerText
        let snbg = parseInt(sik.slice(1,6))
h4.innerHTML = "total :" + snbg
        
        
if(sr === 'davedr.jpg'){
h3.innerHTML = "this is a project i made of @ santan-dave <br> i made this during the lockdown <br> i was really in my element creating this <br><br><strong>made with graphite pencils and other simple material like <br> stump,tombow eraser,etc..</strong> "
}else if(sr === 'girldr.jpg'){
    h3.innerHTML = "this is a project i made of a friend of mine <br>i made this during the lockdown <br> i was actually just testing my feet in the waters of hyper-realism..lol.. <br>but am glad it came out soo well,and am proud of the result..seriously"
}else if(sr === 'grandmadr.jpg'){
    h3.innerHTML = "this is a project i made of a picture of an old woman i saw online <br> i made this during the lockdown <br> this was my first project of the lockdown and also testing my feet in the waters of hyper-realism..lol.. <br>but am glad it came out soo well,and am proud of the result..seriously"
}else if(sr === 'lituboydr.jpg'){
    h3.innerHTML = "this is a project i made of a baby's picture i made during the lockdown <br> this is one of the projects i made during the lockdown also.. <br>am glad it came out soo well,and am proud of the result.."
}else if(sr === 'migueldr.jpg'){
    h3.innerHTML = "this is a project i made of an acquaintance <br> this is  one of my projects i made during the lockdown also.. <br>am glad it came out soo well,and am proud of the result.."
}
        slider.style.cssText =  'background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.9)),url(' + sr + ');background-size: cover;'
        
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


    pay.onclick = ()=>{

        if( cad.value == "" && cvv.value == ""){
            alert('input a "dummy" card no.')
        }else{
            if(confirm("confirm payment... and proceed to final checkout.. ")){
                if(alert("thank you for shopping with us")  !== 'ok'){
                    out.classList.remove("outni")
                    setTimeout(() => {
                        alert("your account has been debited with the" +" " + h4.innerHTML)
                    },1500);
                }
    
            }else{
                if(alert("go back to home page")  !== 'ok'){
                    out.classList.remove("outni")
                    
                }
            }
        }
        
    }

})
const buy = document.querySelectorAll("h6");
const box = document.querySelectorAll(".box");
const p = document.querySelectorAll("p");
const slider = document.querySelector(".slider")
const close = document.querySelector(".ex")
const exik = document.querySelector(".exik")
const h3 = document.querySelector("h3")
const cart = document.querySelector(".cart")
const check = document.querySelector(".check")
const out = document.querySelector(".out")
const h4= document.querySelector("h4")
const pay= document.querySelector(".pay")
const phone= document.querySelector(".phone")
const mail = document.querySelector(".mail")
const simp = document.querySelector(".simp")
const sun = document.querySelector(".sun")
const cecle = document.querySelector(".cecle")
const soap = document.querySelector(".soap")
const chk = document.querySelector(".chk")
const cad= document.querySelector("#cad")
const cvv= document.querySelector("#cvv")

phone.onclick = ()=>{
   let taju = confirm("althogh i am currently not selling...would you like to contact me..maybe for work?? ")
   if(taju){
       alert("+234-08068167947")
   }
}
mail.onclick = ()=>{
   let tju = confirm("althogh i am currently not selling...would you like to send an email..maybe for work?? ")
   if(tju){
       alert("muyiwalateef@gmail.com")
   }
}
    sun.onclick = ()=>{
        let cfr = alert(
            "thanks for shopping with us"
            )
            if(cfr !== "ok"){
                out.classList.remove("outni")
            }
    }


buy.forEach((btn)=>{
    btn.onclick = ()=>{
        let fest = btn.parentElement
        let sec = fest.firstChild
        let ted = sec.nextSibling
        let sr = ted.getAttribute("src")
        let sik = ted.nextElementSibling.innerText
        let snbg = parseInt(sik.slice(1,6))
h4.innerHTML = "total :"+ ' ' + snbg


        
        
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
    exik.onclick = ()=>{
        soap.classList.remove("outni")
    }
   
   
    check.onclick = ()=>{
        cecle.innerText = 0
        counter = 1
        cecle.style.cssText = "display:none"
        slider.classList.remove("slid")
        setTimeout(()=>{
            out.classList.add("outni")
        },900)
    }
    chk.onclick = ()=>{
        cecle.innerText = 0
        counter = 1
        cecle.style.cssText = "display:none"
        soap.classList.remove("outni")
        setTimeout(()=>{
            out.classList.add("outni")
        },900)
    }
    var counter = 1
    


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
    var counter =1
    cart.onclick =()=>{
        cecle.innerText = counter
        simp.innerText = cecle.innerText + ' ' + " item added to cart"
        if(counter >= 5){
            counter = 4
        }
        cecle.style.cssText = "display:block"
        
        slider.classList.remove("slid")
        setTimeout(() => {
            soap.classList.add("outni")
            
        }, 1000);

        counter++
    }

})
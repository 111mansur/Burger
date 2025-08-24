
const foods = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amout:0,
        kaloriya:700,
        get calculatorsum(){
            return this.price * this.amout
        },
        get calcKcal(){
            return this.kaloriya * this.amout
        }
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amout:0,
        kaloriya:900,
        get calculatorsum(){
            return this.price * this.amout
        }, 
        get calcKcal(){
            return this.kaloriya * this.amout
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amout:0,
        kaloriya:1000,
        get calculatorsum(){
            return this.price * this.amout
        },
        get calcKcal(){
            return this.kaloriya * this.amout
        }
    }
} 
let btn = [...document.querySelectorAll(".main__product-btn")]

for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click",function(){
        prepare(this)
    })
}
function prepare(item){
    let parent = item.closest(".main__product")
    let parentId = parent.getAttribute("id")
    let price = parent.querySelector(".main__product-price span")
    let kcall = parent.querySelector(".main__product-kcall span")
    let sym = item.getAttribute("data-symbol")
    let num = parent.querySelector(".main__product-num")
    let count = foods[parentId].amout
    console.log(count)
    if(sym == "+"){
        count++
    }else if(sym == "-" && 0 < count){
        count--
    }
    foods[parentId].amout = count
    num.textContent = count
    price.textContent = foods[parentId].calculatorsum
    kcall.textContent = foods[parentId].calcKcal
}
let time = document.querySelector(".header__timer-extra")
let stop 
function lvl(){
    time.innerHTML++
    if(time.innerHTML< 20){
        stop=setTimeout(()=>{
            lvl()
        },25)
    }else if(time.innerHTML< 40){
        stop=setTimeout(()=>{
            lvl()
        },5)
    }else 
    if(time.innerHTML< 60){
        stop=setTimeout(()=>{
            lvl()
        },50)
    }else   if(time.innerHTML< 70){
        stop=setTimeout(()=>{
            lvl()
        },20)
    }else   if(time.innerHTML< 80){
        stop=setTimeout(()=>{
            lvl()
        },30)
    }else  if(time.innerHTML< 85){
        stop=setTimeout(()=>{
            lvl()
        },500)
    }else  if(time.innerHTML< 93){
        stop=setTimeout(()=>{
            lvl()
        },60)
    }else  if(time.innerHTML< 97){
        stop=setTimeout(()=>{
            lvl()
        },400)
    }else  if(time.innerHTML< 100){
        stop=setTimeout(()=>{
            lvl()
        },1000)
    }
    if (  time.innerHTML==100){
        clearTimeout(stop)
    }
}
lvl()
let receipt = document.querySelector(".receipt")
let receiptWindow = document.querySelector(".receipt__window") 
let receiptWindowOut = document.querySelector(".receipt__window-out")
let addCart = document.querySelector(".addCart")
let receiptwindowbtn =document.querySelector(".receipt__window-btn")
addCart.addEventListener("click",function(){
    receipt.style.display="block"
    receipt.style.opacity=1
    setTimeout(()=>{
        receiptWindow.style.top="20%"
    },1000)
})
let totalprice = 0
let totalkcall = 0
let menu = ""
addCart.addEventListener("click", function () {


totalprice = 0
    totalkcall = 0
    menu = ""
    for (const key in foods) {
        if (foods[key].amout > 0) {
            menu += `${foods[key].name} 
    ${foods[key].price} so'm x ${foods[key].amout} = ${foods[key].calculatorsum} so'm
    Kaloriya: ${foods[key].calcKcal} kcal\n\n`
            
            totalprice += foods[key].calculatorsum
            totalkcall += foods[key].calcKcal
        }
    }
    menu += `Umumiy summa: ${totalprice} so'm\nUmumiy kaloriya: ${totalkcall} kcal\n`
    receiptWindowOut.textContent = menu   
    receipt.style.display = "flex"
    receipt.style.opacity = 1
    setTimeout(() => {
        receiptWindow.style.top = "20%"
    }, 500)
})
receiptwindowbtn.addEventListener("click",function(){

    receipt.style.opacity = 0
      setTimeout(() => {
        receiptWindow.style.top = "-100%"
        receipt.style.display = "none"
    }, 10);
})
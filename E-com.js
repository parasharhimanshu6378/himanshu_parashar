let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
      ul.classList.toggle("showdata");
      
      if(ul.classNmae =="showdata"){
        document.getElementById("fa-solid fa-bars").className= "fa-solid fa-x";
      }else{
        document.getElementById("fa-solid fa-bars").className= "fa-solid fa-bars";
      }
})

//navbar

let shop =document.getElementById("shops");
let review =document.getElementById("review");
let blog =document.getElementById("blog");
let contact =document.getElementById("contact");

console.log(shop)

shop.addEventListener("click",() => {
     shop.style.color="aqua"
     review.style.color="white"
     blog.style.color="white"
     contact.style.color="white"
})

review.addEventListener("click",()=>{
    review.style.color="aqua"
    shop.style.color="white"
     blog.style.color="white"
     contact.style.color="white"
})

blog.addEventListener("click",()=>{
     blog.style.color="aqua"
     shop.style.color="white"
     shop.style.color="white"
     contact.style.color="white"
})

contact.addEventListener("click",()=>{
     contact.style.color="aqua"
      shop.style.color="white"
     blog.style.color="white"
     shop.style.color="white"
})


//card js

let crd = document.querySelectorAll(".crd");
let itempage = document.querySelector(".itempage")
let  container = document.querySelector(".container");
let itemImg = document.getElementById("itemImg");
let buyBtn = document.getElementById("buyBtn");






  crd.forEach(function(curValue){
       curValue.addEventListener("click" , function(){
            itempage.style.display="flex";
            container.style.display="none";


             let imgSrc =curValue.firstElementChild.src ;
             itemImg.src = imgSrc;


             buyBtn.addEventListener("click",function(){
               document.querySelector(".buyPage").style.display="block";
                document.querySelector(".buyText").innerHTML=`
                <h3>Enter Details :</h3>
            <input type="text" placeholder="Enter Your Name"> <br>
            <input type="text" placeholder="Enter Your Address"> <br>
            <input type="text" placeholder="Enter Your Mobile Number"> <br>
               <h3>Payment Option :</h3>
               <select >
                    <option value="Google.Pay">Google.pay</option>
                <option value="Phone-Pay">Phone.pay</option>
                <option value="Bharat-Pay">Bharat.pay</option>
                <option value="Cash-on-Delievery">Cash-on-Delievery</option>
            </select> <br>
            <button>Submit</button>
            `
           
            let cross = document.querySelector(".cross");
            cross.addEventListener("click",function(){
               document.querySelector(".buyPage").style.display="none";

            
            
          })    
          
       })
             
             

       })
  
  




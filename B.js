let btn1=document.querySelector("#btn1")
let text1=document.querySelector("#text1")
let li1=document.querySelector("#li1")
let arr=[]
let arr1=[]

btn1.addEventListener("click",function(){
    let text2=text1.value
    if(text2.length!==0){
        arr.push(text2)

    }

    let full1=arr.map(function(item){

        return `<li class="list-group-item list-group-item-dark  ">${item}</li>`
       

    })

    full1.reverse()
  
   
li1.innerHTML=full1.join("")
    


    

    
    


  
})







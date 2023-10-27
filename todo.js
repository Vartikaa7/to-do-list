let btn=document.querySelector("button");
btn.addEventListener("click",function(event){
    let ul=document.querySelector("ul");
    let inp=document.querySelector("input");
    let data=inp.value;
    let li=document.createElement("li")
    ul.appendChild(li)
    li.innerHTML=data;
    


})

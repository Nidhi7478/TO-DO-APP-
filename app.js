// let para= document.createElement('p');
// para.innerText="hey im nidhi rathro";
// document.querySelector('body').append(para);

// document.classList.add('red');
// let btn =document.querySelector('button');

// btn.addEventListener("click",function(){

// // this.style.backgroundColor="green";
// btn.classList.add("green");
// });
// let btn=document.querySelector('button');
// let inp=document.querySelector('input');
// let ul=document.querySelector('ul');




// btn.addEventListener("click",function(){
//     let item=document.createElement('li');
//     item.innerText=inp.value;


// let delBtn=document.createElement("button");
// delBtn.innerText="delete";
// delBtn.classList.add("delete");

// item.appendChild(delBtn);
// ul.appendChild(item);
//  inp.value="";

// });
// ul.addEventListener("click",function(event){
//     if(event.target.nodeName=="BUTTON"){
//        let listItem= event.target.parentElement;
//        listItem.remove();
//     }

// });
// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//       let par= this.parentElement;
//       console.log(par);
//       par.remove();
//     });
// }
let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let li=document.createElement("li");
    li.innerText=inp.value;
    ul.appendChild(li);
    let delbtn= document.createElement("button");
    delbtn.innerText="delete";
    li.appendChild(delbtn);
})
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
      let par=  event.target.parentElement;
      par.remove();
    }
});

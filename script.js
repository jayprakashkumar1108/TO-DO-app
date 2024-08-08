let h1=document.querySelector('h1');
let input=document.querySelector('input');
let btn=document.querySelector('button');
let ul=document.querySelector('ul');

btn.addEventListener("click",function(){
    let item=document.createElement('li');
    item.innerText=input.value;

    let Del_button=document.createElement('button');
    Del_button.innerText="delete";
    Del_button.classList.add("delete");

    item.appendChild(Del_button);
    ul.appendChild(item);
    input.value="";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName=='BUTTON'){
        let listitem=event.target.parentElement;
        listitem.remove();
    }
});
//設問1
const input=document.getElementById("textbox");
const push=document.getElementById("button");
const display=document.getElementById("display");
const table=document.getElementById("table");
const count=document.getElementById("addcount");
let addCount=0;

push.addEventListener('click',function(){
    var text=input.value;

    if(text===""){
        alert("入力値が空です");
    }
    display.textContent=text;
    
    //設問３
    if(display.classList.contains('highlight')){
        display.classList.remove('highlight');
    }else{
        display.classList.add('highlight');
    }

    //設問４
    const tr=document.createElement("tr");
    const td=document.createElement("td");
    td.textContent=text;

    const deleatTd=document.createElement("td");
    const deleat=document.createElement("button");
    deleat.textContent="削除";

    deleatTd.appendChild(deleat);
    tr.appendChild(td);
    tr.appendChild(deleatTd);

    table.appendChild(tr);

    addCount++;
    count.textContent=addCount;

    if(addCount>2){
        push.style.display="none";
    }

//設問５
    deleat.addEventListener('click',function(){
    addCount--;
    count.textContent=addCount;
    tr.remove();

    if(addCount<3){
        push.style.display="inline-block";
    }
});
    
});



//設問２
const color = document.getElementById("color-button");
const colors=["lightblue","lightgreen","lightcoral"];
let colorIndex=0;

color.addEventListener("click",function(){
    document.body.style.backgroundColor=colors[colorIndex];
    colorIndex++;

    if(colorIndex>=colors.length){
        colorIndex=0;
    }

});

//設問７
for(let i=1; i<=5; i++ ){
    console.log(i+"回目のループです");
}





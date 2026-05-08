//設問1
const input=document.getElementById("textbox");
const push=document.getElementById("button");
const addButton=document.getElementById("add-button");
const display=document.getElementById("display");
const table=document.getElementById("table");
const count=document.getElementById("addcount");
let addCount=0;

push.addEventListener('click',function(){
    var text=input.value;

    if(text===""){
        alert("入力値が空です");
        return;
    }

    display.textContent=text;
    
    //設問３
    if(display.classList.contains('highlight')){
        display.classList.remove('highlight');
    }else{
        display.classList.add('highlight');
    }

    addRow(text);
});

//設問４設問５
function addRow(text){
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

    if(addCount>3){
        table.removeChild(table.firstElementChild);
        addCount--;
    }

    count.textContent=addCount;

    if(addCount>=3){
        push.style.display="none";
    }

    deleat.addEventListener('click',function(){
        tr.remove();
        addCount--;
        count.textContent=addCount;

        if(addCount<3){
            push.style.display="inline-block";
        }
    });
};


addButton.addEventListener("click",function(){
    const text=input.value;

    if(text===""){
        alert("入力値が空です");
        return;
    }

    addRow(text);
});

//設問２
const color=document.getElementById("color-button");
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
for(let i=1; i<=5; i++){
    console.log(i+"回目のループです");
}
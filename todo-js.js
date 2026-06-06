
let todolist=[];

function storing()
{
   a=document.querySelector(`#iput`).value;
   b=document.querySelector(`#dt`).value;
  todolist.push({describtion:a,dates:b});
   show();
  document.querySelector(`#iput`).value="";
  document.querySelector(`#dt`).value="";
}

function show()
{
  let div1=document.querySelector(`#oput`);
  let newhtml= " ";
  for(let i=0;i< todolist.length;i++)
  {
    // let x=todolist[i].describtion;
    // let y=todolist[i].dates;
    let {describtion:x,dates:y}=todolist[i];
    newhtml+=`<span>${x}</span><span>${y}</span>
    <button onclick="todolist.splice(${i}, 1); show();" id=dlt-btn>delete</button>`;
  }
  div1.innerHTML=newhtml;
  console.log(todolist);
 }

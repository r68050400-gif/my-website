function login(){
  let u=document.getElementById("user").value;
  if(u==="") return alert("Enter username");
  localStorage.setItem("username",u);
  location.href="home.html";
}

function logout(){
  localStorage.clear();
  location.href="index.html";
}

function send(){
  let n=name.value,e=email.value,m=message.value;
  if(n==""||e==""||m==""){status.innerText="Fill all fields";return;}
  let arr=JSON.parse(localStorage.getItem("messages"))||[];
  arr.push({name:n,email:e,message:m,time:new Date().toLocaleString()});
  localStorage.setItem("messages",JSON.stringify(arr));
  status.innerText="Saved ("+arr.length+")";
  name.value=email.value=message.value="";
}

function loadMessages(){
  let d=document.getElementById("messages");
  if(!d) return;
  let arr=JSON.parse(localStorage.getItem("messages"))||[];
  d.innerHTML=arr.map(x=>`<div class="card">${x.name}<br>${x.message}</div>`).join("");
}

function loadAdminMessages(){
  let d=document.getElementById("adminMessages");
  let arr=JSON.parse(localStorage.getItem("messages"))||[];
  d.innerHTML=arr.map(x=>`<div class="card">${x.name}<br>${x.message}</div>`).join("");
}

function clearMessages(){
  if(confirm("Delete all?")){
    localStorage.removeItem("messages");
    loadAdminMessages();
  }
}

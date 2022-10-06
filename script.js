let msgInput = document.querySelector("#input-text");
let state = document.querySelector(".state");
const hiddenContent = document.querySelector(".hidden-content");
const sendMsg = document.querySelector("#sendMsg");
let msgTray = document.querySelector('.msg-tray')
const search = document.querySelector('#search-chat')


document.querySelector("#menu-theme").addEventListener("click", () => {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
});

document.querySelector("#theme").addEventListener("click", (e) => {
  e.stopPropagation();
  document.body.classList.toggle("dark-theme");
});
document.querySelector(".list").addEventListener("click", () => {
  alert("hi");
});
sendMsg.addEventListener("click", (e) => {
  var msgInput = document.getElementById("input-text").value;
  e.preventDefault();
  let msgSend = document.querySelector(".msg-send");
  let newMsgInput = document.createElement("p");
  newMsgInput.setAttribute("class", "right");
  newMsgInput.innerText = msgInput;
  msgSend.appendChild(newMsgInput);
  console.log(msgSend);
  document.getElementById("input-text").value = "";
});

msgInput.addEventListener(
  "focus",
  () => {
    state.innerHTML = "typing...";
  },
  true
);
msgInput.addEventListener("blur", () => {
  state.innerHTML = "online";
});

people.forEach((item)=>{
    msgTray.innerHTML +=
    `<div class="msg-view">
        <div class="msg-view-inner">
           <img src="img/${item.src}.jpg" alt="">
           <div class="msg-content">
               <h1>${item.firstName} ${item.lastName}</h1>
               <p>${item.message}</p>
            </div>
        </div>
        <span>8:00</span>
    </div> `
})
search.addEventListener('input', ()=>{
    const searchList = document.querySelectorAll('.msg-view')
    const filter = search.value.toLowerCase()
    searchList.forEach((item)=>{
        let text = item.textContent
        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display =  ''
        }else{
            item.style.display = 'none'
        }
    })
})

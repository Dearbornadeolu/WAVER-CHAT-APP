let msgInput = document.querySelector("#input-text");
let state = document.querySelector(".state");
const hiddenContent = document.querySelector(".hidden-content");
const sendMsg = document.querySelector("#sendMsg");
let msgTray = document.querySelector('.msg-tray')
const search = document.querySelector('#search-chat')


let chatIndex = 1
window.addEventListener('load',()=> loadChat(chatIndex))

//OPEN AND CLOSE MORE BOX
document.querySelector("#menu-theme").addEventListener("click", more);
function more() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
}
//THEME CHANGE
document.querySelector("#theme").addEventListener("click", (e) => {
  e.stopPropagation();
  document.body.classList.toggle("dark-theme");
  more()
});

// sendMsg.addEventListener("click", (e) => {
//   var msgInput = document.getElementById("input-text").value;
//   e.preventDefault();
//   let msgSend = document.querySelector(".msg-send");
//   let newMsgInput = document.createElement("p");
//   newMsgInput.setAttribute("class", "right");
//   newMsgInput.innerText = msgInput;
//   msgSend.appendChild(newMsgInput);
//   console.log(msgSend);
//   document.getElementById("input-text").value = "";
// });

msgInput.addEventListener(
  "focus",
  () => {
    console.log('h');
    state.innerHTML = "typing...";
  },
  true
);
msgInput.addEventListener("blur", () => {
  state.innerHTML = "online";
});
for (let i = 0; i < people.length; i++) {
  msgTray.innerHTML += 
  `
  <li class="msg-view" li-index="${i + 1}"> 
        <div class="msg-view-inner">
           <img src="img/${people[i].src}.jpg" alt="">
           <div class="msg-content">
               <h1>${people[i].firstName} </h1>
               <p>${people[i].message}</p>
            </div>
        </div>
        <span>8:00</span>
    </li>  
  `
  
}
// people.forEach((item)=>{
//     msgTray.innerHTML +=
//     `<div class="msg-view" >
//         <div class="msg-view-inner">
//            <img src="img/${item.src}.jpg" alt="">
//            <div class="msg-content">
//                <h1>${item.firstName} ${item.lastName}</h1>
//                <p>${item.message}</p>
//             </div>
//         </div>
//         <span>8:00</span>
//     </div> `
// })
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
const allMsgView= document.querySelectorAll('.msg-view')

function showChat(){
  for (let i = 0; i < allMsgView.length; i++) {
    allMsgView[i].setAttribute('onclick', 'clicked(this)')
  }
}
showChat()
function clicked(element) {
  let getIndex = element.getAttribute('li-index')
  chatIndex = getIndex
  loadChat(chatIndex)
  console.log(getIndex);
}
function loadChat(chatIndex) {
  document.querySelector('.chat-view-header-mini').innerHTML =
  `<h1 div-index='${chatIndex}'>${people[chatIndex-1].firstName +' '+ people[chatIndex - 1].lastName}</h1>
  `
  //get reply
  document.querySelector('.message p').textContent = people[chatIndex -1].message
  if (people[chatIndex - 1].reply == '') {
    document.querySelector('.msg-send').textContent = ''
  }else{
    document.querySelector('.msg-send').innerHTML = 
    `<p class='right'>${people[chatIndex-1].reply}</p>`
  }
}
sendMsg.addEventListener('click', sent)
function sent() {
  let me = document.querySelector('.chat-view-header h1').getAttribute('div-index')
  //getting msg input
  var msgInput = document.getElementById('input-text').value
  console.log(msgInput);
  //deconstruct the array
  for (const{id} of people) {
    if (id == me) {
    let msgSend = document.querySelector('.msg-send')
    let newMsgInput = document.createElement('p')
    newMsgInput.setAttribute('class', 'right')
    people[id-1].reply = msgInput
    console.log(msgInput);
    console.log(people[id-1].reply);
    newMsgInput.innerText = people[id-1].reply
    console.log(newMsgInput.textContent);
    msgSend.innerHTML += 
    `
    <p class='right'>${people[id-1].reply}</p>
    `
    document.getElementById('input-text').value = ''
    }
  }
}
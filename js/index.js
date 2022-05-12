const createTopicButton = document.getElementById("create-topic");
let qaInfoSection = document.getElementById("qa-info");
let newTopicSection = document.getElementById("new-topic");
const sendNewTopicButton = document.getElementById("send-button");
let sendedNewTopicScreen = document.getElementById("sended-topic-screen");
const sendedScreenCreateNewTopicButton = document.getElementById("sended-create-new-topic");
const summary = document.getElementById("summary");
let fullContent = document.getElementsByClassName("full-summary");
let smallText = document.getElementsByClassName("summary-text");

function showNewTopicCreationSection(){
  newTopicSection.classList.add("show-qa-section");
  newTopicSection.classList.remove("hide-qa-section");

  qaInfoSection.classList.remove("show-qa-section");
  qaInfoSection.classList.add("hide-qa-section");

  sendedNewTopicScreen.classList.remove("show-qa-section");
  sendedNewTopicScreen.classList.add("hide-qa-section");
}

function hideNewTopicCreationSection(){
  newTopicSection.classList.add("hide-qa-section");
  newTopicSection.classList.remove("show-qa-section");

  qaInfoSection.classList.remove("hide-qa-section");
  qaInfoSection.classList.add("show-qa-section");
}

function showSendedNewTopicScreen(){
  sendedNewTopicScreen.classList.add("show-qa-section");
  sendedNewTopicScreen.classList.remove("hide-qa-section");

  newTopicSection.classList.remove("show-qa-section");
  newTopicSection.classList.add("hide-qa-section");
}

createTopicButton.addEventListener("click", () =>{
  if (newTopicSection.classList.contains("hide-qa-section")){
    showNewTopicCreationSection();
  } else{
    hideNewTopicCreationSection();
  }
})

sendNewTopicButton.addEventListener("click", () =>{
  if (sendedNewTopicScreen.classList.contains("hide-qa-section")){
    showSendedNewTopicScreen();
  }
})

sendedScreenCreateNewTopicButton.addEventListener("click", () =>{
  if (sendedNewTopicScreen.classList.contains("show-qa-section")){
    showNewTopicCreationSection();
  }
})
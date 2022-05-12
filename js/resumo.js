
function showSummaryFullContent(){
    fullContent[0].classList.add("show");
    fullContent[0].classList.remove("hide");
  
    smallText[0].classList.remove("show");
    smallText[0].classList.add("hide");
  }
  
  function hideSummaryFullContent(){
    fullContent[0].classList.add("hide");
    fullContent[0].classList.remove("show");
  
    smallText[0].classList.remove("hide");
    smallText[0].classList.add("show");
  }
  
  summary.addEventListener("click", () =>{
    if (fullContent[0].classList.contains("hide")){
      showSummaryFullContent();
    } else{
      hideSummaryFullContent();
    }
  })
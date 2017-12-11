

document.addEventListener('click', function(event){

   // var divInQuestion = event.target;
  //  console.log(divInQuestion);
    if (event.target.nodeName === 'H1'){
      //  console.log(divInQuestion.nextSibling);
    event.target.nextElementSibling.classList.toggle('newstyle')
    //TOGGLE DAJE TO ZE DOUBLE CLICK DZIALA
   
}
//
})


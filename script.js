

document.addEventListener('click', function(event){

 var liEl = document.querySelectorAll('li');
  console.log(liEl);

    if (event.target.nodeName === 'LI'){

     greenEl = document.querySelector(".green");
     orangeEl = document.querySelector(".orange");
     blueEl = document.querySelector(".blue");
     
     if (greenEl && orangeEl && blueEl){
     greenEl.classList.remove('green');
     orangeEl.classList.remove('orange');
     blueEl.classList.remove('blue');
     }

      var listElement = event.target;
        if (listElement.nextElementSibling && listElement.previousElementSibling){
         listElement.classList.add('green')
         listElement.nextElementSibling.classList.add('blue');
         listElement.previousElementSibling.classList.add('orange')
        }
}

})


var listDiv = document.querySelector('#div1');
var old;


function getLength(){
    listDiv.addEventListener('mousedown', function(event){
        liElement = event.target;
        //parOld = document.querySelector('.old');
        //parOld.innerHTML = '';
        //parOld.classList = '';
        // console.log(parOld);

        var first = document.querySelector('p');
        if (first) {
            old.removeChild(first);
        }
        
        if (event.target = 'li'){
        var par = document.createElement('p');  
        par.innerHTML = event.target.textContent.length;
        liElement.appendChild(par);
        var first = document.querySelector('p');
        //stary do usunięcia htmlu w następnym kliknięciu
        old = event.target;

        }    
    })
}

getLength();
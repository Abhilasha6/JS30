const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
}

function togggleActive(e) { 
    console.log(e.propertyName); 
    //display the peoperties which will change when the panel is active
    if(e.propertyName === 'flex' || e.propertyName==='flex-grow') {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', togggleActive));

 
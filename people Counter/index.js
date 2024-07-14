let count = 0 ;
const incrementButton = document.getElementById('increment-btn');
incrementButton.addEventListener('click',()=>{
       incrementCount();
    } );


const displayCount = document.getElementById('count-el');
function incrementCount(){
    count += 1;
    displayCount.innerHTML = count;
}

const saveButton = document.getElementById('save-btn');
saveButton.addEventListener('click',() =>{
    saveCount();
});

function saveCount(){
    const dash = " - ";
    document.getElementById('previous-count').textContent += count + dash;
    count = 0;
    displayCount.innerHTML = count;
}

let myLeads = [];
let inputEl = document.getElementById('input-el');
const saveBtn = document.getElementById('save-btn');
const deleteBtn = document.getElementById('delete-btn');
const ulEl = document.getElementById('ul-el');
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
const tabBtn = document.getElementById('tab-btn');


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
} else{
    myLeads = []
}


tabBtn.addEventListener('click',() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        myLeads.push(tabs[0].url);
        localStorage.setItem('myLeads', JSON.stringify(myLeads));
        render(myLeads);
   });
})

function render(leads){
    let listItems = '';
    for(let i=0; i < leads.length;i++){
       const  lead = leads[i];
        listItems += `<li> <a href="${lead}" target="_blank"> ${lead}</a> </li>`
    }
    
    ulEl.innerHTML = listItems;
}

saveBtn.addEventListener('click',() => {
    myLeads.push(inputValue.value); 
    inputEl.value = '';
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    render(myLeads);
});

deleteBtn.addEventListener('dblclick',() => {
    localStorage.clear();
    myLeads = []
    render(myLeads)
});


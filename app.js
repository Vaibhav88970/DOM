document.addEventListener('DOMContentLoaded'),function(){
    const list=document.querySelector('#movie-list ul');
    const forms=document.forms;
    //delete movie
    list.addEventListener('Click',(Event)=>{
        if(Event.AT_TARGET.className=='delete'){
            const li=Event.AT_TARGET.parentElement;
            list.parentNode.removeChild(li);
        }
     })
    
    //add movie
        const addForm=forms['add-movie'];
        addForm.addEventListener('Submit', function(e){
            e.preventDefault();
        })
    //creating elements
       const value=addForm.querySelector('input[type="text"]').value;
       const li=docu.createElement('li');
       const movieName=document.createElement('span');
       const deleteBtn=document.createElement('span');
    //add text content
       movieName.textContent=value;
       deleteBtn.textContent='delete';
    //add classes
       movieName.classList.add('Name');
       deleteBtn.classList.add('delete');
    //append to DOM
       li.appendChild(movieName);
       li.appendChild(deleteBtn);
       list.appendChild(li);   
}
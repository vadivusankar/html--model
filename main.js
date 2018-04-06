//get modal element
var modal = document.getElementById( 'simpleModal');
//get open modal button
var modalBtn = document.getElementById('modalBtn');
//close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];


//Listen for  open click
modalBtn.addEventListener('click',openModal);
//listen for close button
closeBtn.addEventListener('click',closeModal);
//Listen for outside click
window.addEventListener('click',outsideClick);

//Function to open modal
function openModal(){
    modal.style.display = 'block';
}

//Function to close modal
function closeModal(){
    modal.style.display ='none';
}

//Function for outside click
function outsideClick(e){
    if(e.target ==modal){
         modal.style.display = 'none';
    }
}
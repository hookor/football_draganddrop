const card = document.querySelector('#card');
const dropZone = document.querySelector('#drop-zone');

dropZone.addEventListener('dragstart', (event) => {console.log(event);})

dropZone.addEventListener('dragover', (e) => {
 e.preventDefault(); 
})

dropZone.addEventListener('drop', (e) => {
  dropZone.prepend(card);
})
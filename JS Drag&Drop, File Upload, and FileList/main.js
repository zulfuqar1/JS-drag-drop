const columns = document.querySelectorAll('.column');
const drags = document.querySelectorAll('.drag');

columns.forEach(column => {
  column.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  
  column.addEventListener('drop', (e) => {
    const drag = document.querySelector('.drag.dragging');
    e.currentTarget.appendChild(drag);
  });
});


drags.forEach(drag => {
  drag.addEventListener('dragstart',(e) => {

    e.currentTarget.classList.add('dragging');
  });
  
  drag.addEventListener('dragend',(e) => {
    e.currentTarget.classList.remove('dragging');
  });
});

droppable.addEventListener('drop', (e) => {
    drag.preventDefault();
    const data = e.dataTransfer.getData('.drag.dragging');
    const drag = document.getElementById(data);
    droppable.appendChild(drag);
});
document.addEventListener('DOMContentLoaded', () => {
  //console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleForm);

  
});

  const handleForm = function(event){
  event.preventDefault();
  const newReadingListItem = document.createElement('li');
  newReadingListItem.textContent = `Title: ${event.target.title.value} 
  Author: ${event.target.author.value}
  Category: ${event.target.category.value}
  `
  const list = document.querySelector('ul');   
  list.appendChild(newReadingListItem);
  document.getElementById("new-item-form").reset();

};





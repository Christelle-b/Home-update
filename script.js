var animals, links, item;


animals = ['Article on Cameroon', 'Quick video history ', '10 Best Cities in Cameroon to visit'];
links = ['https://www.thoughtco.com/brief-history-of-cameroon-43616', 'https://www.youtube.com/watch?v=PoRIGAkm6sQ', 'https://youtu.be/RibJ5hWPMyQ'];
let element_list = document.getElementById('list');
animals.forEach((item) => {
  let new_li = document.createElement('li');
  let new_a = document.createElement('a');
  new_a.setAttribute("href", links.shift());
  new_a.setAttribute("target", "_blank");
  new_a.innerText = item;

  new_li.appendChild(new_a);

  element_list.appendChild(new_li);
});



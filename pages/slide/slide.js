const slider = document.querySelector('.slider');

if (!slider) {
  console.error('No slider element found');
}

function activate(e) {
  const items = document.querySelectorAll('.item');
  if (items.length === 0) {
    console.error('No item elements found');
    return;
  }

  if (e.target.matches('.next')) {
    slider.append(items[0]);
  } else if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]);
  }
}

document.addEventListener('click', activate);

setInterval(() => {
  activate({ target: document.querySelector('.next') });
}, 5000);

const renderGift = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop());

  const response = await fetch('/issues');
  const data = await response.json();

  const giftContent = document.getElementById('gift-content');

  let gift;

  gift = data.find(gift => gift.id === requestedID);

  if (gift) {
    document.getElementById('image').src = gift.image_url; // Use gift.image_url
    document.getElementById('name').textContent = gift.name;
    document.getElementById('description').textContent = gift.description;
    document.getElementById('mainCause').textContent = 'Main Cause: ' + gift.main_cause;
    document.getElementById('mainSolution').textContent = 'Main Solution: ' + gift.main_solution;
    document.title = `UnEarthed - ${gift.name}`;
  } else {
    const message = document.createElement('h2');
    message.textContent = 'No Gifts Available 😞';
    giftContent.appendChild(message);
  }
};

renderGift();
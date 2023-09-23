const renderGifts = async () => {
  const response = await fetch('/issues');
  const data = await response.json();

  const mainContent = document.getElementById('main-content');

  if (data) {
    data.map(gift => {
      const card = document.createElement('div');
      card.classList.add('card');

      const topContainer = document.createElement('div');
      topContainer.classList.add('top-container');
      topContainer.style.backgroundImage = `url(${gift.image_url})`; // Use gift.image_url

      const bottomContainer = document.createElement('div');
      bottomContainer.classList.add('bottom-container');

      const name = document.createElement('h3');
      name.textContent = gift.name;
      bottomContainer.appendChild(name);

      const description = document.createElement('p');
      description.textContent = gift.description;
      bottomContainer.appendChild(description);

      const readMoreLink = document.createElement('a');
      readMoreLink.textContent = 'Read More >';
      readMoreLink.setAttribute('role', 'button');
      readMoreLink.href = `/issues/${gift.id}`;
      bottomContainer.appendChild(readMoreLink);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement('h2');
    message.textContent = 'No Gifts Available 😞';
    mainContent.appendChild(message);
  }
};

const requestedUrl = window.location.href.split('/').pop();

if (requestedUrl) {
  window.location.href = '../404.html';
} else {
  renderGifts();
}
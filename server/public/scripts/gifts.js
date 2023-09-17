const renderGifts = async () => {
    fetch("http://localhost:5173/gifts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Check if the data is not empty and is valid JSON
    if (data && typeof data === "object") {
      renderGifts(data);
    } else {
      console.error("Invalid JSON data received:", data);
    }
  })
  .catch((error) => {
    console.error("Error fetching or processing data:", error);
  });
    const response = await fetch('/gifts')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')
    if (data) {
        data.map(gift => {
            const card = document.createElement('div')
            card.classList.add('card')
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')
            topContainer.style.backgroundImage = `url(${gift.image})`
            const name = document.createElement('h3')
            name.textContent = gift.name
            bottomContainer.appendChild(name)
            const pricePoint = document.createElement('p')
            pricePoint.textContent = 'Price: ' + gift.pricePoint
            bottomContainer.appendChild(pricePoint)
            const audience = document.createElement('p')
            audience.textContent = 'Great For: ' + gift.audience
            bottomContainer.appendChild(audience)
            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/gifts/${gift.id}`
            bottomContainer.appendChild(link)
            card.appendChild(topContainer)
            card.appendChild(bottomContainer)
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available 😞'
        mainContent.appendChild(message)
    }
}

renderGifts()
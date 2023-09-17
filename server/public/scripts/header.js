const header = document.querySelector('header')
const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerLogo = document.createElement("img");
// Set the src attribute
headerLogo.src = "logo.png"; // Replace "logo.png" with the actual path to your image\

const headerTitle = document.createElement("h1");
// Set the text content of the h1 element
headerTitle.textContent = "UnEarthed";

headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerButton = document.createElement('Home')
headerButton.textContent = 'Home'
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

headerRight.appendChild(headerButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.appendChild(headerContainer)



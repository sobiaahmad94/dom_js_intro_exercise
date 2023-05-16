

document.addEventListener('DOMContentLoaded', () => {
    // querySelector is a CSS selector
    // grabbing the h1 tag using querySelector
    const title = document.querySelector('h1')
    console.log('title', title)
    title.textContent = 'Catch dreams, not nightmares :)'

  // Use document.querySelector to access the paragraph with the ID 'welcome-paragraph' from the DOM.
    const welcomeParagraph = document.querySelector('#welcome-paragraph')
    console.log(welcomeParagraph)
    console.dir(welcomeParagraph)
    //console.dir() displays an interactive list of the properties of the specified JavaScript object

    // grabbing the lis
    const allLis = document.querySelectorAll('li')
    console.log(allLis)

    const redListItem = document.querySelector('li.red')
    redListItem.textContent = 'REDDDDD!'

    // refers to the .bold class in the CSS file
    redListItem.classList.add('bold')

    // make the thing
    const newListItem = document.createElement('li')
    newListItem.textContent = 'Purple'
    // add the class purple
    newListItem.classList.add('purple')
    console.log(newListItem)

    // append to its parent
    const list = document.querySelector('ul')
    list.appendChild(newListItem)
})
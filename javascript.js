// Use JavaScript to obtain a reference to the first article header and change its text with textContent property to 
// "Welcome the {insert your name here} blog"

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to 
// "article__header important".

let firstHeader = document.querySelector('.article__header')
firstHeader.textContent = 'Welcome to the Austin Gorman blog'

let allHeaders = document.querySelectorAll('.article__header')

for(i = 0; i < allHeaders.length; i++) {
    allHeaders[i].classList = 'article__header important'
}

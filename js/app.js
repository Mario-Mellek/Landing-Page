/* Defining global variables:

-Scroll to top button.
-HTML sections.
-The navigation list.
-List items.
*/

const topButton = document.querySelector('.top');
const sections= document.getElementsByTagName('section');
const list= document.getElementById('navbar__list');
const li= document.getElementsByTagName('li');



/*Creating the navbar by looping through the HTML sections:

-Creating a listItem for each section and storing its value.
-Getting the value of the section's data attribute using .getAttribute and storing its value. 
reference>>(HTML data-* Attributes) (https://www.w3schools.com/tags/att_global_data.asp)
-Getting the value of the ID using the same method mentioned above.
-constructing the listItem using .innerHTML with the fetched information and it's CSS class.
-appending listItem to the list defined globally.
*/

for (const section of sections){
    const listItem = document.createElement('li');
    const navName = section.getAttribute('data-nav');
    const navLink= section.getAttribute('id');
    listItem.innerHTML=`<a class="menu__link" href="#${navLink}"> ${navName} </a>`;
    list.appendChild(listItem);
}



/* The function defined below checks the vertical axis of the document being scrolled to.
-Conditional (ternary) operator adding the class ('visible') to the variable 'topButton' defined globally when pageYOffset is greater than 300 pixels.
-The function will be invoked later when a scroll event listener is added to the document.
*/

function buttonVisibility() {
    window.pageYOffset > 300 ?
        topButton.classList.add('visible')
        : topButton.classList.remove('visible')
}



/* Adding an event listener to the document so that upon scrolling the anonymous function will be called along with the function above:

-It calls the nested function defined above.
-It loops through the variable sections defined globally using a for loop to implement the getBoundingClientRect() method and store the returning value in the variable 'position'.
reference>> https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
the method returns a DOMRect object with top, right, bottom, and left properties with values that change every time the scrolling position changes.
since our sections are spanning across the page, right and left won't be useful, hence, we can only use top and bottom to highlight the section in the viewport. 
-Using a conditional statement to check if the position.top value is both less than 400 and more than -350 pixels. 
position.top allows us to access the value of the property using Dot notation 
depending on the condition, the active class in the CSS gets added or removed to the element using Element.classList.
reference>>https://developer.mozilla.org/en-US/docs/Web/API/Element/classList.
-I also created another CSS class 'active' for the list items in the navigation bar, so that the highlighted section in the page will be also highlighted in the bar.
*/

document.addEventListener('scroll', function(){
buttonVisibility();
for (let i=0; i< sections.length;i++){
     const position= sections[i].getBoundingClientRect();
    if ((position.top < 400) && (position.top > -350 )) {
        sections[i].classList.add('your-active-class');
       li[i].classList.add('active'); 
    } else {sections[i].classList.remove('your-active-class');
    li[i].classList.remove('active');}
}})



/*
Added an event listener to the globally defined variable 'topButton' so that upon clicking, the anonymous function will be called.
The function uses the Window.scrollTo() method to smoothly scroll to the top of the page.
reference>> https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
*/

topButton.addEventListener('click', function(){
    window.scrollTo({top:0, behavior:'smooth'});
})




/*smoothScroll
The function defined and called below is saving a NodeList in the variable 'scrollableLinks' 
representing a list of the document's elements that match the specified group of selectors '.menu__link' which are the anchor tags.
and then looping through the saved variable since it's a Nodelist. 
I set a function with the parameter 'anchor' that is listening for click events to run an anonymous function.
Upon clicking, the anonymous function is fired to do the following:
-it prevents the default scroll behavior of HTML anchor tags by using event.preventDefault since the event is defined in the function's parameters.
-then it fetches the anchor's href attribute (that we just prevented its default) to use Element.scrollIntoView() instead.
reference>> https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView.
We can simply just set the .scrollOntoView's behavior to smooth, other options are also available for vertical alignment and horizontal alignment as mentioned in the reference.
*/ 

function smoothScroll() {
    const scrollableLinks = list.querySelectorAll('.menu__link');
    scrollableLinks.forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: "smooth", block: "end", inline: "nearest"
            });
        });
    }
    );
}

smoothScroll();



/* Responsive navButton
-After creating the button in the HTML file (line 17), and the classes 'nav-button' and 'open' (CSS line 284).
-defined a new variable 'navButton' to save the selection of the button element using document.querySelector()
added an event listener to toggle the class 'open' upon clicking the hamburger menu by using Element.classList.toggle.
*/

const navButton= document.querySelector('.nav-button');
navButton.addEventListener('click', function(){
    list.classList.toggle('open');
})







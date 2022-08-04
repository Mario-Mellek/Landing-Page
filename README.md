# Responsive landing page project.
### Description.
- The page successfully renders a home page with clear design and functionality when index.html is loaded in the browser.
- The page contains by default 4 sections.
- The page gets dynamically updated with new sections being added or removed in the HTML.   
- The page is responsive across different screen sizes.

# Features
## Main features:
#### All features are usable across modern desktop, tablet, and phone browsers.
- There are at least 4 sections.
- the navigation bar is dynamically created according to the sections of the page as an unordered list using `Document.createElement()`method.
- The section being viewed in the viewport gets highlighted and animated using `.getBoundingClientRect()` built-in function.
- Selecting an item from the navigation menu smooth scrolls to the corresponding section in the page using the `Element.scrollIntoView()` method.
- The page has a smooth scrolling behavior using JavaScript.

## Secondary features:
- The Navigation bar items are being highlighted while scrolling depending on the current section in the viewport.
- The Scroll to top button is visible on the lower right upon scrolling down the upper section of the page using the The `scrollTo()` method. This is also set to a smooth scrolling behavior.
- The navigation bar shrinks into a hamburger menu on devices with screens thar are 700 Pixels or less.
  The hamburger menu button toggles the menu upon clicking using `Element.classList.toggle`.

#### Outline.
Responsive multi section landing page project for Udacity. 


# UDACITY---Landing-Page

See the [Live Preview](https://zh-betina.github.io/UDACITY---Landing-Page/)
Used: JavaScript, CSS(grid, flexbox), HTML

## About project:

Landing page project for **Front End Developer Nanodegree** program
of **Udacity**. The main focus put on navigation functionality
built with JavaScript.

## The objectives (not optional):

* Navigation is built dynamically as an unordered list.
* It should be clear which section is being viewed while scrolling through the page.
* When clicking an item from the navigation menu, the link should scroll to the appropriate section.

### Suggested features (optional):

* - [ ] Hide fixed navigation bar while not scrolling.
* - [x] Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.
* - [x] Update/change the design/content.(Both html as well as css files were created from scratch).
* - [ ] Make sections collapsible.

## Dynamic Navigation

This functionality is based on number of sections as well as their *h2 innerText*. The content of *h2* is not displayed on the website but for every new section to be created, it is important to follow the rules:

* Every new section requires a class *"section"* as well as an id as presented below with the next following number. For now these sections
with id are included:
*"section0"*, *"section1"*, *"section2"*, *"section3"*.
* Each section must contain the corresponding *h2* header.
The navigation links text is based on those.

**IMPORTANT:** The CSS styling is not included for new sections. It is necessary
to add necessary styling to corresponding id's in the main *styles.css* file.

## Still to be improved/issues:

- [ ] The CSS file might be restructured in the future to keep possible generally
applicable basic *section* styling.
- [ ] Disappearing navigation bar turned out to be a challenging task.
After having tried different ways using *setTimeout()*, this optional
functionality stays not included for the time being but possibly
going to be approached again in the close future.
- [ ] There are display issues on the native browser of the *MiPro9* smartphone.

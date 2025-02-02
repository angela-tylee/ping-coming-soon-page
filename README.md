# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Ping coming soon page solution](#frontend-mentor---ping-coming-soon-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

<img width="1438" alt="image" src="https://github.com/angela-tylee/ping-coming-soon-page/assets/145020731/4cbfc0f2-2bdb-4045-8e1b-0e9549732cdd">
<img width="508" alt="image" src="https://github.com/angela-tylee/ping-coming-soon-page/assets/145020731/93b6711c-23ba-4160-99ed-4650ba920613">

### Links

- Solution URL: https://github.com/angela-tylee/ping-coming-soon-page
- Live Site URL: https://angela-tylee.github.io/ping-coming-soon-page/

## My process

### Built with

- HTML / CSS / JavaScript

### What I learned

- JavaScript
  - listen to the window's width with `resize` event so that the error message can switch smoothly between desktop and mobile mode .

```js
function showError() {
  emailInput.classList.add('error-state');
  if (mediaQuery.matches) {
    emailErrorMessageMobile.style.display = 'block';
    emailErrorMessage.style.display = 'none';

  } else {
    emailErrorMessageMobile.style.display = 'none';
    emailErrorMessage.style.display = 'block';
  }
}

function handleViewportChange() {
  if (!isValid) {
    showError();
  }
}

window.addEventListener('resize', handleViewportChange);

handleViewportChange();
```

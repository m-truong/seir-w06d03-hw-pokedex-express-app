[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Pokedex

![](https://imgur.com/oxGPnND.png)

Your mission is to be the very best, like no one ever was, at making a Pokémon manager (a Pokédex).

#### Learning Objectives

- Full CRUD App

#### Prerequisites

- JavaScript
- Node / JSX
- HTML / CSS

---

## Getting Started

All you are given is a pokemon.js file that has all the raw data for 151 Pokémon (it's over 50,000 lines of code). **You can render this as JSON in your browser. If you decide to check it out in your text editor, don't click on or open this file unless you are prepared to wait a minute or so for it to load. It is a huge file.**

It is up to you how you build your app, in what order you want to do things, what kind of design flow your app will have, where you put your delete button, etc, and what parts of the Pokémon data your pages will display.

There are a few requirements to keep in mind:

### MVP (Minimum Viable Product)

Your app should:

- Display a bunch of Pokémon images on the index with links to their show pages
- Have separate show pages for each Pokémon
- Have the ability to add a new Pokémon
- Have the ability to edit existing Pokémon
- Have the ability to delete Pokémon
- Style the app!

### Setting up

1. Work inside the given `pokedex` folder in today's homework directory

1. Your app should follow the MVC format of models, views, and controllers (these are your routes for now).

1. However, note you don't actually need a controllers folder for now since all your routes will be in your `server.js` file (You'll learn how to move them soon!)

### Routes 

Your app should use RESTful routes:

- Index
  - GET `/pokemon`<br>
- Show
  - GET `/pokemon/:id`<br>
- New
  - GET `/pokemon/new`<br>
- Edit
  - GET `/pokemon/:id/edit`<br>
- Create
  - POST `/pokemon`<br>
- Update
  - PUT `/pokemon/:id`<br>
- Destroy
  - DELETE `/pokemon/:id`<br>
  
### Need a jumpstart? 

<details><summary><strong>Some server.js starter code to get you started</strong></summary>

Make sure you understand each part of this code if you follow it. 

![server.js starter code](https://i.imgur.com/3UFie6C.png)

</details>

## Data 

### Notes on the Pokémon data and what to display

The `pokemon.js` file is massive and there is a ton of data to parse through. You need not display all of it on your pages. On your index page, you can just render the images.

Here are suggestions for what to display on your Pokémon's show page:

- The pokemon's name
- The image of the pokemon
- An unordered list of the Pokemon's types (eg. water, poison, etc).
- The pokemon's stats for HP, ATTACK, and DEFENSE.

## Style Your App

Styling is required. Try and make your app look and act nicely with static assets (set up a public folder and add some css, js)! Portfolio quality styling is recommended, but basic styling will be accepted if you're maxing out on your 4hrs per night. Leave a note in your git issue if this is the case. 

### Need some style inspiration?
These are screenshots from what other students have done to their Pokedex:

<details>
<summary>Example 1</summary>
	
![](https://imgur.com/MZ361IP.png)

![](https://imgur.com/65HTgw1.png)
</details>

<details>
<summary>Example 2</summary>

![](https://imgur.com/XsaaJ2x.png)

![](https://imgur.com/zppz3ev.png)
</details>

<details>
<summary>Example 3</summary>

![](https://imgur.com/ZRFfwgR.png)

![](https://imgur.com/gEOi0KX.png)
</details>

## Commits

The order of your commits does not matter, but refer back to the MVP to make sure that you're meeting all of the requirements. Make your commits **as you complete the work**, not all at once in the end! Some sample commits can be found below.

<details><summary><strong>Sample commits</strong>:</summary>

<hr>
** Commit your work.** <br>
"Server is working and displays a plain index page"
<hr>


<hr>
** Commit your work.** <br>
"Displays a bunch of Pokémon images on the index".
<hr>

<hr>
** Commit your work.** <br>
"Has separate show pages for each Pokémon".
<hr>

<hr>
** Commit your work.** <br>
"Has the ability to add a new Pokémon".
<hr>

<hr>
** Commit your work.** <br>
"Has the ability to edit existing Pokémon".
<hr>

<hr>
** Commit your work.** <br>
"Has the ability to delete Pokémon".
<hr>

<hr>
** Commit your work.** <br>
"The app uses RESTful routing, all seven RESTful routes".
<hr>

<hr>
** Commit your work.** <br>
"View templates are complete".
<hr>

<hr>
** Commit your work.** <br>
"Static assets included (CSS) and styled app".
<hr>

</details>

## Recommendations
- Before getting started with styling, create a wireframe! 
  - Consider starting your CSS with some defaults if you want full control over your design: <br/>
  ```css
   * { 
      margin: 0; 
      padding: 0; 
      box-sizing: border-box; 
      border: 1px solid gold; 
     }
  ```

## Deliverables

- A Pokedex app that meets all the MVP requirements outlined in this markdown. 

## Technical Requirements
	
- Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong
- Your app MUST have some styling! 

 
---

*Copyright 2020, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*

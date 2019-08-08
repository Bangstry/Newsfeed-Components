


let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
function menuComp(arr){
  const menu1 = document.createElement("div");
  menu1.classList.add("menu");

  const menuList = document.createElement("ul");
  menu1.appendChild(menuList);

  arr.forEach( item => {
    const menuItem = document.createElement("li");
    menuItem.textContent = item;
    menuList.appendChild(menuItem);
  })

  return menu1;
}
window.addEventListener("load" , () => {
const menuBtn = document.querySelector("img.menu-button");
const menu2 = menuComp(menuItems);


menuBtn.addEventListener("click", e => {
  menu2.classList.toggle("menu--open");
  
})

const menuHeader = document.querySelector("body")
menuHeader.appendChild(menu2);
})
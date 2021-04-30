/* 
 * Enables the hamburger menu functionality in the navbar.
*/
function enableMobileMenu() 
{
    let menu = document.getElementsByTagName("nav")[0];

    if(menu.className == "navigation")
    {
        menu.className += " responsive";
    }
    else
    {
        menu.className = "navigation";
    }
}
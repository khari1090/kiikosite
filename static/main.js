function myFunction(){
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav"){
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

  var myNav = document.getElementById('myTopnav');
  window.onscroll = function() {
      "use strict";
      if (document.body.scrollTop >= 200 ) {
          myNav.classList.add(".nav-colored");
          myNav.classList.remove(".nav-transparent");
          console.log('white');
      }
      else {
          myNav.classList.add(".nav-transparent");
          myNav.classList.remove(".nav-colored");
          console.log('trans');
      }
  };
}

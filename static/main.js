function myFunction(){
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav"){
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

  window.onscroll = function scroll(e) {
    var vertical_position = 0;
    if (pageYOffset)//usual
      vertical_position = pageYOffset;
    else if (document.documentElement.clientHeight)//ie
      vertical_position = document.documentElement.scrollTop;
    else if (document.body)//ie quirks
      vertical_position = document.body.scrollTop;
  console.log( vertical_position);
    var your_div = document.getElementById('img-hero');
    your_div.style.top = (vertical_position + 20) + 'px';//200 is arbitrary.. just to show you could now position it how you want
  }

function myFunction() {
    var x = document.getElementById('my-nav');
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
}

function mycart(e) {
  
  let child1 = e.childNodes[1];
  let child2 = child1.nextElementSibling;
  e.style.display = 'block';
  child1.style.display = 'none';
  child2.style.display = 'flex';
  child2.style.backgroundColor = '#2980B9'
}
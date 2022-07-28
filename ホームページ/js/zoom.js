const image1 = document.getElementById("photo");
let stat = false;
function func1() {
    if(stat) {
      image1.classList.add('off');
      image1.classList.remove('on');
    } else {
      image1.classList.add('on');
      image1.classList.remove('off');
    }
    stat = !stat;
  }
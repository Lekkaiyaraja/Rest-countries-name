
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "http://www.example.org/example.txt");
  req.send();
  req.onload = fuction (){
    console.log(this.response);
  };
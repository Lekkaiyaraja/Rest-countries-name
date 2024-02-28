// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const req = new XMLHttpRequest();

// req.open("GET", "https://restcountries.com/v3.1/all");
// req.send();
// req.onload = function () {
//   if(req.status>=200 && req.status<300){ 
//     var data=JSON.parse(req.response);
//     console.log(data);
//   }

// }
req.open("GET","https://restcountries.com/v3.1/all")
req.send()


req.onload=function(){
    if(req.status>=200 && req.status<300){
      // console.log(req.responseText)
      var data=JSON.parse(req.responseText);
         
			console.log(data)
 
     }
}

$(document).ready(function() {
  var enteredsentence=prompt("Enter a sentence");
  console.log(enteredsentence);

var capitalize1andlast=function(x)
{
  var a = enteredsentence.length;
  return a;
};
var b=capitalize1andlast(enteredsentence);
//alert(b);

firstchar=enteredsentence.charAt(0);
//alert(firstchar);
lastchar=enteredsentence.charAt(b-1);

var newstring=firstchar.concat(lastchar);
//alert(newstring);

alert(newstring.toUpperCase());

});

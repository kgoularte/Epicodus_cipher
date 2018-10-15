$(document).ready(function() {
  var enteredsentence=prompt("Enter a sentence");
  console.log(enteredsentence);

var capitalize1andlast=function(x)
{
  var a = enteredsentence.length;
  return a;
};

var b=capitalize1andlast(enteredsentence);
alert(b);
firstchar=enteredsentence.charAt(0);
alert(firstchar);
lastchar=enteredsentence.charAt(b-1);
var newstr=firstchar.concat(lastchar);
var newstring=(newstr.toUpperCase());
alert(newstring);
console.log(newstring);




var reverse=function(x)
{
  temp=newstring.split('');
//fn1op=newstring.reverse();
temp1=temp.reverse();
fn1op=temp1.join('');

return fn1op;
};

var newstring1=reverse(newstring);
alert(newstring1);

});

import _ from "lodash";
import j from "jquery";
import foo from "./foo"
import print from "./print"

function component() {
  var element = j("<div></div>")

  // Lodash, currently included via a script, is required for this line to work
  element.html(_.join(['Hi', 'webpack'], ' '));

  return element.get(0);
}

document.body.appendChild(component());
console.log(foo);
console.log(foo())
console.log(print())
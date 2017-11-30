function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};


const testString = "<div>I own a {{animal}}.</div>";
// In order to change "animal" to whatever you want without manually having to do it, you add double curly brackets
const testContext = {animal: "dog", age: 7};
// {} are objects, [] are arrays
function replaceString(string, key, value){
  const searchTerm = "{{"+key+"}}";
  return string.replace(searchTerm, value);
// "searchTerm" searches for "animal"
}
function processTemplate(template, context) {
Object.keys(context).forEach(function(key){
  template = replaceString(template, key, context[key]);
});
return template;
}

function getTemplate(template, context) {
  // taking an HTML object to prepend or append
  return $(processTemplate(template, context));
  //wrapping anything in jquery will turn it into HTML
}

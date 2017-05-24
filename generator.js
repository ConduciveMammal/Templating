var agent = document.getElementById('sub');
agent.addEventListener('click',function(){
    "use strict";
    var tag = document.abdg.htag.value ;
    // created the element, should have been lazy and left it
// this takes the value from the radio input and creates a H1,H2,H3 based ...   
    var header = document.createElement(tag);
	var sku = document.createElement('small'); 
    
// gets the text added to the first text input; assigns to the created tag    
    header.innerHTML =  document.getElementById('prodName').value  ;
	sku.innerHTML =  document.getElementById('prodSKU').value  ;
// gets content from the text area    
 var content = document.getElementById('abdg').value;   
// create a P tag to hold that content
    var content_body = document.createElement('p');
// push the content into the created tag    
    content_body.innerHTML = content;
// these should be a single assignment per, concat the newly created 
// objects.
// push the newly created tags to the results- same in last 2 statements
//  use  += to avoid overwriting (adding to )   
    document.getElementById('output').innerHTML = header.outerHTML,sku.outerHTML;
    document.getElementById('result').innerHTML = header.outerHTML,sku.outerHTML;

    
   document.getElementById('output').innerHTML += content_body.outerHTML;
    document.getElementById('result').innerHTML += content_body.outerHTML;   
   
});
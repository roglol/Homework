
function generateHTML(count, tagName, parentSelector, content, childCount, childElement){
    for(i = 0; i < count; i++){
    let parentselector = document.querySelector(parentSelector);
    let tagname = document.createElement(tagName);
    parentselector.appendChild(tagname);
    
    

   if(childCount){
       for(k = 0; k < childCount; k++){
         let textnode = document.createTextNode(content);
         let childelement = document.createElement(childElement);
         tagname.appendChild(childelement);
         childelement.appendChild(textnode);
       }
   } else {
   let textcontent = document.createTextNode(content);
   tagname.appendChild(textnode);
   }
    }
};

generateHTML(3, 'div', "#container" ,"Georgia", 2, "p");

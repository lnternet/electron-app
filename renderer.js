var fs = require('fs');

function listFolderContent() {
  const defaultPath = './';
  var path = document.querySelector('#path_input').value;

  //Read directory - either path specified in the input field or default path.
  fs.readdir(path ? path : defaultPath, function(error, items) {
    if(error) {
      alert('Unable to list content of directory!');
    } else {
      //Get the folder content list element
      var contentBox = document.querySelector('#path_list');
      //Clear previous values
      contentBox.innerHTML = "";
      //Add all items received from readdir function.
      items.forEach(function addItemToList(item) {
        //Create new empty list item element
        var newItem = document.createElement('li');
        //Add the item to the new empty list item element
        newItem.appendChild(document.createTextNode(item));
        //Add the element to the folder content list element
        contentBox.appendChild(newItem);
      });
    }
  });
}


document.getElementById("webpage").innerHTML='<object style="height:inherit; width:100%;" type="text/html" data="example_document.html" ></object>';


document.querySelector('#path_button').addEventListener('click', listFolderContent);

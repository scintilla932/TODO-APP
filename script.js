const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let count = 0

function newTodo() {
    const css = classNames

    const listItem = document.createElement('li')
    
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.classList.add(css.TODO_CHECKBOX)
    
    const textspan = document.createElement('span')
    const text = prompt("Enter the next item todo.")
    textspan.innerText = text
    textspan.classList.add(css.TODO_TEXT)
    
    listItem.append(checkbox, textspan)
    list.append(listItem) 
    listItem.classList.add(css.TODO_ITEM)

    //Setting the number of list items
    itemCountSpan.innerText = Number(itemCountSpan.innerText) +  1
    uncheckedCountSpan.innerText = Number(uncheckedCountSpan.innerText) + 1

    
    //Setting unchecked items
    let check = list.getElementsByTagName('input')
    for (let i=0, len=check.length; i<len; i++) {
      if ( check[i].type === 'checkbox' ) {
            check[i].onclick = function() {
             if(this.checked){
              uncheckedCountSpan.innerText = Number(uncheckedCountSpan.innerText) - 1
             }
             if(!this.checked){
               uncheckedCountSpan.innerText = Number(uncheckedCountSpan.innerText) + 1
             }
          }
      }
    }

    //Deleting an item
    const deleteButton = document.createElement('button')
    deleteButton.classList.add(css.TODO_DELETE)
    
    deleteButton.innerText = 'Delete'
    listItem.append(deleteButton)

    deleteButton.onclick = function() {
      listItem.setAttribute("id", "removethis")
      var item = document.getElementById("removethis");
      item.parentNode.removeChild(item); 
      itemCountSpan.innerText = Number(itemCountSpan.innerText) - 1
      if(!checkbox.checked){
      uncheckedCountSpan.innerText = Number(uncheckedCountSpan.innerText) - 1
      }
    }

}

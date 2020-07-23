const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

var i=0
var comp=0

function newTodo() {
  
  var task = prompt("enter your task","your task");
  if (task == null || task == "")
  {
     window.alert("no new task");
  }
  else
  {
  	 //update counts
  	  i=i+1
      itemCountSpan.innerHTML=i
      comp=comp+1
      uncheckedCountSpan.innerHTML=comp
     //create new li
     var item = document.createElement("LI")
     item.className = "line"
     item.innerHTML=task
     
     //create checkbox
     var check= document.createElement("input")
     check.type="checkbox"
     check.className="child check"
     check.onclick=function(){
	   if(this.checked == false)
	    {
          comp++
          this.parentElement.style.textDecoration = "none"
	    }
	   else 
	    {
	      this.parentElement.style.textDecoration = "line-through"
		  comp--
	    }
	 uncheckedCountSpan.innerHTML=comp
     }


    //append checkbox to item 
     item.appendChild(check)

    //create the delete button
     var del=document.createElement("button")
     del.innerHTML='delete'
     del.className="child del"
   
     del.onclick=function (){
  	
  	 var parent = this.parentElement
  	 list.removeChild(parent)
  	 if(this.previousSibling.checked == false){
  	 comp--
  	 uncheckedCountSpan.innerHTML=comp
  	 }
  	 i--
  	 itemCountSpan.innerHTML=i

     }

    //append del to item
     item.appendChild(del)

     list.appendChild(item)



  
 
  }

}



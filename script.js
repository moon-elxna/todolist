function addTask(){
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    if(input == " "){
        alert("Please add some text")
    }

    else {

        const li = document.createElement("li");

     li.innerHTML = `
    <label>
      <input type="checkbox">
      <span>${task}</span>
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
    `;

  listContainer.appendChild(li);
  inputBox.value = "";
    }
}
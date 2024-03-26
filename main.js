//function that will toggle visibility of target, when initial is clicked
const toggleHideOnClick = function (initial, target) {
  const initialElement = document.querySelector(initial);
  const targetElement = document.querySelector(target);

  initialElement.addEventListener(`click`, () => {
    targetElement.hidden = !targetElement.hidden;

    //reset the input fields when the "+" button is hidden
    if (targetElement.hidden) {
      document.querySelector(`.todo-input`).value = ``;
      document.querySelector(`.todo-time-input`).value = ``;
    }
  });
};

//function to create a new checkbox item
const createNewCheckboxItem = function (todoInputValue, timeInputValue) {
  if (!todoInputValue) {
    alert(`Please input a task!`);
  } else if (!timeInputValue) {
    alert(`Please input a time!`);
  } else {
    //create checkbox item container element
    const newCheckboxItem = document.createElement(`div`);
    newCheckboxItem.className = `checkbox-item`;

    //create checkbox input element
    const checkboxInput = document.createElement(`input`);
    checkboxInput.type = `checkbox`;
    checkboxInput.className = `toggle`;
    checkboxInput.id = `check${
      document.querySelectorAll(`.checkbox-item`).length + 1
    }`; //create a unique id

    //create label element
    const label = document.createElement(`label`);
    label.htmlFor = checkboxInput.id;

    //create container div inside the label
    const containerDiv = document.createElement(`div`);
    containerDiv.className = `container`;

    //create todo-text "p" element
    const todoText = document.createElement(`p`);
    //set the text content to the input value
    todoText.textContent = todoInputValue;

    //create time-text "p" element
    const timeText = document.createElement(`p`);
    timeText.className = `time-text`;
    //set the text content to the input value
    timeText.textContent = timeInputValue;

    ///APPENDING ORDER  .checkbox-item > input + label > .container > p + .time-text

    //append input and label as children of .checkbox-item
    newCheckboxItem.appendChild(checkboxInput);
    newCheckboxItem.appendChild(label);

    //append container div as child of label
    label.appendChild(containerDiv);

    //append todo-text and time-text as children of .container
    containerDiv.appendChild(todoText);
    containerDiv.appendChild(timeText);

    //create the remove icon
    const removeIcon = document.createElement(`i`);
    removeIcon.className = `fa-solid fa-xmark checkbox-icon`;

    //append remove icon as child of .checkbox-item
    newCheckboxItem.appendChild(removeIcon);

    return newCheckboxItem;
  }
};

// Function that will remove the entire checkbox-item if its remove icon is clicked
const removeCheckboxItem = function (removeIcon) {
  // Get the parent checkbox-item of the remove icon that was clicked
  const checkboxItem = removeIcon.closest(".checkbox-item");

  // Check if a parent checkbox-item was found
  if (checkboxItem) {
    // Remove the checkbox-item from the DOM
    checkboxItem.remove();
  }
};

//click event listener for "Add Item" INPUT button
document
  .querySelector(`.todo-input-btn`)
  .addEventListener(`click`, function () {
    const todoInputValue = document.querySelector(`.todo-input`).value;
    const timeInputValue = document.querySelector(`.todo-time-input`).value;
    const newCheckboxItem = createNewCheckboxItem(
      todoInputValue,
      timeInputValue
    );

    //append .checkbox-item (and all of its children) as a child of .todo-list-section
    document.querySelector(`.todo-list-section`).appendChild(newCheckboxItem);
  });

// Click event listener for remove icon
document.addEventListener("click", function (event) {
  // Check if the clicked element is an remove icon
  if (event.target.classList.contains("checkbox-icon")) {
    // Call the removeCheckboxItem function passing the clicked remove icon
    removeCheckboxItem(event.target);
  }
});

//hide the search input initially
document.querySelector(`.search`).hidden = true;

//toggle visibility of search input when the big "+" button is clicked
toggleHideOnClick(`.todo-add-btn`, `.search`);

//toggle visibility of search input when the "Add Item" INPUT button is clicked
toggleHideOnClick(`.todo-input-btn`, `.search`);

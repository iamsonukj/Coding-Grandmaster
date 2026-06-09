var form = document.getElementById("myForm");
var inputField = document.getElementById("myInput");
var listContainer = document.getElementById("myItem");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    addTask(inputField.value);
});

function addTask(taskText) {
    var listItem = `
        <li>
            ${taskText}
            <button onclick="removeTask(this)">Delete</button>
        </li>
    `;

    listContainer.insertAdjacentHTML("beforeend", listItem);
    inputField.value = "";
    inputField.focus();
}

function removeTask(buttonElement) {
    buttonElement.parentElement.remove();
}
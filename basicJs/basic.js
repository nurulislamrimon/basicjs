// -----------------------------Events practice
var defaultButton = document.querySelector("#defaultButton");
defaultButton.onclick = defaultFunction;
function defaultFunction() {
    document.body.style.backgroundColor = "white";
}

function blueFunction() {
    document.body.style.backgroundColor = "blue";
}

var greenButton = document.getElementById("greenButton");

// anonymous Function
greenButton.onclick = function () {
    document.body.style.backgroundColor = "green";
}

// addEventListener
const pinkButton = document.getElementById("pinkButton");
pinkButton.addEventListener("click", pinkFunction);
function pinkFunction() {
    document.body.style.backgroundColor = "pink";
}

// addEventListener using anonymous function
const oliveButton = document.getElementById("oliveButton");
oliveButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "olive";
})
// addEventListener without variable diclaring using anonymous function
document.getElementById("grayButton").addEventListener("click", function () {
    document.body.style.backgroundColor = "gray";
})

// clicking method 
const textAddingButton = document.getElementById("textAddingButton");
textAddingButton.addEventListener("click", function () {
    document.getElementById("para").innerText = "Hello! Are you finding me?";
});

const textChangingButton = document.getElementById("textChangingButton");
textChangingButton.addEventListener("click", function () {
    document.getElementById("para").innerText = "Text is Changed";
})

// input value writer

// Add button event handler
const textButton = document.getElementById("textButton");
textButton.addEventListener("click", writeInputValue);

function writeInputValue() {

    // get comment
    const inputText = document.getElementById("inputText");
    // create comment paragraph
    const newComment = document.createElement("p");
    newComment.innerText = inputText.value;
    //append the comment
    const commentContainer = document.getElementById("commentContainer");
    commentContainer.appendChild(newComment);
    // clearing input
    inputText.value = "";
}
// keypress listener

const disabledButton = document.getElementById("disabledButton");
disabledButton.addEventListener("click", function () {
    const deletedText = document.getElementById("deletedText");
    deletedText.style.display = "none";
});

const authenInput = document.getElementById("authenInput");
authenInput.addEventListener("keyup", authenFunction);

function authenFunction() {
    if (authenInput.value == "delete") {
        disabledButton.removeAttribute("disabled");
    }
    else {
        disabledButton.setAttribute("disabled", true);
    };
}

// bubble
const bubbleMainContainer = document.getElementById("bubbleMainContainer")
bubbleMainContainer.addEventListener("click", function (event) {
    let newBubbleText = document.createElement("p");
    newBubbleText.innerText = "I am the Grand Father";
    event.target.parentNode.appendChild(newBubbleText);

});

const bubbleSecondContainer = document.getElementById("bubbleSecondContainer");
bubbleSecondContainer.addEventListener("click", function (event) {
    let newBubbleText = document.createElement("p");
    newBubbleText.innerText = "I am the Father";
    event.target.parentNode.appendChild(newBubbleText);
});

const bubbleBtns = document.getElementsByClassName("bubble-btn");
for (const bubbleBtn of bubbleBtns) {
    bubbleBtn.addEventListener("click", function (event) {
        let newBubbleText = document.createElement("p");
        newBubbleText.innerText = "I am the Child";
        event.target.parentNode.appendChild(newBubbleText);
    });
}

// delegate
const delegateItems = document.getElementsByClassName("delegateItem");
for (const delegateItem of delegateItems) {
    delegateItem.addEventListener("click", function (event) {
        event.target.parentNode.removeChild(event.target);
    });
}
const delegateAddItemBtn = document.getElementById("delegateAddItemBtn");
delegateAddItemBtn.addEventListener("click", function (event) {
    const delegateNewItem = document.createElement("li");
    delegateNewItem.innerText = "New item";
    delegateNewItem.classList.add("delegateItem");
    let delegateContainer = document.getElementById("delegateContainer");
    delegateContainer.appendChild(delegateNewItem);
    for (const delegateItem of delegateItems) {
        delegateItem.addEventListener("click", function (event) {
            event.target.parentNode.removeChild(event.target);
        });
    }
});

// form creation
document.getElementById("user-info-submit-btn").addEventListener("click", function (event) {
    // user input
    const userEmail = document.getElementById("user-email").value;
    const userPassword = document.getElementById("user-password").value;
    // if function
    if (userEmail == "nurulislamrimon@gmail.com" && userPassword == 123) {
        window.location.href = "sites/yourPage.html";
    }
    else if (userEmail == "") {
        const newWarning = document.createElement("p");
        newWarning.innerText = "Invalid Email";
        const parentForWarning = document.getElementById("parentForWarningOfEmailInput");
        newWarning.style.color = "red";
        parentForWarning.appendChild(newWarning);
    }
    else if (userPassword == "") {
        const newWarning = document.createElement("p");
        newWarning.innerText = "Invalid Password";
        const parentForWarning = document.getElementById("parentForWarningOfPasswordInput");
        newWarning.style.color = "red";
        parentForWarning.appendChild(newWarning);
    }
    else {
        const newWarning = document.createElement("p");
        newWarning.innerText = "Invalid Credential. Please provide a valid one";
        const parentForWarning = document.getElementById("parentForWarning");
        newWarning.style.color = "red";
        parentForWarning.appendChild(newWarning);
    }
});
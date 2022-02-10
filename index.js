const takeUsername = function () {
    let usernameNode = document.getElementById("username");
    let string = "";
    string = usernameNode.value;
    return string;
}

let names = [];

const createList = function() {
    let namesList = document.createElement("div");
    namesList.innerText = takeUsername();
    names.push(takeUsername());
    
}


const createTeams = function () {
    
}


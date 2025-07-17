// Expanded database with more users
var database = [
    { username: "victor", password: "23uiuef" },
    { username: "david", password: "abc123" },
    { username: "onyx", password: "password1" },
    { username: "victoria", password: "baddie456" },
    { username: "emma", password: "dubai123" }
];

// Newsfeed remains the same
var newsfeed = [
    { username: "david", timeline: "life in dubai" },
    { username: "onyx", timeline: "have not seen my dad for a long time" },
    { username: "victoria", timeline: "the real baddie" }
];

// Prompting the user for login details
var usernamePrompt = prompt("username?");
var passwordPrompt = prompt("password?");

// Updated SignIn function with loop to check all database entries
function SignIn(username, password) {
    var userFound = false;

    for (var i = 0; i < database.length; i++) {
        if (username === database[i].username && password === database[i].password) {
            userFound = true;
            break;
        }
    }

    if (userFound) {
        console.log("Login successful!");
        console.log(newsfeed);
    } else {
        alert("Wrong details");
    }
}

// Call the function
SignIn(usernamePrompt, passwordPrompt);
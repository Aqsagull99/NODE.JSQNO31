// QNO:31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.



let users: string[] = ["John", "Doe", "Alice", "Bob"];


if (users.length > 0) {
    console.log("Current users:");
    for (let user of users) {
        console.log(user);
    }
} else {
    console.log("We need to find some users!");
}


users = [];

if (users.length > 0) {
    console.log("Current users:");
    for (let user of users) {
        console.log(user);
    }
} else {
    console.log("We need to find some users!");
}

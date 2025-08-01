function shortcut(str1, str2) {
    if (str1 === "" || str2 === "") {
        return ""; // Return empty string if any input is empty
    }
    return str1[0] + str2[0]; // Return the first letters of both strings
}

// Example usage
const firstString = prompt("Enter first string:");
const secondString = prompt("Enter second string:");
const result = shortcut(firstString, secondString);
if (result) {
    alert(result); // Show alert only if result is not empty
}
// 3.	Check If a String is Valid JSON 

/* var str={"name":"mani","branch":"cse","id":"599"};
console.log(isvalid(str)); */

function isvalid(text) {
    // If input is already an object or array, it's valid JSON
    if (typeof text === 'object' && text !== null) {
        console.log(text);
        console.log('its already a object form');
        return true;
    }

    // Convert input to string for further checks
    var st = String(text);

    // Check if input is enclosed with {} or []
    if ((st.startsWith('{') && st.endsWith('}')) || (st.startsWith('[') && st.endsWith(']'))) {
        try {
            // Parse the string to check if it's valid JSON
            const parsed = JSON.parse(st);

            // Ensure the parsed result is either an object or array and not null
            return parsed !== null && (typeof parsed === 'object' || Array.isArray(parsed));
        } catch (err) {
            // If parsing fails, return false
            return false;
        }
    }

    // If the format doesn't match JSON-like strings, return false
    return false;
}

var str = {"name":"mani","branch":"cse","id":599};
var s={};
console.log(isvalid(s)); // This will return true

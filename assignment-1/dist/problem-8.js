"use strict";
{
    const person = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };
    function validateKeys(obj, keys) {
        for (let key of keys) {
            if (!(key in obj)) {
                return false;
            }
        }
        return true;
    }
    console.log(validateKeys(person, ["name", "age"]));
}

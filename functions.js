// Contact list in array

const contacts = [
    {
        name: "Palli",
        email: "palli@gmail.com"
    },
    {
        name: "Kalli",
        email: "kalli@gmail.com"
    },
    {
        name: "Samúel",
        email: "elli@hotmail.com"
    },
    {
        name: "Hrólfur",
        email: "hrolfur@simnet.is"
    },
    {
        name: "Jónatan",
        email: "jonatan@gmail.com",
        phoneNumber: "58-12345",
        company: "Dominos"
    },
]


// --- 1. add( contact ) - Adds a new contact to the list ---

// start by creating the function
const add = (contact)=>{
    const sveppur = contacts.findIndex(checkAge);

    function checkAge(contactSearch) {
        return contact.email === contactSearch.email
    }
    if (contact.name === undefined || contact.email === undefined){
        console.log("Missing fields")
    }
    else if (sveppur === -1){
        console.log("was added")
        contacts.push(contact)
    }
    else {
        console.log("Duplicate was found")
    }
    
    console.log(sveppur)
}
add(
    {
        name: "Sunna",
        email: "sunna@gmail.com",
        phoneNumber: "888",
        company: "Pizzan"
    }
)
console.log(contacts)

/*Outputs
Error
“Duplicate was found” (email address is the unique identifier)
“Missing fields” if name or email are not present in the passed in object
Success
“ was added”*/






//  ---  2. remove( email ) - Remove corresponding contact / Email address is the unique identifier  ---
const remove = (email)=>{
    const sveppur = contacts.findIndex(checkEmail);

    function checkEmail(contactSearch) {
        return email === contactSearch.email
    }
    if (sveppur === -1){
        console.log("Contact not found")
    }
    else {
        console.log(" was removed")
        contacts.splice(sveppur, 1);
    }
}
remove("sunna@gmail.com")
console.log(contacts)


/*Parameters
email: Email address
Outputs
Error
“Contact not found”
Success
“ was removed”*/






//  ---  3. edit( email, newData ) - Update/Increment the corresponding contact’s data with the information that’s passed in / Email address is the unique identifier  ---
const edit = (email, newData)=>{
    const sveppur = contacts.findIndex(checkEmail);

    function checkEmail(contactSearch) {
        return email === contactSearch.email
    }
    if (sveppur === -1){
        console.log("Contact not found")
    }
    else {
        console.log("was updated");
        contacts[sveppur]= newData;
    }
}
edit("jonatan@gmail.com",     {
    email: "jonsi@gmail.com"
})
console.log(contacts);


/*Parameters
email: Email address
newData: object representing the new information for the contact
Outputs
Error
“Contact not found”
Success
“ was updated”*/






//  ---  4. get( email ) - Output information for the corresponding contact / Email address is the unique identifier  ---
const get = (email) => {
    const sveppur = contacts.findIndex(checkEmail);

    function checkEmail(contactSearch) {
        return email === contactSearch.email
    }
    if (sveppur === 0){
        console.log("Contact not found")
    }
    else {
        console.log("Contact list information: ")
        console.log(contacts);
    }
}
get(contacts)

console.log(contacts)


/*Parameters
email: Email address
Outputs
Error
“Contact not found”
Success
“Name:
Email:
Phone number:
Company: ”*/





// ---  5. listAll() - List all contacts available in the contact list  ---
const listAll = (listAllContacts) => {
    console.log(listAllContacts);
}
listAll(contacts)

/*Parameters
None
Output example
“Anna Valsdóttir ana@tskoli.is, Jón Jónsson jon@tskoli.is, Hildur Eriksdóttir hildur@tskoli.is”*/





//  --- 6. clear() - Remove all contacts from the list  ---
const clearContacts = new Set();
clearContacts.add(1);


clearContacts.clear();

console.log(clearContacts.size);
console.log("The contact list was cleared");


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear
/*Parameters
None
Output
“The contact list was cleared”*/
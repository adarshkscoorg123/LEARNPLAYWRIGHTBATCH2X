
// Private Fields (#) — Hidden Data
// PUBIC Fields 

class Credentials {
    #apiKey; // Private variables are not allowed to be used outside the class 
    user;


    constructor(user, key) {
        this.user = user; // public
        this.#apiKey = key;
    }
    // Custom made method by us
    pramodgetAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("admin", "secret_key_1234");
console.log(cred.user);
console.log(cred.apiKey); //undefined
// console.log(cred.#apiKey); //error

const token = cred.pramodgetAuthHeader();
console.log(token); //Bearer secret_key_1234

// note: We cannot access private variables(#apiKey) outside the class
//       but we can access private variables through methods
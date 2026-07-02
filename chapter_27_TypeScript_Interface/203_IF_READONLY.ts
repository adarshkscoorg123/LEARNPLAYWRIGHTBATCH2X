
interface APIReponse {
    readonly statusCode: number;
    body: string;
    headers?: object;
    responTime?: number
}

// readOnly
// Readonly - can't modify the readonly

// ? - optional

let response: APIReponse = {
    statusCode: 200,
    body: '{"user": "admin"}',
};


console.log("Status:", response.statusCode);
console.log("Body:", response.body);
console.log("Headers:", response.headers);


// response.statusCode = 404; // not possible to change statuscode since it is readonly
response.body = "dasdadas"; // can be changed since it is not readonly

console.log("Body:", response.body);

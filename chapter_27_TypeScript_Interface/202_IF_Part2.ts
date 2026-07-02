
interface APIResponse {
    body: string;
    headers?: object; // optional(?)
    responseTime?: number; // optional(?)
}

let response1: APIResponse = {
    body: 'Hi',
};

let response2: APIResponse = {
    body: 'Hi',
    headers: {},
    responseTime: 400
}
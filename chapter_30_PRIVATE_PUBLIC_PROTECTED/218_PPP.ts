class APIClient {
    public baseURL: string;
    private apiKey: string;
    protected timeout: number;

    constructor(baseURL: string, apiKey: string, timeout: number) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
        this.timeout = timeout;
    }

    private getAuthHeader(): string {
        return "Bearer " + this.apiKey;
    }

    public sendRequest(path: string): void {
        console.log("GET " + this.baseURL + path);
        console.log("Auth: " + this.getAuthHeader());
        console.log("Timeout: " + this.timeout + "ms");
    }
}

class UserAPIClient extends APIClient {

    public name: string;
    constructor(name: string, baseURL: string, apiKey: string, timeout: number) {
        // 3. Call super() first with required parent arguments
        super(baseURL, apiKey, timeout);
        this.name = name;
    }
    getUsers(): void {
        console.log("Fetching users (timeout: " + this.timeout + "ms)");
        console.log("URL: " + this.baseURL + "/users");
    }
}

let client = new APIClient("https://api.staging.com", "key_secret_123", 5000);
console.log("Base URL:", client.baseURL);
//console.log("Base URL:", client.timeout); cannot access since it is protected
//onsole.log("Base URL:", client.apiKey);  cannot access since it is private
client.sendRequest("/health");

// 4. Instantiate with all required parameters
let client_2 = new UserAPIClient("Adarsh", "https://example.com", "secret_key", 5000);
client_2.getUsers();




export enum Routes {
    BASE_URL = 'http://localhost:8080',
    
    // Histories
    HISTORY_LIST = 'http://localhost:8080/histories',
    HISTORY_ADD = 'http://localhost:8080/histories/add',
    HISTORY_EDIT = 'http://localhost:8080/histories/edit',
    HISTORY_RETRIEVE = 'http://localhost:8080/histories/', // ADD '{ID}' at call
    HISTORY_DELETE = 'http://localhost:8080/histories/delete/', // ADD '{ID}' at call
}
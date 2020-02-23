// ROUTES
enum Base {
    MGQ_SERVER = 'http://localhost:8080',
}

export enum History {
    get = '/history',
    put = '/history',
    post = '/history',
    delete = '/history',
    list = '/histories',
}


export class Router {
    protected BASE = Base;
    protected HISTORY = History;
}
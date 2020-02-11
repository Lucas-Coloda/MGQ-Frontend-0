enum Base {
    MGQ_SERVER = 'http://localhost:8080',
}
enum History {
    get = '/history',
    put = '/history',
    post = '/history',
    path = '/history',
    delete = '/history',
    list = '/histories',
}


export class Router {
    BASE = Base;
    HISTORY = History;
}
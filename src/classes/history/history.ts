export class History {
    constructor(id?: Number, author?: Number, title?: String, resume?: String) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.resume = resume;
    }
    id: Number;
    author: Number;
    title: String;
    resume: String
}

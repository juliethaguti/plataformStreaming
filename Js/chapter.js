class Chapter {

    constructor( name, year, image, video ) {
        this._id;
        this._name = name;
        this._numberReproductions = 0;
        this._year = year; 
        this._image = image;
        this._video = video;

    }

    get name() {
        return this._name;
    }

    set name( value ) {
        this._name = value;
    }

    get year() {
        return this._year;
    }

    set year( value ) {
        this._year = value;
    }

    get image() {
        return this._image;
    }

    set image( value ) {
        this._image = value;
    }

    get video() {
        return this._video;
    }

    set video( value ) {
        this._video = value;
    }

    getId() {
        return this.id;
    }
}
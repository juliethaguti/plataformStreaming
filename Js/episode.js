let video = require('./Js/video');

class Episode {

    constructor( name, year, image, video, episodeNumber, description ) {
        this._id;
        this._name = name;
        this._numberReproductions = 0;
        this._year = year; 
        this._image = image;
        this._video = video;
        this._episode_number = episodeNumber;
        this_description = description;

    }

    get id() {
        return this._id;
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

    static getNewId(listEpisodes = []) {

        let newId = -1;

        if (listEpisodes != null) {
            
            listEpisodes.forEach(element => {
                
                if (element._id > newId) {
                    
                    newId = element._id;
                }
            });
            
        }
        else {

            newId = 0;
        }
        
        return newId + 1;
    }
    
    addEpisode( arrayEpisodes ) {
        
        if ( arrayEpisodes ) {
            
            arrayEpisodes.push( this );
            
        } else {

            arrayEpisodes = [];
            arrayEpisodes.push(this);

        }
        
        return arrayEpisodes;
    }

    modifyDescription( arrayVideos, description ) {
        
        let retorno = [];

        arrayVideos.forEach(element => {
            
            if ( element == this ) {
                
                element.descriptio = description;
                retorno.push( element );

            } 
            else {
                retorno.push( element );
                }
            });
        
        
        return retorno;
    }

    modifyName( arrayUsers, name) {
        
        let retorno = [];

        arrayUsers.forEach(element => {
            
            if (element == this) {
                
                element.name = name;
                retorno.push( element );

            } 
            else {
                retorno.push( element );
                }
            });
        
        
        return retorno;
            
    }

    modifyYear( arrayMovies , year ) {
        
        let retorno = [];

        arrayMovies.forEach(element => {
            
            if (element == this) {
                
                element.year = year;
                retorno.push( element );

            } 
            else {
                retorno.push( element );
                }
            });
        
        
        return retorno;
    }

    deleteEpisode( arrayEpisodes ) {
        
        let retorno = [];
        
        arrayEpisodes.forEach(element => {
                if ( element == this ) {
                
                //Colocar en una lista de usuarios borrados
            } 
            else {
                retorno.push( element );
                }
            });
        
        
        return retorno;

    }

}

module.exports = Episode;

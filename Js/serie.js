class Serie{
    
    constructor( description, image, numberEpisodes, numberSeasons) {
        this._id;
        this._description = description;
        this._image;
        this._numberReproductions = 0;
        this._listVideos = []; 
        this._numberEpisodes = numberEpisodes;
        this._numberSeasons = numberSeasons;

    }

    get id() {
        return this._id;
    }

    get description() {
        return this._description;
    }

    set description( value ) {
        this._description = value;
    }

    get numberEpisodes() {
        return this._numberEpisodes;
    }

    set numberEpisodes( value ) {
        this._numberEpisodes = value;
    }

    get numberSeasons() {
        return this._numberSeasons;
    }

    set numberSeasons( value ) {
        this._numberSeasons = value;
    }

    static getNewId( listSeries = [] ) {

        let newId = -1;

        if (listSeries != null) {
            
            listSeries.forEach(element => {
                
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
    
    addSerie( arraySeries ) {
        let newArraySeries = [];
        return newArraySeries;
    }

    showSerie( id, arraySeries ) {

    }

    modifySerie(id, arraySeries ) {
        
    }
    
    deleteSerie( id, arraySeries ) {
        
    }

    playVideo( id ) {
        
    }
}
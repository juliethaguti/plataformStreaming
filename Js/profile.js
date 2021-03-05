
class Profile {
    
    constructor( name, idUser, id ) {
        this._id = id;
        this._idUser = idUser
        this._name = name;
        this._image = "../assets/images/image02.png";
        this._videosViewed = [];

    }

    get idUser() {
        return this._idUser;
    }

    set idUser( value ) {
        this._idUser = value;
    }

    get name() {
        return this._name;
    }

    set name( value ) {
        this.name = value;
    }

    get id() {
        return this._id;
    }

    static getNewId( listProfiles = [] ) {

        let newId = -1;

        if ( listProfiles != null ) {
            
            listProfiles.forEach( element => {
            console.log(element._id);    
                
                if ( element._id > newId ) {
                    
                    newId = element._id;
                }
            });
            
        }
        else {

            newId = 0;
        }
        
        return newId + 1 ;
    }

    addProfile( listProfiles ) {
        
        if ( listProfiles ) {
            listProfiles.push( this );
            
        } else {

            listProfiles = [];
            listProfiles.push( this );

        }
        
        return listProfiles;
    }

    showProfile( name, arrayProfiles ) {

    }

    modifyProfile( arrayProfiles , name ) {
        
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
    
    deleteProfile( arrayProfiles ) {
        let retorno = [];
        
        arrayProfiles.forEach(element => {
            
            if (element == this) {
                
                //Colocar en una lista de usuarios borrados
            } 
            else {
                retorno.push( element );
                }
            });
        
        
        return retorno;
    }
    

    static getArrayProfiles( profile, ...otherData ) {

        let listProfiles = [];
        
        listProfiles.push( profile );

        otherData.forEach(element => {

            listProfiles.push( element );
        
        });

        return listProfiles;
    }
}

export { Profile };

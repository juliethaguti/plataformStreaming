import { User } from './user.js';
import { Profile } from './profile.js';

//window.addEventListener("load", function () {
    
    let button = document.getElementById( "boton" );
    button.addEventListener( "click", addProfiles );

    
    
function addProfiles() {

    let profileDefault;
    let profile1;
    let profile2;
    let profile3;
    let newId;
    let arrayProfiles;
    let newList;

    let UsuarioIngresado = localStorage.getItem( "UsuarioIngresado" );
    let listlocal = localStorage.getItem( "gente" );
    let listProfiles = localStorage.getItem( "profiles" );
    let profiles = JSON.parse( listProfiles );
    let users = JSON.parse( listlocal ); 
    let email = JSON.parse( UsuarioIngresado );

    let nameProfileDefault = document.getElementById( "nameProfileDefault" ).value;
    let nameProfile1 = document.getElementById( "nameProfile1" ).value;
    let nameProfile2 = document.getElementById( "nameProfile2" ).value;
    let nameProfile3 = document.getElementById( "nameProfile3" ).value;
    let userAux = Object.create( User );

    userAux = User.findUser( users, email );

    if ( nameProfileDefault != "" ) {
        
        newId = Profile.getNewId( profiles );
        profileDefault = new Profile( nameProfileDefault, userAux.id, newId);
        arrayProfiles = profileDefault.addProfile( profiles );
    localStorage.setItem( "profileDefault" , JSON.stringify( profileDefault ));


        if ( nameProfile1 != "" ) {

            newId++;
            profile1 = new Profile( nameProfile1, userAux.id, newId );
            arrayProfiles = profile1.addProfile( profiles );

            if ( nameProfile2 != "" ) {
                
                newId ++;
                profile2 = new Profile( nameProfile2, userAux.id, newId );
                arrayProfiles = profile2.addProfile( profiles );
                
                if ( nameProfile3 != "" ) {

                    newId ++;
                    profile3 = new Profile( nameProfile3, userAux.id, newId );
                    arrayProfiles = Profile.getArrayProfiles( profileDefault, profile1, profile2, profile3 );
                    console.log(arrayProfiles);
                    newList = userAux.addProfiles( users, arrayProfiles );
                    arrayProfiles = profile3.addProfile( profiles );
                    
                }
                else {

                    arrayProfiles = Profile.getArrayProfiles( profileDefault, profile1, profile2 );
                    newList = userAux.addProfiles( users, arrayProfiles );
                    
                }
            } else {

                arrayProfiles = Profile.getArrayProfiles( profileDefault, profile1 );
                newList = userAux.addProfiles( users, arrayProfiles );
            }
        } else {

            arrayProfiles = Profile.getArrayProfiles( profileDefault );console.log(arrayProfiles)
            newList = userAux.addProfiles( users, profileDefault );
        }
                
    }
    else {
        //mandar error al no ingresar nada
    }
            
    let listUsers = JSON.stringify( newList );

    localStorage.setItem( "gente", listUsers ) ;
    localStorage.setItem( "profiles" , JSON.stringify( arrayProfiles ));

    location.href = "./browse.html";

}


    

    
    

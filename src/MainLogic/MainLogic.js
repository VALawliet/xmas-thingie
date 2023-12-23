import React from "react";
import {AppUI} from './../mainComponents/AppUI/AppUI.js'

function MainLogic(){

    const [pageClicked, setPageClicked] = React.useState('');
    const [languageSelected, setLanguageSelected] = React.useState(0);



    //Changing language function...

    function languagePoem(value){

        if(value === 0){

            setLanguageSelected(1);

        }else{

            setLanguageSelected(0)

        }

        console.log(languageSelected);

    }

    return(
        <AppUI pageClicked={pageClicked} setPageClicked={setPageClicked} languageSelected={languageSelected} setLanguageSelected={setLanguageSelected} languagePoem={languagePoem}/>
    )


}

export {MainLogic}
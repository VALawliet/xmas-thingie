import React from "react";
import {AppUI} from './../mainComponents/AppUI/AppUI.js'

function MainLogic(){

    const [pageClicked, setPageClicked] = React.useState(0);
    const [languageSelected, setLanguageSelected] = React.useState(0);
    const [clicked, setClicked] = React.useState(false);



    //Changing language function...

    function languagePoem(value){

        if(value === 0){

            setLanguageSelected(1);
            setClicked(true)


        }else{

            setLanguageSelected(0);
            setClicked(false)

        }

        console.log(languageSelected);

    }

    return(
        <AppUI pageClicked={pageClicked} setPageClicked={setPageClicked} languageSelected={languageSelected} setLanguageSelected={setLanguageSelected} languagePoem={languagePoem} clicked={clicked}/>
    )


}

export {MainLogic}
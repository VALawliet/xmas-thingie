import { Header } from "../Header/Header";



function AppUI({pageClicked, setPageClicked, languageSelected, setLanguageSelected, languagePoem}){


    return(
        <Header languagePoem={languagePoem} languageSelected={languageSelected}/>
    )




}

export {AppUI}
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Words } from "../Words/Words";
import { Edits } from "../Edits/Edits";
import { Songs } from "../Songs/Songs";
import { Footer } from "../Footer/Footer";



function AppUI({pageClicked, setPageClicked, languageSelected, setLanguageSelected, languagePoem}){


    return(
        <>
            <Header languagePoem={languagePoem} languageSelected={languageSelected} setPageClicked={setPageClicked} pageClicked={pageClicked}/>

            {pageClicked === 0 && <Main/>}

            {pageClicked === 1 && <Words/>}

            {pageClicked === 2 && <Edits/>}

            {pageClicked === 3 && <Songs/>}

            <Footer/>
        </>
        

        

    )




}

export {AppUI}
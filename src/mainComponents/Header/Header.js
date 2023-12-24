import './Header.css';
import book from "./../../svg/book-svgrepo-com.svg";
import pencil from "./../../svg/pencil-svgrepo-com.svg";
import play from "./../../svg/play-svgrepo-com.svg";
import music from "./../../svg/song-svgrepo-com.svg";

function Header({languagePoem, languageSelected, pageClicked, setPageClicked}){

    return(
        <header>
            <div className='img_container'>

                <span className='inner'></span>
                <img src="https://i.ibb.co/pPWF0bp/dazai-removebg-preview.png" alt="dazai-removebg-preview" border="0"/>

            </div>
            
            <div className='xmasText'>
                
                <h1 onClick={()=>{
                    languagePoem(languageSelected)
                }}>
                    Merry Christmas!!
                </h1>
                
            </div>

            <ul>
                <li>

                    <button className='mainLink' onClick={()=>{

                        setPageClicked(0)


                    }}>
                        <span>Main</span> <img className= 'book pencil'src={pencil}alt='hi'/>
                    </button>

                </li>


                <li>
                    
                    <button className='mainLink' onClick={()=>{
                        setPageClicked(1)
                    }}>
                        <span>Words</span> <img className= 'book'src={book}alt='hi'/>
                    </button>
                    
                    
                </li>
                <li>
                    <button className='mainLink' onClick={()=>{
                    
                        setPageClicked(2)    

                    }}>
                        <span>Edits</span> <img className= 'book play'src={play}alt='hi'/>
                    </button>
                </li>
                <li>

                    <button className='mainLink' onClick={()=>{
                        setPageClicked(3)
                    }}>
                        <span>Songs</span> <img className= 'book'src={music}alt='hi'/>
                    </button>


                </li>
            </ul>
        </header>
    )


}

export {Header}
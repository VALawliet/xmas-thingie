import './Footer.css';
import instagram from './../../svg/iconmonstr-instagram-11.svg'
import instagram2 from './../../svg/iconmonstr-instagram-12.svg'
import heart from './../../svg/heart-svgrepo-com.svg'

function Footer(){

    return(

        <footer>

            <div className='img_container rotation' onClick={()=>{

                const inner_rotating = document.querySelector('.rotating');
                const legolas = document.querySelector('.legolas');
                const rotation = document.querySelector('.rotation');

                rotation.classList.toggle('container_rotate');
                legolas.classList.toggle('legolas_rotate');
                inner_rotating.classList.toggle('inner_rotating');

            }}
            >
                <span className='inner rotating'></span>
                <img className='legolas' src="https://i.ibb.co/d0JDfLM/ezgif-com-webp-to-png-converter-removebg-preview.png" alt="ezgif-com-webp-to-png-converter-removebg-preview" border="0"_/>
            </div>

            <div className='info_content'>

                <p>I'd like to thank you for giving me such amazing time so far bbg, you're the best</p>
                <h2>&lt;3</h2>

                <div className='instagrams'>
                    <a href='https://www.instagram.com/ursachii.alexandra?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==' target='_blank' rel='noreferrer'>
                        <img src={instagram} alt='alexandra' className='ig'/>
                    </a>
                    
                    <img src = {heart} alt='heart' className='lil_heart'/>

                    <a href='https://www.instagram.com/valawliet.coc' alt = 'law' target='_blank' rel='noreferrer'>
                        <img src={instagram2} alt='law' className='ig'/>
                    </a>
                
                </div>
            </div>

            

           <div className='us'>
                <h2>Literally us</h2>
                <div className='pigs_container'>
                    <img src="https://i.ibb.co/Y2zrMLv/Whats-App-Image-2023-12-25-at-23-54-24.jpg" alt="piggies<3" border="0"/>
                    
                </div>
           </div>
        </footer>

    )

}

export {Footer}
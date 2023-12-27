import './Words.css';
import refresh from './../../svg/refresh-svgrepo-com.svg'
import refresh2 from './../../svg/refresh-svgrepo-com2.svg'

function Words({languagePoem, languageSelected, setLanguageSelected, clicked}){

    
    

    return(
        <main className='mainPage Words'>
            <section className='column1'>
                <h3>Yes, this entire page is me being cringe ok. Get over it</h3>
                <p>I'm gonna try and chill cuz I've already used insane amounts of random css, so this will be a little less exaggerated</p>
                <p>Also, little reminder, I suck at english and stuff so if smth doesn't make any sense, let's just say it was on purpose ok</p>
                <p>This could be us btw if you even want to</p>
                <div className='column_img_container'>
                    <img src="https://i.ibb.co/1rRH4Gh/cats-removebg-preview.png" alt="cats-removebg-preview" border="0"/>
                </div>

                <div className='column_img_container'>

                <img src="https://i.ibb.co/GH06gt4/ezgif-com-loop-count.gif" alt="ezgif-com-loop-count" border="0"/>

                </div>
            </section>

            <section className='middle'>

                <h1>Hallo!!</h1>

                <p>Welp, this part right here will be used to say a couple of words to you. I originally wrote this in spanish and then had to translate it to english, it may not sound that good in english. I'm not the C2 over here ok?</p>
                <p>You can use the button below to switch the language of the text</p>

                <button className='button1' onClick={()=>{

                    const button = document.querySelector('.button1');

                    button.classList.toggle('backwards')

                    languagePoem(languageSelected)
                }}>
                    {(languageSelected === 0 && 'ENG') || (languageSelected === 1 &&'ESP')}

                    <img src={clicked===false? refresh2: refresh} alt='refresh'/>
                </button>

                <div className='letter'>
                    {(languageSelected === 0 && 
                    
                    <>
                        <p>
                            Sinceramente, no sé cómo iniciar este canto de gratitud. Agradezco el tiempo que junto a ti he compartido; cada momento es un tesoro, un brillo a mi lado. Profundamente valoro risas compartidas, chispas de alegría en la oscuridad, momentos inesperados que mi día iluminan con intensidad.

                        </p>

                        <p>

                            Bromas malas y singulares, extrañas pero divina inspiración, llenan de gozo mi existir, como melodía en mi corazón. El tiempo contigo, aunque breve, resuena en mi ser, como llama ardiente que en el silencio brilla, extendiéndose en la eternidad del sentir.
                        </p>

                        <p>


                            Expresar lo que mi corazón anhela, desafío constante, pero me esfuerzo por satisfacer sus demandas, como bailarín en danza. Incierto de tu recepción, mi alma clama en silencio "Te amo", eco que en los vientos resonará cuando tu nombre sea pronunciado. Eres, sin dudas, el regalo más preciado que la vida me ha brindado.

                        </p>
                    </>
                        

                    
                    
                    
                    ) || (languageSelected === 1 &&
                    
                        <>

                            <p>

                                I honestly don't know how to start this song of gratitude. I appreciate the time that I have shared with you; every moment is a treasure, a shine at my side. I deeply value shared laughter, sparks of joy in the darkness, unexpected moments that illuminate my day with intensity.

                            </p>

                            <p>

                                Bad and weird jokes, strange but divine inspiration, fill my existence with joy, like a melody in my heart. The time with you, although brief, resonates in my being, like a burning flame that shines in the silence, extending into the eternity of this feeling.
                            </p>

                            <p>



                                Expressing what my heart longs for, a constant challenge, but I strive to satisfy its demands, like a dancer in a dance. Uncertain of your reception, my soul cries out in silence "I love you", an echo that will resonate in the winds when your name is pronounced. You are, without a doubt, the most precious gift that life has ever given to me.

                            </p>

                        </>
                        

                    )}
                </div>

            </section>

            <section className='column2'>

                <h4>These are all me rn</h4>

                <div className='column_img_container'>
                    <img src="https://i.ibb.co/gJVbX6J/panda-cute.png" alt="panda-cute" border="0"/>
                </div>

                <div className='column_img_container'>

                    <img src="https://i.ibb.co/f9gDZWg/turtle.png" alt="turtle" border="0"/>

                </div>

                <div className='column_img_container'>

                    <img src="https://i.ibb.co/7v35MG9/cute.png" alt="cute" border="0"/>

                </div>

                <div className='column_img_container'>
                    <img src="https://i.ibb.co/crYdxWT/what-Is-Needed-removebg-preview.png" alt="what-Is-Needed-removebg-preview" border="0"/>
                </div>

            </section>
        </main>
    )

}

export {Words}
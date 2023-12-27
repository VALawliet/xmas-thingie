import './Main.css'

function Main(){

    

    return (

        <main className='mainPage'>

            <div className='balls bg'>

                <div className='fix'>
                    <div className='fix_of_fix'>

                        <h1>BALLS</h1>

                    </div>
                    
                </div>
                
                

                <div className='snow'></div>

                <div className='ball'></div>
                <div className='ball'></div>
                <div className='ball'></div>
                <div className='ball'></div>
                <div className='ball'></div>
                <div className='ball'></div>
                <div className='ball'></div>
                <div className='ball'></div>
            </div>


            <section className='column'>
                <h1>Random Column cuz why not</h1>
                <p>This website is gonna be filled with a bunch of random css cuz its cool ok, so you can try and click wtv you want, it may have smth added in there</p>
                <p>Click on this mf</p>

                <div className='gif_container' onClick={()=>{

                    const gif = document.querySelector('.gif_container');

                    gif.classList.toggle('gif_movement')


                }}>

                
                    <img src="https://i.ibb.co/JKTjh9b/santa.gif" alt="santa" border="0" className='santa_gif'/>
                </div>

                <p>Yes, that's just the most random css at its finest</p>

                <p>Here I'll add some extra images to get into the holiday spirit yessir</p>

                <div className='img_container second_one' onClick={()=>{
                    const img = document.querySelector('.second_one');
                    img.classList.toggle('img_movement')

                }}>
                    <img src="https://i.ibb.co/nR4Hzw9/rocking.jpg" alt="rocking" border="0"/>
                </div>

                <div className='img_container2' onClick={()=>{

                    const balls = document.querySelector('.balls');
                    balls.classList.toggle('active')

                }}>
                    <img src="https://i.ibb.co/p1790pF/il-fullxfull-5423254924-rqrw-1-removebg-preview.png" alt="il-fullxfull-5423254924-rqrw-1-removebg-preview" border="0"/>
                    <img src="https://i.ibb.co/pnspsFN/balls-1-1.png" className='george' alt="balls-1-1" border="0"/>
                </div>

                <h2>Gotta be honest, this text is just here to fill some space up bc your viewport is INSANELY big</h2>


            </section>
    
            <article className='introduction'>
                <h1>Hey!!</h1>

                <p>You're probably wondering what's this about. Well, you could say this is a small Christmas present
                    I thought would be nice of me to give to you. It's just a small website I worked a little on. I hope you like it.
                    You can use the buttons on the header above to take a look at the other stuff I put in here. And... That's about it lmao.
                    I'm kinda bad at writing so here's a list of reasons why you're the best:
                </p>

                <h2>Reasons why you're amazinng <span className='yo'>by me :D</span></h2>

                <ul className='reasons'>
                    <li className='reason first'><span className='number'>#1.</span> <p className='p_reason'> You're cute (starting out with em FACTS)</p></li>
                    <li className='reason second'><span className='number'>#2.</span> <p className='p_reason'> I bet you smell good (I have no proof but I'm full of faith)</p></li>
                    <li className='reason third'><span className='number'>#3.</span> <p className='p_reason'> You're actually very funny (don't tell ingrid i said this tho)</p></li>
                    <li className='reason fourth' data-text='Home'><span className='number'>#4.</span> <p className='p_reason'> The minecraft house looks GREAT (when r we playing btw??)</p></li>
                    
                    <li className='reason fifth'>
                        <div className='invis'>
                            <span className='number'>#5.</span> <p className='p_reason'> You put up with a lot of shit like a warrior (even whilst you're crying)</p>    
                        </div>
                    
                    </li>
                    <li className='reason sixth'><span className='number'>#6.</span> <p className='p_reason'> You're basically my english teacher at this point <strong>  (cries in spanish)</strong></p></li>

                    
                </ul>

                <h3 className='ohboi'>It's six reasons bc there's 6 main characters in my little pony.</h3>

                <div className='main_proof_container'>

                    <div className='proof_container'>
                        <h3 className='ohboi'>Had to write it down, but here's my proof:</h3>
                        <div className='proof1'>
                            <img src="https://i.ibb.co/rbXKqj3/1953360-orig-1.jpg" alt="1953360-orig-1" border="0"/>
                        </div>
                    </div>

                    <div className='proof_container'>
                        <h3 className='ohboi'>It's also the number of films related to the Hobbit thingie. Proof:</h3>

                        <div className='proof1'>
                            <img src="https://i.ibb.co/Fb3P2cg/trilogies-1.jpg" alt="trilogies-1" border="0"/>
                        </div>
                    </div>

                </div>

                
                

                

            </article>
            
        </main>

    )

}

export {Main}
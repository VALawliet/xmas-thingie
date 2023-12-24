import './Main.css'

function Main(){

    return (

        <main className='mainPage'>


            <section className='column'>
                testing gif

                <div className='gif_container'>
                    <img src="https://i.ibb.co/JKTjh9b/santa.gif" alt="santa" border="0" className='santa_gif'/>
                </div>
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
                    <li className='reason fourth'><span className='number'>#4.</span> <p className='p_reason'> The minecraft house looks GREAT (when r we playing btw??)</p></li>
                    <li className='reason fifth'><span className='number'>#5.</span> <p className='p_reason'> You put up with a lot of shit like a warrior (even whilst you're crying)</p></li>
                    <li className='reason sixth'><span className='number'>#6.</span> <p className='p_reason'> You're basically my english teacher at this point <strong>  (cries in spanish)</strong></p></li>

                    
                </ul>

                <h3 className='ohboi'>It's six reasons bc there's 6 main characters in my little pony.</h3>
                <h3 className='ohboi'>Here's my proof:</h3>
                <div className='proof1'>
                    <img src="https://i.ibb.co/rbXKqj3/1953360-orig-1.jpg" alt="1953360-orig-1" border="0"/>
                </div>

            </article>
            
        </main>

    )

}

export {Main}
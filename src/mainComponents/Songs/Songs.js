import './Songs.css';

function Songs(){

    return(

        <main className='mainSongs'>
            <h3>I ran out of ways to say hi in other languages so... Hi!!!</h3>
            <p>This page will contain some songs I really like and I'd like to share with you</p>

            <div className='spotiContainer'>

                <iframe title='somos' src="https://open.spotify.com/embed/track/5863OGilEb1h8SN6BJIf2P?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe title='break' src="https://open.spotify.com/embed/track/7IwXsqRgHAdcSVAyRuxMQQ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe title='you' src="https://open.spotify.com/embed/track/5DqdesEfbRyOlSS3Tf6c29?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe title="carino" src="https://open.spotify.com/embed/track/16gJmoOqRt2lKmlXtDpWgH?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe title="until" src="https://open.spotify.com/embed/track/0T5iIrXA4p5GsubkhuBIKV?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

            </div>
        </main>

    )

}

export {Songs}
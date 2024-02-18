function initialize() {
        console.log('Site Criado por @Rafael47 & @Emptyxz47 \n\n By: Shark47')
}
    
initialize();

const entrar = document.getElementById('entrar')
    entrar.addEventListener('click', () => {

        entrar.style.display = 'none'

                document.querySelector('main').style.visibility = 'visible'
                document.querySelector('header').style.visibility = 'visible'

                let audio = document.getElementById('audio');
                audio.volume = '0.2'
                        audio.play();
        });
const textAnim = document.querySelector('h1')

new Typewriter(textAnim, {
    deleteSpeed: 20
})
.changeDelay(65)
.typeString('Moi c\'est Thierry Maignan')
.pauseFor(300)
.typeString('<strong>, Dev Full-stack</strong> !')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span style="color: #E44D26"> HTML</span> !')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color: #264DE4"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #F7DF1E"> Java Script</span> !')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span style="color: #3673a5;"> Pyt</span><span style="color: #ffd342">hon</span> !')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="color: #777BB3"> PHP</span> !')
.pauseFor(1000)
.deleteChars(13)
.typeString('<strong>Bienvenue</strong> !')
.start()


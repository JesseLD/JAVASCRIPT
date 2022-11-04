function dayTime(){
    var msg = document.querySelector(".msg")
    var image = document.querySelector("#imageSrc")
    var time = new Date()
    var now = time.getHours()
    var now1 = 0
    msg.innerHTML=`Agora são ${now1} horas`
    if( now1 > 5 && now1 < 13)
    {
        //manhã
        image.src='media/Manha.png'
        msg.innerHTML=`Agora são ${now1} horas da manhã`
        document.body.style.backgroundColor="#f8fadb"


    }
    else if( now1 > 12 && now1 < 18)
    {
        //tarde
        image.src='media/Tarde.png'
        msg.innerHTML=`Agora são ${now1} horas da tarde`
        document.body.style.backgroundColor="#c1681a"
    }
    else if( now1 > 18 && now1 < 24)
    {
        //noite
        image.src='media/Noite.png'
        msg.innerHTML=`Agora são ${now1} horas da Noite`
        document.body.style.backgroundColor="#373849"
        
    }
    else
    {
        //madrugada
        image.src='media/Madrugada.png'
        msg.innerHTML=`Agora são ${now1} horas da madrugada`
        document.body.style.backgroundColor="#342858"
    }
}
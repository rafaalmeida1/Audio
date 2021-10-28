let musica = document.getElementById("music");

musica.addEventListener('play', playEvento, false);
musica.addEventListener("timeupdate", atualizar, false);

function retroceder(){
    musica.currentTime -= 5;
}

function avancar(){
    musica.currentTime += 5;
}

function diminuirVelocidade(){
    musica.playbackRate -= 0.1;
}

function aumentarVelocidade(){
    musica.playbackRate += 0.1;
}

function play(){
    musica.play();
}

function pause(){
    musica.pause();
}

function stop(){
    musica.pause();
    musica.currentTime = 0;
    pauseToPlay();
}

function up(){
    musica.volume += 0.2;
}

function down(){
    musica.volume -= 0.2;
}

// funções para esconder e mostrar botões

function esconderBotoes(){
    let botoes = document.getElementsByClassName('btn');

    for(let i = 0; i < botoes.length; i++){
        botoes[i].style.visibility = 'hidden';
        botoes[i].style.transition = 'visibility 0.2s';
    }
}

function mostrarBotoes(){
    let botoes = document.getElementsByClassName('btn');

    for(let i = 0; i < botoes.length; i++){
        botoes[i].style.visibility = 'visible';
        botoes[i].style.transition = 'visibility 0.2s';
    }
}

//função para trocar o botão de play para pause e vice e versa

document.getElementById("play").addEventListener("click", function(){
    let play = document.getElementById("play");
    let pause = document.getElementById("pause");
    play.style.display = "none";
    pause.style.display = "inline-block";
    play.innerHTML = pause;
  });
  
  
  function pauseToPlay(){
    let pause = document.getElementById("pause");
    let play = document.getElementById("play");
    pause.style.display = "none";
    play.style.display = "inline-block";
    pause.innerHTML = play;
  }
document.getElementById("pause").addEventListener("click", pauseToPlay);

//função para atualizar barra de progresso

function playEvento(){
    document.getElementById("tempo_atual").innerHTML = secToStr(musica.currentTime);
    document.getElementById("tempo_total").innerHTML = secToStr(musica.duration);

    document.getElementById("barra_progresso").max = audio.duration;
    document.getElementById("barra_progresso").max = audio.currentTime;
}

function atualizar(){
    document.getElementById("tempo_atual").innerHTML = secToStr(musica.currentTime);
    document.getElementById("barra_progresso").value = audio.currentTime;
}

function secToStr(sec_num){
    sec_num = Math.floor(sec_num);
    var horas = Math.floor(sec_num / 3600);
    var minutos = Math.floor((sec_num - (horas * 3600)) / 60);
    var segundos = sec_num - (horas * 3600) - (minutos * 60);

    if(horas < 10) horas = "0"+horas;
    if(minutos < 10) minutos = "0"+minutos;
    if(segundos < 10) segundos = "0"+segundos;

    var tempo = +minutos+':'+segundos;

    return tempo;
}

  
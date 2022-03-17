// código do ator

// ator
var xAtor = 100
var yAtor = 366
var colisao = false
var meusPontos = 0


function mostraAtor (){
    image (imagemDoAtor, xAtor, yAtor, 30, 30)
  }

function movimentaAtor () {
  if (keyIsDown (UP_ARROW)) {
    yAtor -= 3}
  if (keyIsDown (DOWN_ARROW)){
  if (podeSeMover()){
    yAtor += 3}}
  if (keyIsDown (RIGHT_ARROW)){
    xAtor += 3}
  if (keyIsDown (LEFT_ARROW)){
    xAtor -= 3}
}


function verificaColisao () {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (var i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle (xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao) {
      voltaAtorComeco ();
      somDaColisao.play ()
    if (pontosMaiorQueZero()){
      meusPontos -= 1
    }
    }
  }
}


function voltaAtorComeco () {
  yAtor = 366
}


function incluirPontos (){
  textAlign (CENTER)
  textSize (25)
  fill (color(255,0,255))
  text (meusPontos, width /  3, 26)
}

function marcarPonto (){
  if (yAtor < 12) {
    meusPontos +=1;
    somDoPonto.play ();
    voltaAtorComeco ();
  }
}

function pontosMaiorQueZero (){
  return meusPontos > 0
}


function podeSeMover () {
  return yAtor < 366;
}




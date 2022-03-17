// código do carro

// lista carros
var yCarros = [ 40, 95, 148, 210, 270, 318]
var xCarros = [600, 600,600, 600, 600, 600]
var velocidadeCarros = [ 6, 4.3, 2.6, 4, 3.6, 3]
var comprimentoCarro = 50
var alturaCarro = 40


function mostraCarro () {
  for (var i = 0; i < imagemCarros.length; i++){
  image (imagemCarros[i], xCarros[i], yCarros[i] , comprimentoCarro, alturaCarro)}}


function movimentaCarro () {
  for (var i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i]}}

function voltaPosicaoInicialDoCarro () {
  for (var i = 0; i < imagemCarros.length; i++){
  if ( passouTodaATela( xCarros[i])) { xCarros[i] = 600}}
}

function passouTodaATela (xCarro) {
 return xCarro < - 40;
}

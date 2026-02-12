// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
 { text: "Creo que con una canción", time: 18 },
{ text: "La tristeza es más hermosa", time: 19 },
{ text: "Creo que con una palabra", time: 28 },
{ text: "Puedo decir mil cosas", time: 30 },
{ text: "Pero no creo en el circo de la información", time: 39 },
{ text: "Todo decanta en tu amor", time: 45 },
{ text: "Y en mi dolor", time: 51 },
{ text: "Creo que es mejor morir de pie", time: 57 },
{ text: "Que vivir de rodillas", time: 59 },
{ text: "Creo que hoy el viento me alcanzó", time: 67 },
{ text: "El olor de tu mejilla", time: 68 },
{ text: "Creo en mi guitarra", time: 78 },
{ text: "Creo en el sol", time: 79 },
{ text: "Si me cura las heridas", time: 83 },
{ text: "Creo en tu voz", time: 90 },
{ text: "Creo en la vida, en la noche, en tu alma", time: 95 },
{ text: "Y no creo en todo lo demás", time: 100 },
{ text: "Creo en tu estrella en aquella", time: 105 },
{ text: "Que busco en mi sueño mejor", time: 107 },
{ text: "Para poder luchar", time: 110 },

{ text: " ", time: 119 },

{ text: "Creo en esas tarde que viví", time: 149 },
{ text: "Jugando a la pelota", time: 150 },
{ text: "Creo que educar es combatir", time: 159 },
{ text: "Y el silencio no es mi idioma", time: 161 },
{ text: "Creo en tu sonrisa", time: 170 },
{ text: "Creo en mí si te veo hoy", time: 171 },
{ text: "Y me pedís que no me rinda", time: 175 },
{ text: "Sigo por vos", time: 181 },

{ text: "Creo en la lluvia cuando cambia", time: 188 },
{ text: "El olor de mi tierra", time: 190 },
{ text: "Creo en el mar cuando amanece", time: 198 },
{ text: "Abrazándose a las piedras", time: 199 },
{ text: "Creo en los jazmines", time: 208 },
{ text: "Que un dios me bajo esa vez", time: 211 },
{ text: "Para poder conocerte", time: 213 },
{ text: "Como mujer", time: 220 },
{ text: "Creo en la vida, en la noche, en tu alma", time: 226 },
{ text: "Y no creo en todo lo demás", time: 231 },
{ text: "Creo en tu estrella en aquella", time: 233 },
{ text: "Que busco en mi sueño mejor", time: 239 },
{ text: "Para poder luchar", time: 240 },

{ text: " ", time: 248 },

{ text: "Creo en la vida, en la noche, en tu alma", time: 254 },
{ text: "Y no creo en todo lo demás", time: 259 },
{ text: "Creo en tu estrella en aquella", time: 261 },
{ text: "Que busco en mi sueño mejor", time: 267 },
{ text: "Para poder luchar", time: 269 },

{ text: " ", time: 277 },
 
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
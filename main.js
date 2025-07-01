let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Brindo asesoría de mercadotecnia y negocios a emprendedores y empresas.')/**Poner a que me dedico poner algo corto */
  .pauseFor(200)
  .deleteChars(10)
  .start();

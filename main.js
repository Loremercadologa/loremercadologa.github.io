let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Brindo asesoría a negocios y desarrollo proyectos de mercadotecnia para emprendedores y empresas.')/**Poner a que me dedico poner algo corto */
  .pauseFor(200)
  .deleteChars(10)
  .start();


let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Me especializo en asesoría financiera estratégica para empresas, impulsando su expansión y la incorporación de tecnología en sus procesos administrativos y de mercadotecnia. Esto se traduce en una mayor eficiencia, reducción de costos y la maximización de la rentabilidad de su negocio')/**Poner a que me dedico poner algo corto */
  .pauseFor(200)
  .deleteChars(10)
  .start();

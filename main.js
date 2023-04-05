let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#00ddb0;">Estudiante de Mecatrónica área sistemas de manufactura flexible.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

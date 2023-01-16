function carregar() {
  let msg = document.getElementById('msg');
  let img = document.getElementById('imagem');
  let data = new Date();
  let hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas`;
  if (hora >= 6 && hora < 12) {
    img.src = 'img/manha_edited.jpg';
    document.body.style.background = 'lemonchiffon';
  } else if (hora >= 12 && hora < 18) {
    img.src = 'img/tarde_edited.jpg';
    document.body.style.background = 'darkorange';
  } else {
    img.src = 'img/noite_edited.jpg';
    document.body.style.background = 'darkslategray';
  }
}

const inputUsuario = document.querySelector('.entrada-usuario');
const btnEncriptar = document.querySelector('.btn-encriptar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');
//output

const tableroSalida = document.querySelector('.output');

const contenedorMensajes = document.querySelector('.contenedor-msgs');

const btnCopiar = document.querySelector('.btn-copiar');

// botón encriptador
btnEncriptar.addEventListener('click', function (e) {
  e.preventDefault();
  if (inputUsuario.value !== '') {
    if (!tableroSalida.classList.contains('img-hide')) {
      tableroSalida.classList.add('img-hide');
      contenedorMensajes.classList.add('hide-elements');
      btnCopiar.classList.remove('hide-elements');
    }
    let decoDifi = inputUsuario.value;
    let auxiliar = '';
    for (let i = 0; i < decoDifi.length; i++) {
      if (decoDifi[i] === 'e') {
        auxiliar += 'enter';
      } else if (decoDifi[i] === 'i') {
        auxiliar += 'imes';
      } else if (decoDifi[i] === 'a') {
        auxiliar += 'ai';
      } else if (decoDifi[i] === 'o') {
        auxiliar += 'ober';
      } else if (decoDifi[i] === 'u') {
        auxiliar += 'ufat';
      } else {
        auxiliar += decoDifi[i];
      }
    }
    tableroSalida.textContent = auxiliar;
  } else {
    if (tableroSalida.classList.contains('img-hide')) {
      tableroSalida.classList.remove('img-hide');
      tableroSalida.textContent = '';
      contenedorMensajes.classList.remove('hide-elements');
      btnCopiar.classList.add('hide-elements');
    }
  }
});

//btn desencriptar

btnDesencriptar.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputUsuario.value !== '') {
    if (!tableroSalida.classList.contains('img-hide')) {
      tableroSalida.classList.add('img-hide');
      contenedorMensajes.classList.add('hide-elements');
      btnCopiar.classList.remove('hide-elements');
    }
    let coDifi = inputUsuario.value;
    let auxiliar = '';
    for (let i = 0; i < coDifi.length; i++) {
      let auxiliar2 = '';
      if (coDifi[i] === 'e') {
        for (let j = i; j <= i + 4; j++) {
          auxiliar2 += coDifi[j];
        }
        if (auxiliar2 === 'enter') {
          i += 4;
        }
        auxiliar += 'e';
      } else if (coDifi[i] === 'i') {
        for (let j = i; j <= i + 3; j++) {
          auxiliar2 += coDifi[j];
        }
        if (auxiliar2 === 'imes') {
          i += 3;
        }
        auxiliar += 'i';
      } else if (coDifi[i] === 'a') {
        for (let j = i; j <= i + 1; j++) {
          auxiliar2 += coDifi[j];
        }
        if (auxiliar2 === 'ai') {
          i += 1;
        }
        auxiliar += 'a';
      } else if (coDifi[i] === 'o') {
        for (let j = i; j <= i + 3; j++) {
          auxiliar2 += coDifi[j];
        }
        console.log(auxiliar2);
        console.log(i);
        if (auxiliar2 === 'ober') {
          i += 3;
        }
        auxiliar += 'o';
      } else if (coDifi[i] === 'u') {
        for (let j = i; j <= i + 3; j++) {
          auxiliar2 += coDifi[j];
        }
        if (auxiliar2 === 'ufat') {
          i += 3;
        }
        auxiliar += 'u';
      } else {
        auxiliar += coDifi[i];
      }
    }
    tableroSalida.textContent = auxiliar;
  } else {
    if (tableroSalida.classList.contains('img-hide')) {
      tableroSalida.classList.remove('img-hide');
      tableroSalida.textContent = '';
      contenedorMensajes.classList.remove('hide-elements');
      btnCopiar.classList.add('hide-elements');
    }
  }
});

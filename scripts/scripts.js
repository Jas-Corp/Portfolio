const title = document.getElementById("load");
const txt = "chargement";
const writeTime = 200;

// ECRIT LE TEXTE LETTRE PAR LETTRE
function writer(word, index) {
  if (index < word.length) {
    setTimeout(() => {
      title.innerHTML += `<span class="letter">${word[index]}</span>`;
      writer(txt, index + 1);
    }, writeTime);
  } else
    setTimeout(() => {
      eraser(index);
    }, 500);
}

// EFFACE LE TEXTE LETTRE PAR LETTRE
function eraser(index) {
  if (index != 0) {
    setTimeout(() => {
      const letter = document.getElementsByClassName("letter");
      title.removeChild(letter[index]);
      eraser(index - 1);
    }, writeTime);
  } else
    setTimeout(() => {
      writer(txt, 0);
    }, 500);
}

setTimeout(() => {
  writer(txt, 0);
}, 500);

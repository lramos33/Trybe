/*
As pessoas devem ter o poder de alterar:
  Cor de fundo da tela;
  Cor do texto;
  Tamanho da fonte;
  Espaçamento entre as linhas do texto;
  Tipo da fonte ( Font family ).
Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.
*/

// Constants
const content = document.querySelector('.article');
const btnColorBg = document.querySelectorAll('.btn-color-bg');
const btnColorTxt = document.querySelectorAll('.btn-color-txt');
const fontSize = document.querySelectorAll('.font-size');
const lineSpacing = document.querySelectorAll('.line-spacing');
const fontFamily = document.querySelectorAll('.font-family')

const storageBackgroundColor = localStorage.getItem('backgroundColor');
const storageTextColor = localStorage.getItem('textColor');
const storageFontSize = localStorage.getItem('fontSize');
const storageLineSpacing = localStorage.getItem('lineSpacing');
const storageFontFamily = localStorage.getItem('fontFamily');

// Functions
function setBackgroundColor(color) {
  content.style.backgroundColor = color;
  localStorage.setItem('backgroundColor', color);
}

function setTextColor(color) {
  content.style.color = color;
  localStorage.setItem('textColor', color);
}

function setFontSize(size) {
  content.style.fontSize = size;
  localStorage.setItem('fontSize', size);
}

function setLineSpacing(space) {
  content.style.lineHeight = space;
  localStorage.setItem('lineSpacing', space);
}

function setFontFamily(font) {
  content.style.fontFamily = font;
  localStorage.setItem('fontFamily', font);
}

// Default page
function initialize() {
  setBackgroundColor(storageBackgroundColor);
  setTextColor(storageTextColor);
  setFontSize(storageFontSize);
  setLineSpacing(storageLineSpacing);
  setFontFamily(storageFontFamily);
}
initialize();

// Events
btnColorBg.forEach((button) => button.addEventListener('click', () => {
  setBackgroundColor(button.innerHTML);
}));

btnColorTxt.forEach((button) => button.addEventListener('click', () => {
  setTextColor(button.innerHTML);
}));

fontSize.forEach((button) => button.addEventListener('click', () => {
  setFontSize(button.innerHTML);
}));

lineSpacing.forEach((button) => button.addEventListener('click', () => {
  setLineSpacing(button.innerHTML);
}));

fontFamily.forEach((button) => button.addEventListener('click', () => {
  setFontFamily(button.innerHTML);
}));

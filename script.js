"use strict";

/* Dati */
const lower = document.querySelector("#lowercase");
const upper = document.querySelector("#uppercase");
const cap = document.querySelector("#capitalize");
const alt = document.querySelector("#alternate");
const alt2 = document.querySelector("#alternate2");

/* Functions */
function copy(copyText) {
  if (navigator.userAgent.match(/iphone|ipod|ipad/)) {
    // handle iOS devices
    copyText.contenteditable = true;
    copyText.readonly = false;

    var range = document.createRange();
    range.selectNodeContents(copyText);

    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyText.setSelectionRange(0, 999999);
  } else {
    // other devices are easy
    copyText.select();
  }
  document.execCommand("copy");
}

function getString() {
  let stringa = document.getElementById("content").value;
  return stringa;
}

function toggleCopiedText() {
  const element = document.querySelector("#elemento-copiato").classList;
  element.add("animation-in");
  setTimeout(function () {
    element.remove("animation-in");
  }, 1550);
}

function lowercase() {
  let stringa = getString();
  let stringaModded = stringa.toLowerCase();

  let textAreaContent = document.getElementById("content");
  textAreaContent.value = stringaModded;
  copy(textAreaContent);

  toggleCopiedText();
}

function uppercase() {
  let stringa = getString();
  let stringaModded = stringa.toUpperCase();

  let textAreaContent = document.getElementById("content");
  textAreaContent.value = stringaModded;
  copy(textAreaContent);

  toggleCopiedText();
}

function capitalize() {
  let stringa = getString();

  let stringaModded = stringa
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");

  let textAreaContent = document.getElementById("content");
  textAreaContent.value = stringaModded;
  copy(textAreaContent);

  toggleCopiedText();
}

function alternate() {
  let stringa = getString();

  let stringaModded = stringa.toLowerCase().split("");
  for (let i = 0; i < stringaModded.length; i += 2) {
    stringaModded[i] = stringaModded[i].toUpperCase();
  }
  stringaModded = stringaModded.join("");

  let textAreaContent = document.getElementById("content");
  textAreaContent.value = stringaModded;
  copy(textAreaContent);

  toggleCopiedText();
}

function alternate2() {
  let stringa = getString();

  let stringaModded = stringa.toLowerCase().split("");
  for (let i = 1; i < stringaModded.length; i += 2) {
    stringaModded[i] = stringaModded[i].toUpperCase();
  }
  stringaModded = stringaModded.join("");

  let textAreaContent = document.getElementById("content");
  textAreaContent.value = stringaModded;
  copy(textAreaContent);

  toggleCopiedText();
}

/* Click Events */
lower.addEventListener("click", lowercase);
upper.addEventListener("click", uppercase);
cap.addEventListener("click", capitalize);
alt.addEventListener("click", alternate);
alt2.addEventListener("click", alternate2);

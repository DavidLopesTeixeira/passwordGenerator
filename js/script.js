// seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatePasswordElement = document.querySelector("#generated-password");

// Funções
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {2
    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
    const symbols = "()!@#$%¨&*{}[]<>?-+";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

console.log(getLetterLowerCase());
console.log(getLetterUpperCase());
console.log(getNumber());
console.log(getSymbol());

// Eventos
generatePasswordButton.addEventListener("click", () => {
    console.log("funfou");
});

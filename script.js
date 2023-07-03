
let result = document.getElementById("inputext");

let calculate = (number) => {
    result.value += number;

}

let Result = () => {

}

function clr() {
    result.value = "";
}

function del() {
    result.value = result.value.slice(0, -1);
}
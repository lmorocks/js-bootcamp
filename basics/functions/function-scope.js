let convertFahrenheitToCelsius = function (fah) {
    let celsius = (fah - 32) * 5/9;
    return celsius;
}

let fah = 68;

console.log(convertFahrenheitToCelsius(fah));
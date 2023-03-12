const celsius = Number.parseInt(prompt("Ввести температуру в градусах Цельсия: "));
const Fahrenheit = (9 / 5) * celsius + 32;
// alert(`По Фаренгейту: ${Math.round(Fahrenheit * 100) / 100}`);
alert(`По Цельсию: ${celsius}
По Фаренгейту: ${Math.round(Fahrenheit * 100) / 100}`);

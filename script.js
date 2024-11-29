let currentLight = "red"; // Начинаем с красного

// Функция для изменения сигнала светофора
function changeLight() {
    if (currentLight === "red") {
        document.getElementById("red").style.opacity = "1";
        document.getElementById("yellow").style.opacity = "0.3";
        document.getElementById("green").style.opacity = "0.3";
        currentLight = "green";
        setTimeout(changeLight, 5000); // Через 5 секунд переключим на желтый
    } else if (currentLight === "green") {
        document.getElementById("green").style.opacity = "0.3";
        document.getElementById("yellow").style.opacity = "1";
        currentLight = "yellow";
        setTimeout(changeLight, 2000); // Через 2 секунды переключим на красный
    } else if (currentLight === "yellow") {
        document.getElementById("yellow").style.opacity = "0.3";
        document.getElementById("red").style.opacity = "1";
        currentLight = "red";
        setTimeout(changeLight, 4000); // Через 4 секунды снова включим зеленый
    }
}

// Начинаем цикл переключения светофора
changeLight();

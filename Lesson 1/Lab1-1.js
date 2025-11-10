function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    let type;
    if (bmi < 18.5) {
        type = "Thiếu cân";
    } else if (bmi < 25) {
        type = "Bình thường";
    } else if (bmi < 30) {
        type = "Thừa cân";
    } else {
        type = "Béo phì";
    }
    return `BMI: ${bmi.toFixed(2)} - Phân loại: ${type}`;
}
console.log(calculateBMI(70, 1.75)); 

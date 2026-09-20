// 体重（kg）と身長（m）を変数に代入する
const weight = 68;
const height = 1.7;

// BMI（体格指数） = 体重(kg) ÷ 身長(m)の2乗
const bmi = weight / ((height) * (height));

// 計算結果を表示する
console.log('体重: ' + weight + 'kg');
console.log('身長: ' + height + 'm');
console.log('BMI: ' + bmi);

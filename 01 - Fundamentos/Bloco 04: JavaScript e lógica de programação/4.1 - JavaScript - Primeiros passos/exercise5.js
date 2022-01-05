const angleA = 90;
const angleB = 60;
const angleC = 30;
const sumAngles = angleA + angleB + angleC;

if (angleA > 0 || angleB > 0 || angleC > 0) {
  if (sumAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('Error');
}

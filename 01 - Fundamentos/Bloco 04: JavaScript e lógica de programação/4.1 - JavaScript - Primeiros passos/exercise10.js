const productCost = 30;
const saleCost = 50;

if (productCost > 0 && saleCost > 0) {
  const totalCost = productCost * 1.2;
  const profitPerProduct = saleCost - totalCost;
  const totalProfit = profitPerProduct * 1000;
  console.log(totalProfit);
} else {
  console.log('Error');
}
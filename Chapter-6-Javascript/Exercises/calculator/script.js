function calculateTotal() {
    const costPerLiter = parseFloat(document.getElementById("costPerLiter").value);
    const liters = parseFloat(document.getElementById("litersPurchased").value);
  
    if (isNaN(costPerLiter) || isNaN(liters)) {
      document.getElementById("totalCost").innerText = "Please enter valid numbers!";
      return;
    }
  
    const total = (costPerLiter * liters).toFixed(2);
    document.getElementById("totalCost").innerText = `Total: AED ${total}`;
  }
  
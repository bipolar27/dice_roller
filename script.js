let sum =0;
function generateDice() {
    const numDice = document.getElementById('numDice').value;
    const diceContainer = document.getElementById('diceContainer');
    diceContainer.innerHTML = ''; // Clear previous dice
    sum =0;
    for (let i = 0; i < numDice; i++) {
        
      const randomValue = Math.floor(Math.random() * 6) + 1;
      const diceDiv = document.createElement('div');
      diceDiv.className = 'dice';
      diceDiv.innerHTML = `
        <p>Dice ${i + 1}</p>
        <img class="image${i + 1}" src="images/dice${randomValue}.png">
      `;
      diceContainer.appendChild(diceDiv);
      sum = sum+ randomValue;
      var output = "Sum = "+sum;
    document.querySelector("h2").innerHTML= output;
    }
  }
  









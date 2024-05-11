import 'aframe';

// Create the A-Frame scene
const scene = new AEntity({
  vrMode: 'enabled'
});

// (Optional) Add a sky element for the background
const sky = new AEntity({
  primitive: 'a-sky',
  color: '#ecf0f1'  // Light blue sky color
});
scene.appendChild(sky);

// (Optional) Add basic lighting
const light = new AEntity({
  primitive: 'a-light',
  type: 'directional',
  color: '#fff',
  intensity: 0.8,
  position: '-1 2 1'  // Adjust light position as needed
});
scene.appendChild(light);

// Attach the scene to the document body
document.body.appendChild(scene);

// Create a UI panel entity
const uiPanel = new AEntity({
  primitive: 'a-plane',
  position: '1 1 -1',
  width: '2',
  height: '1',
  color: 'gray',
  opacity: 0.8
});

scene.appendChild(uiPanel);

// Add text entities to display information
const cryptoText = new AEntity({
  primitive: 'a-text',
  value: 'Cryptocurrency Holdings: 0',
  color: 'black',
  align: 'center',
  position: '0 0.2 0',
  font: 'arial'
});

uiPanel.appendChild(cryptoText);
// ... (similar code for additional text displays)
const buyButton = new AEntity({
  primitive: 'a-button',
  color: 'green',
  text: 'Buy',
  width: 0.5,
  height: 0.2,
  position: '-0.5 -0.2 0',
  events: {
    click: function () {
      const selectedCrypto = prompt("Enter cryptocurrency (bitcoin/ethereum):");
      
      if (selectedCrypto && cryptocurrencies[selectedCrypto]) {
        // Handle buying process (explained later)
      } else {
        alert("Invalid cryptocurrency!");
      }
    }
  }
});

uiPanel.appendChild(buyButton);

//Handling Buy Button Click (App.js)
const buyButton = new AEntity({
  // ... (previous button definition)
  events: {
    click: function () {
      const selectedCrypto = prompt("Enter cryptocurrency (bitcoin/ethereum):");
      
      if (selectedCrypto && cryptocurrencies[selectedCrypto]) {
        const quantity = prompt("Enter quantity to buy:");
        const parsedQuantity = parseInt(quantity); // Convert string to number

        if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
          alert("Invalid quantity! Please enter a positive number.");
          return; // Exit the function if quantity is invalid
        }

        // Simulate buying process (explained in next step)
        buyCrypto(selectedCrypto, parsedQuantity);
        updateCryptoText(); // Update UI with new holdings
      } else {
        alert("Invalid cryptocurrency!");
      }
    }
  }
});

//Simulating Buying Process (Separate Function)
function buyCrypto(cryptocurrency, quantity) {
  // Check if player has enough funds (assuming some virtual currency)
  if (/* Check player's virtual currency balance */ < cryptocurrency.price * quantity) {
    alert("Insufficient funds!");
    return;
  }

  // Update player's holdings
  cryptocurrencies[cryptocurrency].quantity += quantity;

  // (Optional) Simulate market price fluctuations (explained later)
  // updateCryptocurrencyPrices(); // Call a function to update prices

  console.log("Bought", quantity, cryptocurrency); // Optional logging for debugging
}
//Simulating Market Price Fluctuations
// Function to update cryptocurrency prices with random fluctuations
function updateCryptocurrencyPrices() {
  for (const crypto in cryptocurrencies) {
    const fluctuation = Math.random() * 0.1 - 0.05; // Random value between -0.05 and 0.05
    cryptocurrencies[crypto].price += cryptocurrencies[crypto].price * fluctuation;
  }
}

// Call this function periodically (e.g., every 5 seconds) to simulate market changes
setInterval(updateCryptocurrencyPrices, 5000);

// Create a sell button entity (similar to buy button)
const sellButton = new AEntity({
  primitive: 'a-button',
  color: 'red',
  text: 'Sell',
  width: 0.5,
  height: 0.2,
  position: '0.5 -0.2 0',
  events: {
    click: function () {
      const selectedCrypto = prompt("Enter cryptocurrency (bitcoin/ethereum) to sell:");
      
      if (selectedCrypto && cryptocurrencies[selectedCrypto]) {
        const quantity = prompt("Enter quantity to sell:");
        const parsedQuantity = parseInt(quantity);

        if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
          alert("Invalid quantity! Please enter a positive number.");
          return;
        }

        // Check if player has enough quantity to sell
        if (cryptocurrencies[selectedCrypto].quantity < parsedQuantity) {
          alert("Insufficient quantity! You only have " + cryptocurrencies[selectedCrypto].quantity + " " + selectedCrypto);
          return;
        }

        // Simulate selling process (explained next)
        sellCrypto(selectedCrypto, parsedQuantity);
        updateCryptoText(); // Update UI with new holdings
      } else {
        alert("Invalid cryptocurrency!");
      }
    }
  }
});

uiPanel.appendChild(sellButton);

// Function to handle selling cryptocurrency
function sellCrypto(cryptocurrency, quantity) {
  // Update player's holdings
  cryptocurrencies[cryptocurrency].quantity -= quantity;

  // (Optional) Implement logic to update virtual currency balance based on selling price
  // ...

  console.log("Sold", quantity, cryptocurrency); // Optional logging for debugging
}

// Additional text entities to display current market prices
const bitcoinPriceText = new AEntity({
  primitive: 'a-text',
  value: 'Bitcoin: $-$', // Update with actual price later
  color: 'black',
  align: 'center',
  position: '-0.5 0.5 0',
  font: 'arial'
});

const ethereumPriceText = new AEntity({
  primitive: 'a-text',
  value: 'Ethereum: $-$', // Update with actual price later
  color: 'black',
  align: 'center',
  position: '0.5 0.5 0',
  font: 'arial'
});

uiPanel.appendChild(bitcoinPriceText);
uiPanel.appendChild(ethereumPriceText);

// Update price text entities within updateCryptoText function
function updateCryptoText() {
  // ... (existing code for updating holdings text)
  bitcoinPriceText.setAttribute('value', 'Bitcoin: $' + cryptocurrencies.bitcoin.price.toFixed(2));
  ethereumPriceText.setAttribute('value', 'Ethereum: $' + cryptocurrencies.ethereum.price.toFixed(2));
}

<script>
    let barcodeInput = "";
    let productSearch = "";
    let matchingProducts = [];
  
    // Simulated list of products (replace with your actual data)
    let productList = [
      { id: 1, name: "Product A", barcode: "12345", price: 10.99 },
      { id: 2, name: "Product B", barcode: "67890", price: 15.99 },
      // Add more products here
    ];
  
    function scanBarcode() {
      // Simulate barcode scanning logic here
      if (barcodeInput) {
        const matchedProduct = productList.find((product) => product.barcode === barcodeInput);
        if (matchedProduct) {
          addProduct(matchedProduct);
        }
      }
    }
  
    function searchProducts() {
      // Filter products based on the search query
      matchingProducts = productList.filter((product) =>
        product.name.toLowerCase().includes(productSearch.toLowerCase())
      );
    }
  
    function addProduct(product) {
      // Logic to add the selected product to the cart or perform other actions
      console.log(`Added product: ${product.name}`);
    }
  </script>
  
  <div class="product-selection">
    <h2>Product Selection</h2>
  
    <!-- Barcode Scanner Input -->
    <div class="barcode-scanner">
      <input
        type="text"
        placeholder="Scan Barcode"
        bind:value={barcodeInput}
        on:input={scanBarcode}
      />
      <button on:click={scanBarcode}>Scan</button>
    </div>
  
    <!-- Product Search -->
    <div class="product-search">
      <input
        type="text"
        placeholder="Search Product"
        bind:value={productSearch}
        on:input={searchProducts}
      />
      <button on:click={searchProducts}>Search</button>
    </div>
  
    <!-- List of Matching Products -->
    <ul class="product-list">
      {#each matchingProducts as product (product.id)}
        <li class="product-item">
          <div class="product-details">
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
          </div>
          <button on:click={() => addProduct(product)}>Add</button>
        </li>
      {/each}
    </ul>
  </div>
  

<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  let barcodeInput = "";
  let productSearch = "";
  export let selectedProducts = [];
  export let productList = [];
    function scanBarcode() {
      // Simulate barcode scanning logic here
      if (barcodeInput) {
        const matchedProduct = productList.find((product) => product.barcode === barcodeInput);
        if (matchedProduct) {
          addProductToCart(matchedProduct);
          barcodeInput = "";
        }
      }
    }
  
    function searchProducts() {
      // Filter products based on the search query
      selectedProducts = productList.filter((product) =>
        product.name.toLowerCase().includes(productSearch.toLowerCase())
      );
    }
  
    function addProductToCart(product) {
      // Logic to add the selected product to the cart or perform other actions
      selectedProducts.push(product)
      dispatch('addProductToCart');
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
      {#each selectedProducts as product (product.id)}
        <li class="product-item">
          <div class="product-details">
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
          </div>
          <button on:click={() => addProductToCart(product)}>Add</button>
        </li>
      {/each}
    </ul>
  </div>
  
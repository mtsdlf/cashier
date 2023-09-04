<script>
  export let selectedProducts = []; // An array to hold selected products

  // Function to calculate the total price of selected products
  function calculateTotal() {
    let total = 0.0;
    selectedProducts.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total.toFixed(2);
  }
</script>

<div class="selected-product-list">
  <h3>Selected Products</h3>
  <ul>
    {#each selectedProducts as product (product.id)}
      <li>
        <span>{product.name} - Quantity: {product.quantity}</span>
        <span>Total: ${product.price * product.quantity}</span>
      </li>
    {/each}
  </ul>
  <p>Total: ${calculateTotal()}</p>
</div>

<style>

  .selected-product-list {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }

  .selected-product-list ul {
    list-style: none;
    padding: 0;
  }

  .selected-product-list li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
</style>

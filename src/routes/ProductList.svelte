<script>
    export let products;
    export let addProductToCart;
</script>

<main>
  <div class="product-list">
    <h2>Product List</h2>
    <ul class="product-list">
      {#each products as product (product.id)}
        <li class="product-item">
          <div class="product-details">
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Stock: {product.stock}</p>
          </div>
          <div class="product-actions">
            <button on:click={() => addProductToCart(product)}>Add to Cart</button>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</main>  
<style>
  /* Product List Styles */
  .product-list {
      list-style: none;
      padding: 0;
  }

  .product-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #ddd;
      padding: 10px;
      margin: 5px 0;
  }

  .product-details {
      flex: 1;
  }

  h3 {
      margin: 0;
  }

  .product-actions {
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  button {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
  }

  button:hover {
      background-color: #0056b3;
  }

  .out-of-stock {
      color: #ff0000;
      font-weight: bold;
  }
</style>

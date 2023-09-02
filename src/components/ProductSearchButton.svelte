<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function searchProduct() {
    // Implement your product search logic here, and obtain the selected product
    const selectedProduct = {
      id: 1, // Replace with the actual product ID
      name: 'Product Name', // Replace with the actual product name
      price: 10.99, // Replace with the actual product price
      quantity: 1, // Replace with the selected quantity
    };

    // Dispatch an event to notify the parent component (App.svelte) with the selected product
    dispatch('search', { product: selectedProduct });
  }
</script>

<button on:click={searchProduct}>Search Product</button>

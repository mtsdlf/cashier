<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function deleteLastProduct() {
    // Implement your logic to delete the last selected product
    dispatch('deleteLastProduct');
  }

  function proceedToInvoice() {
    // Implement your logic to proceed to invoice generation
    dispatch('proceedToInvoice');
  }

  function cancelInvoice() {
    // Implement your logic to cancel the current invoice
    dispatch('cancelInvoice');
  }

  function deleteAllSelectedProducts() {
    // Implement your logic to delete all selected products
    dispatch('deleteAllSelectedProducts');
  }
</script>

<div class="checkout-actions">
  <button on:click={deleteLastProduct}>Delete Last Product</button>
  <button on:click={proceedToInvoice}>Proceed to Invoice</button>
  <button on:click={cancelInvoice}>Cancel Invoice</button>
  <button on:click={deleteAllSelectedProducts}>Delete All Selected Products</button>
</div>

<style>
  /* Add your CSS styles here */
  .checkout-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
</style>

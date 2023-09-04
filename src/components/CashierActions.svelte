<script>
    import { createEventDispatcher } from 'svelte';
  
    export let invoiceTotal = 0;
  
    const dispatch = createEventDispatcher();
  
    // Placeholder functions for functionality
    function handleCancelInvoice() {
      // Implement invoice cancelation logic here
      dispatch('cancelInvoice');
    }
  
    function handlePrintInvoice() {
      // Implement invoice printing logic here
      dispatch('printInvoice');
    }
  
    function handleDeleteLastProduct() {
      // Implement deletion logic here
      dispatch('deleteLastProduct');
    }
  </script>
  
  <div class="cashier-actions">
    <h2>Cashier Actions</h2>
    <div class="invoice-total">
      <p>Total: ${invoiceTotal.toFixed(2)}</p>
    </div>
    <button on:click={handleCancelInvoice}>Cancel Invoice</button>
    <button on:click={handlePrintInvoice}>Print Invoice</button>
    <button on:click={handleDeleteLastProduct}>Delete Last Product</button>
  </div>
  
  <style>


  </style>
  
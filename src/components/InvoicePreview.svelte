<script>
  export let invoiceType = 'Regular Invoice'; // Default invoice type
  export let selectedCustomer = null; // Default selected customer
  export let total = 0.0; // Default total amount

  // Function to format the total amount with currency symbol
  function formatTotal() {
    return `$${total.toFixed(2)}`;
  }
</script>

<div class="invoice-preview">
  <h3>Invoice Preview</h3>
  <p><strong>Invoice Type:</strong> {invoiceType}</p>
  <p><strong>Customer:</strong> {selectedCustomer ? selectedCustomer.name : 'Not selected'}</p>
  <p><strong>Total Amount:</strong> {formatTotal()}</p>
</div>

<style>
  /* Add your CSS styles here */
  .invoice-preview {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }
</style>

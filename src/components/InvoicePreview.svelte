<script>
  export let invoiceType = '"A"'; // Default invoice type
  export let selectedCustomer = null; // Default selected customer
  export let totalAmount = 0.00; // Default total amount

  // Function to format the total amount with currency symbol
  function formatTotalAmount() {
    return `$${totalAmount.toFixed(2)}`;
  }
</script>

<div class="invoice-preview">
  <h3>Invoice Preview</h3>
  <p><strong>Factura Tipo:</strong> {invoiceType}</p>
  <p><strong>Cliente:</strong> {selectedCustomer.name}</p>
  <p><strong>Final $</strong> {totalAmount.toFixed(2)}</p>
</div>

<style>
  /* Add your CSS styles here */
  .invoice-preview {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }
</style>

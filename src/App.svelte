<script>


// Import amqp10
import * as amqp from 'amqp10';
  import CustomerSelectionButton from './components/CustomerSelectionButton.svelte';
  import InvoicePreview from './components/InvoicePreview.svelte';
  import CheckoutActions from './components/CheckoutActions.svelte';
  import ProductSelection from './components/ProductSelection.svelte';


// Create a new AMQP client
const client = new amqp.Client();

// Connect to the AMQP server
client.connect('amqp://localhost')
  .then(() => {
    // Create a sender link
    const sender = client.createSender('pos_q');

    // Send a message
    sender.send({ body: 'Hello, RabbitMQ!' });

    // Create a receiver link
    const receiver = client.createReceiver('pos_q');

    // Receive messages
    receiver.on('message', (message) => {
      console.log('Received message:', message.body);
    });
  })
  .catch((error) => {
    console.error('Error connecting to AMQP server:', error);
  });


  // Define your selected products array here
  let productList = [];

  let invoiceType = "C";
  let totalAmount = 0.0;
  let selectedProducts = [];
  let selectedCustomer = {
    id: 1,
    name: "luis"
  }

 

  // Event handler for adding a product to the selectedProducts array
  function addProductToCart(product) {
    getTotal();
    console.log(totalAmount);
  }

  function getTotal() {
    let total = 0;
    selectedProducts.forEach(product => {
   total = total + product.price ;
   totalAmount = total;
    })
  }
  // Event handler for deleting the last product from selectedProducts
  function deleteLastProduct() {
    if (selectedProducts.length > 0) {
      selectedProducts.pop();
    }
  }

  // Event handler for proceeding to invoice generation
  function proceedToInvoice() {
    // Implement your logic to generate an invoice
  }

  // Event handler for canceling the current invoice
  function cancelInvoice() {
    // Implement your logic to cancel the current invoice
  }

  // Event handler for deleting all selected products
  function deleteAllSelectedProducts() {
    selectedProducts = [];
  }
</script>

<div class="pos-app">
  <header>
    <h1>Supermarket Name</h1>
    <div class="cashier-info">
      <span>Cashier: John Doe</span>
      <span>Service Status: Open</span>
      <span>Time: 12:30 PM</span>
    </div>
  </header>

  <main>
  
    <CustomerSelectionButton />
    <InvoicePreview 
      bind:totalAmount={totalAmount}
      bind:selectedCustomer={selectedCustomer}
      bind:invoiceType={invoiceType}
      
    />

    <CheckoutActions
      on:deleteLastProduct={deleteLastProduct}
      on:proceedToInvoice={proceedToInvoice}
      on:cancelInvoice={cancelInvoice}
      on:deleteAllSelectedProducts={deleteAllSelectedProducts}
    />
    <ProductSelection 
    bind:selectedProducts={selectedProducts}
    bind:productList={productList}
    on:addProductToCart={addProductToCart} />
  </main>
</div>

<style>
  /* Add your CSS styles here */
  .pos-app {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    background-color: #fff;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  header h1 {
    font-size: 24px;
  }

  .cashier-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 14px;
  }

  main {
    display: flex;
    flex-direction: column;
  }
</style>
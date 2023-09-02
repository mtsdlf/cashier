<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function selectCustomer() {
    // Implement your customer selection logic here, and obtain the selected customer
    const selectedCustomer = {
      id: 1, // Replace with the actual customer ID
      name: 'Customer Name', // Replace with the actual customer name
      email: 'customer@email.com', // Replace with the actual customer email
    };

    // Dispatch an event to notify the parent component (App.svelte) with the selected customer
    dispatch('select', { customer: selectedCustomer });
  }
</script>

<button on:click={selectCustomer}>Select Customer</button>

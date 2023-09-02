<script>
    import { onMount } from 'svelte';
  
    // Initialize QuaggaJS
   /* onMount(() => {
      Quagga.init({
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: document.querySelector('#barcode-scanner'),
          constraints: {
            width: 640,
            height: 480,
          },
        },
        decoder: {
          readers: ['ean_reader', 'upc_reader', 'code128_reader'],
        },
      }, function (err) {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start();
      });
  
      Quagga.onDetected((result) => {
        // Handle barcode detection here
        const barcodeData = result.codeResult.code;
        console.log('Detected barcode:', barcodeData);
  
        // You can send this data to your POS application logic for further processing
      });
  
      // Cleanup Quagga when the component is unmounted
      return () => {
        Quagga.stop();
        Quagga.offDetected();
      };
    });*/
  </script>
  
  <style>
    /* Add styles for the barcode scanner container if needed */
    #barcode-scanner {
      width: 100%;
      height: 100%;
    }
  </style>
  
  <div id="barcode-scanner">
    <!-- QuaggaJS will render the video feed here -->
  </div>
  
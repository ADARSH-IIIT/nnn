// Switch between editor tabs (HTML, CSS, JS)
function switchTab(tab) {
    document.getElementById('html').classList.add('hidden');
    document.getElementById('css').classList.add('hidden');
    document.getElementById('js').classList.add('hidden');
    document.getElementById(tab).classList.remove('hidden');
  }
  
  // Live Preview Update
  const htmlEditor = document.getElementById('html');
  const cssEditor = document.getElementById('css');
  const jsEditor = document.getElementById('js');
  const previewFrame = document.getElementById('preview-frame');
  
  function updatePreview() {
    const htmlContent = htmlEditor.value;
    const cssContent = `<style>${cssEditor.value}</style>`;
    const jsContent = `<script>${jsEditor.value}<\/script>`;
    

    
    const previewContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${cssContent}
      </head>
      <body>
       

        ${htmlContent}
     

      </body>

        ${jsContent}


       
      </html>

    `;
    
    previewFrame.srcdoc = previewContent; // Use srcdoc instead of contentDocument
  }
  
  // Event Listeners for live updates
  htmlEditor.addEventListener('input', updatePreview);
  cssEditor.addEventListener('input', updatePreview);
  jsEditor.addEventListener('input', updatePreview);
  









// JavaScript to access the iframe's content
const iframe = document.getElementById("preview-frame");
const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;


console.log(iframe , iframeDocument);

// script.js

// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Find the <strong> element
    var strongElement = document.querySelector('strong');
    
    // Change the text content of the <strong> element
    strongElement.textContent = 'Modified heading text';
    
    // Find the <Table> element
    var tableElement = document.querySelector('table');
    
    // Add a border to the <Table> element
    tableElement.style.border = '1px solid black';
    
    // Find the <p> element after the table
    var textAfterTable = document.querySelector('table + p');
    
    // Change the text content of the <p> element after the table
    textAfterTable.textContent = 'Modified text after table';
  });
  // the end of script
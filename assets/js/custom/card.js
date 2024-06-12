// alert('hello');
// Use querySelectorAll to get all matching elements
let addToCartButtons = document.querySelectorAll('.card-figcaption--action-buttons .add-to-cart');

// Properly declare the loop variable with 'let'
for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function(event){
        // Log the id of the clicked element
        console.log(this.id);

        // Assuming 'this' has a data attribute containing the target ID
        let targetID = this.id;

        // Build the selector for the input element to be clicked
        let quickViewBtn = document.querySelector(`#quick-view-${targetID}`);

        console.log(quickViewBtn);

        // quickViewBtn.classList.add('testing-add-class');
        quickViewBtn.click();
        // quickViewBtn.classList.add('testing-add-class');

        setTimeout(function() {
            let inputSelector = document.querySelector(`#form-action-addToCart`);
            inputSelector.click();
            console.log(inputSelector);
        }, 2500);
        // Find the input element
        // let targetInput = document.querySelector(inputSelector);

        // Check if the target input exists and click it
        // if (targetInput) {
        //     targetInput.click();
        // } else {
        //     console.log('Target input not found for ID:', targetID);
        // }
    });
}


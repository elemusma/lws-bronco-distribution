const businessToBusiness = document.querySelector('.business-to-business');
const headerCustom = document.querySelector('.header');
const bodyCustom = document.querySelector('body');
let businessToBusinessHeight = `${businessToBusiness.offsetHeight + 20}`;

document.querySelector('.business-to-business .close').addEventListener('click', function() {
    // headerCustom.style.height = `${headerCustom.offsetHeight - 20}px`;
    // bodyCustom.style.paddingTop = `${headerCustom.offsetHeight - 20}px`;
    // businessToBusiness.style.opacity = 0;
    // businessToBusiness.style.marginBottom = 0;
    // businessToBusiness.style.pointerEvents = "none";
    businessToBusiness.style.display = "none";
    headerCustom.classList.add('hide-btob');
    bodyCustom.classList.add('hide-btob');
    hideBusinessToBusiness();
});


// businessToBusiness.style.top = `-${businessToBusinessHeight}px`;
// headerCustom.style.top = `${businessToBusinessHeight}px`;
// bodyCustom.style.marginTop = `${businessToBusinessHeight}px`;

showBusinessToBusiness();

window.addEventListener('scroll',customNav);

function customNav() {
    if(scrollY < `${businessToBusinessHeight}`) {
        console.log('scrollY less than');
        showBusinessToBusiness();
    } else if (scrollY > `${businessToBusinessHeight}`) {
        console.log('scrollY greater than');
        hideBusinessToBusiness();
    }
}

function showBusinessToBusiness() {
    businessToBusiness.style.top = `-${businessToBusinessHeight}px`;
    headerCustom.style.top = `${businessToBusinessHeight}px`;
    bodyCustom.style.marginTop = `${businessToBusinessHeight}px`;
}

function hideBusinessToBusiness() {
    headerCustom.style.top = `0px`;
    bodyCustom.style.marginTop = `0px`;
}
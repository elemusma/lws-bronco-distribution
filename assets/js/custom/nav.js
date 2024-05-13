// alert('hello from js/custom/nav.js');
// console.log('hello from js/custom/nav.js');
const businessToBusiness = document.querySelector('.business-to-business');
const headerCustom = document.querySelector('.header');
const bodyCustom = document.querySelector('body');

document.querySelector('.business-to-business .close').addEventListener('click', function() {
    // console.log(businessToBusiness);
    // console.log(headerCustom);
    // console.log(bodyCustom);
    headerCustom.style.height = `${headerCustom.offsetHeight - 20}px`;
    // headerCustom.style.paddingTop = `20px`;
    bodyCustom.style.paddingTop = `${headerCustom.offsetHeight - 20}px`;
    businessToBusiness.style.opacity = 0;
    businessToBusiness.style.marginBottom = 0;
    businessToBusiness.style.pointerEvents = "none";
    // businessToBusiness.style.display = "none";
})
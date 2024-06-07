const businessToBusiness = document.querySelector('.business-to-business');
const headerCustom = document.querySelector('.header');
const bodyCustom = document.querySelector('body');

document.querySelector('.business-to-business .close').addEventListener('click', function() {
    headerCustom.style.height = `${headerCustom.offsetHeight - 20}px`;
    bodyCustom.style.paddingTop = `${headerCustom.offsetHeight - 20}px`;
    businessToBusiness.style.opacity = 0;
    businessToBusiness.style.marginBottom = 0;
    businessToBusiness.style.pointerEvents = "none";
});

let businessToBusinessHeight = `${businessToBusiness.offsetHeight + 20}`;
businessToBusiness.style.top = `-${businessToBusinessHeight}px`;
headerCustom.style.top = `${businessToBusinessHeight}px`;
bodyCustom.style.marginTop = `${businessToBusinessHeight}px`;

window.addEventListener('scroll',customNav);

function customNav() {
    if(scrollY < `${businessToBusinessHeight}`) {
        console.log('scrollY less than');
        businessToBusiness.style.top = `-${businessToBusinessHeight}px`;
        headerCustom.style.top = `${businessToBusinessHeight}px`;
        bodyCustom.style.marginTop = `${businessToBusinessHeight}px`;
    } else if (scrollY > `${businessToBusinessHeight}`) {
        console.log('scrollY greater than');
        headerCustom.style.top = `0px`;
        bodyCustom.style.marginTop = `0px`;
    }
}
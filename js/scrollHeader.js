let scrollpos = window.scrollY
const header = document.querySelector("header")
const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("sticky-nav")
const remove_class_on_scroll = () => header.classList.remove("sticky-nav")

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY

    if (scrollpos >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }
})

$(document).ready(function() {
    $('.number').click(function() {
        $('.circle-section--left-item').removeClass("active-calc");
        $(this).addClass("active-calc");
    });
    if($(this).hasClass('active-calc')){
        $('.price').addClass("active-price");
    }
});


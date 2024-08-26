(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate The wowjs
    new WOW().init();
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    /*
    // Back To Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'smooth'); // Smooth scroll to the top
        return false; // Prevent default behavior (for safety)
    });
    */


    // Testimonial Slider
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Gallery Slider
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        auto: true,             // Enable auto play
        pause: 2000,            // Time in milliseconds between slides
        speed: 700,             // Speed of the slide transition
        onSliderLoad: function(){
            $('#autoWidth').removeClass('cs-hidden');
        }
    });

    // JavaScript to handle image click and show in modal
    $(document).on('click', '.slide-img', function() {
        var src = $(this).attr('src');
        $('#modalImage').attr('src', src);
        $('#galleryModal').modal('show');
    });

    $(document).ready(function(){
        // Date Picker
        $('#date').datepicker({
            dateFormat: 'mm/dd/yy',
            changeMonth: true,
            changeYear: true
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Initialize Flatpickr as a time picker
        flatpickr("#timepicker", {
            enableTime: true,
            noCalendar: true,
            dateFormat: "h:i K",   // 12-hour format with AM/PM
            time_24hr: false,
            minuteIncrement: 30,   // 30-minute intervals
            minTime: "10:00",      // Start time (10:00 AM)
            maxTime: "23:00",      // End time (11:00 PM)
            defaultDate: "10:00",  // Default time shown
            theme: "bootstrap5"    // Optional Bootstrap 5 theme
        });
    });

    // Form Submission
    $(document).ready(function() {
        $("#reservationForm").on("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission

            const fullName = $("input[name='fullName']").val();
            const email = $("input[name='email']").val();
            const phone = $("input[name='phone']").val();
            const date = $("input[name='date']").val();
            const time = $("input[name='time']").val();
            const numPersons = $("input[name='numPersons']").val();
            const specialRequest = $("textarea[name='specialRequest']").val();

            const message = `Reservation Request:%0A
            Name: ${fullName}%0A
            Email: ${email}%0A
            Phone: ${phone}%0A
            Date: ${date}%0A
            Time: ${time}%0A
            Number of Persons: ${numPersons}%0A
            Special Request: ${specialRequest}`;

            const whatsappUrl = `https://wa.me/916395525749?text=${encodeURIComponent(message)}`;

            // Open WhatsApp link
            window.open(whatsappUrl, '_blank');

            // Show Thank You Modal
            $("#thankYouModal").modal('show');
        });
    });
    
    
})(jQuery);


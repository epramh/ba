(function ($) {
    "use strict";

    // Logo on mouse hover
    const $navbar = $(".navbar-brand");
    const showClass = "wow bounce";
    
    $(window).hover(function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $navbar.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($navbar).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($navbar).removeClass(showClass);
            }
            );
        } else {
            $navbar.off("mouseenter mouseleave");
        }
    });

})(jQuery);


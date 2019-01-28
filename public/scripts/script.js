$(function() {

    // setTimeout(function(){
    //     $('body').addClass('loaded');
    //
    // }, 3000);

    if  ($("#demo-grid").length) {
        var grid = $("#demo-grid");
        var asyncGrid = new Gridifier(grid, {
            "class": "grid-item",
            "dragifier": false,
            "gridResize": "expand"

        });
        asyncGrid.append(asyncGrid.collectNew());
    }
    
    if  ($("#full-grid").length) {
        var agrid = $("#full-grid"),


        asyncGrid = new Gridifier(agrid, {
            "class": "full-grid-item",
            "dragifier": false,
            "gridResize": "expand"

        });
        asyncGrid.append(asyncGrid.collectNew());
    }

    if  ($("#martie").length) {

        var bgrid = $("#martie");
        asyncGrid = new Gridifier(bgrid, {
            "class": "full-grid-item",
            "dragifier": false,
            "gridResize": "expand"

        });
        asyncGrid.append(asyncGrid.collectNew());
    }





    $('#quote-carousel').carousel({
        interval: 7000
    });

    $('#grades-carousel').carousel({
        interval: 4000,
        wrap: true
    });
    // AOS.init({
    //     easing: 'ease',
    //     once: true,
    //     mirror: false
    // });

    $('.single-item').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
    });

    $('.mobile-nav i.show-panel').click(function() {
        //$(this).toggleClass("fa-bars").toggleClass("fa-close");
        //
        //$(this).toggleClass("fa-bars");
        $('.fa-bars').hide();
        
        //$('.mobile-nav .sidenav').toggle();

        //$(".sidenav").slideToggleWidth();
        //classie.toggle( menuLeft, 'cbp-spmenu-open' );
        $(".sidenav").toggleClass('cbp-spmenu-open');
        $('body').toggleClass("fixed");
    });
    
    $('.sidenav i.fa-close').click(function(e) {
        $(".sidenav").toggleClass('cbp-spmenu-open');
        $('.fa-bars').show();
        $('body').toggleClass("fixed");
    });
   

//    $('.sidenav ul .drop').click(function(e) {
//        e.preventDefault();
//        $(e.target).parent('li').find('ul').toggle();
//        $(e.target).toggleClass("font-1-3 orange-color");
//        //$(e.target).toggleClass("fa-angle-down").toggleClass("fa-angle-up");
//        //$(this).closest("li").find("li").toggle();
//        //$('.sidenav ul li ul').hide();
//
//        //$(e.target).parent("li").find("ul").toggle();
//
//
//    });

    $('.triangle').hover(
        function(e){
            var header = $(e.target).data("header");
            $("." + header + " .introtxt-text").show().addClass("whitening");
            $("." + header + " .logo").show().addClass("whitening-logo");
            $("." + header + " .ttitle").show().addClass("whitening");
            $("." + header + " .line").addClass("line-animation");

        }, function(e){
            var header = $(e.target).data("header");
            $("." + header + " .introtxt-text").hide().removeClass("whitening");
            $("." + header + " .logo").show().removeClass("whitening-logo");
            $("." + header + " .ttitle").show().removeClass("whitening");
            $("." + header + " .line").removeClass("line-animation");
        }
    );

    jQuery.fn.extend({
        slideRight: function() {
            return this.each(function() {
                jQuery(this).animate({width: 'show'}, 100);
            });
        },
        slideLeft: function() {
            return this.each(function() {
                jQuery(this).animate({width: 'hide'}, 100);
            });
        },
        slideToggleWidth: function() {
            return this.each(function() {
                var el = jQuery(this);
                if (el.css('display') == 'none') {
                    $('body').css('position','fixed');
                    $('.sidenav li ul').hide();
                   $('.sidenav a').removeClass('font-1-3 orange-color');

                    el.slideRight();
                } else {
                    $('body').css('position','relative');
                    el.slideLeft();
                }
            });
        }
    });

    $(window).scroll(function() {

        if ($(this).scrollTop()>700)
        {
            $('.scroll-down').fadeOut( 1600, "swing");
        }
        else {
            $('.scroll-down').fadeIn( 1600, "swing");
        }
    });

    $('.grid').isotope({
        itemSelector: '.grid-item',
        masonry: {
            columnWidth: 100
        }
    });



});
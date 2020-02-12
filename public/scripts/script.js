$(function() {

    function setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }


    // if (getCookie('CookieShow') == null) {
    //     $('body').addClass('fixed');
    //
    //     $('body').bsgdprcookies({
    //
    //         id: 'cookie-modal',
    //         class: '',
    //         title: "Flo Adventure foloseste cookie-uri",
    //         backdrop: 'static',
    //         message: 'Acest site folosește cookie-uri. Continuarea navigării reprezintă acceptul dvs. pentru această folosință. Pentru mai multe detalii privind gestionarea preferințelor privind cookie-uri, vedeți Politica de utillizare cookie-uri',
    //         messageMaxHeightPercent: 25,
    //         delay: 1500,
    //         expireDays: 30,
    //         moreLinkActive: true,
    //         moreLinkLabel: 'More informations..',
    //         moreLinkNewTab: true,
    //         moreLink: 'privacy-policy.php',
    //         acceptButtonLabel: 'Accept',
    //         allowAdvancedOptions: true,
    //         advancedTitle: 'Select which cookies you want to accept',
    //         advancedAutoOpenDelay: 1000,
    //         advancedButtonLabel: 'Customize',
    //         advancedCookiesToSelect: [
    //             {
    //                 name: 'necessary',
    //                 title: 'Necessary',
    //                 description: 'Required for the site to work properly',
    //                 isFixed: true
    //             },
    //             {
    //                 name: 'preferences',
    //                 title: 'Site Preferences',
    //                 description: 'Required for saving your site preferences, e.g. remembering your username etc.',
    //                 isFixed: false
    //             },
    //             {
    //                 name: 'analytics',
    //                 title: 'Analytics',
    //                 description: 'Required to collect site visits, browser types, etc.',
    //                 isFixed: false
    //             },
    //             {
    //                 name: 'marketing',
    //                 title: 'Marketing',
    //                 description: 'Required to marketing, e.g. newsletters, social media, etc',
    //                 isFixed: false
    //             }
    //         ],
    //         OnAccept: function () {
    //             $('body').removeClass('fixed');
    //         }
    //     });
    // } else {
    //     $('body').removeClass('fixed');
    // }






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

    if  ($("#aprilie").length) {

        var cgrid = $("#aprilie");
        asyncGrid = new Gridifier(cgrid, {
            "class": "full-grid-item",
            "dragifier": false,
            "gridResize": "expand"

        });
        asyncGrid.append(asyncGrid.collectNew());
    }

    $('.mobile-nav i.show-panel').click(function() {
        $('.fa-bars').hide();
        $(".sidenav").toggleClass('cbp-spmenu-open');
        $('body').toggleClass("fixed");
    });
    $('.mobile-nav ul.fl.lang').click(function() {
        $(this).find('ul.sl').toggleClass('active');
    });
    
    $('.sidenav i.fa-close').click(function(e) {
        $(".sidenav").toggleClass('cbp-spmenu-open');
        $('.fa-bars').show();
        $('body').toggleClass("fixed");
    });
});
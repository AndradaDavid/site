$(function() {
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
    
    $('.sidenav i.fa-close').click(function(e) {
        $(".sidenav").toggleClass('cbp-spmenu-open');
        $('.fa-bars').show();
        $('body').toggleClass("fixed");
    });
});
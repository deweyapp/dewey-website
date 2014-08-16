$( document ).ready(function() {

    $( ".settings-toggle, .close" ).click(function() {
        $( "body" ).toggleClass( "modal-open" );
        $( ".grid, .nav-wrap" ).toggleClass( "scale-blur" );
        $( ".settings" ).toggleClass( "open" );
    });

    $( ".edit-toggle, .delete, .cancel" ).click(function() {
        $( "body" ).toggleClass( "modal-open" );
        $( ".grid, .nav-wrap" ).toggleClass( "scale-blur" );
        $( ".modal" ).toggleClass( "in" );
    });

    $( ".tags-wrap" ).click(function() {
        $( "body" ).toggleClass( "modal-open" );
        $( ".tags-wrap" ).toggleClass( "open" );
        $( ".grid" ).removeClass( "open" );
    });

});

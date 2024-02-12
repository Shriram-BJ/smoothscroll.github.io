$("nav","ul","li","a").click( function(){

    var thisSelection = $(this).attr(href);

    var thisLink = $(this);

    $('html , body').stop().animate({

        scrollTop: $(thisSelection).offset().top - 2000

    }, 800, 'easeOutCirc', function(){

        $("nav","ul","li","a").removeAttr("class");
 
        thisLink.addClass("selected");
    
    });

}); 

$(window).on("load", function(){

    var posts = $("section");

    var pageTop;

    var postPos;

    var counter = 0;

    var postTops = [];

    posts.each( function(){

        postTops.push( Math.floor ($(this).offset.top)  );

    });
   
        console.log(postTops);
    // $(window).scroll( function(){

    //     postPos = $(posts[0]).offset().top;

    //     pageTop = $(window).scrollTop();

    //     console.log(`${pageTop} and ${postPos}`);

    // });

});
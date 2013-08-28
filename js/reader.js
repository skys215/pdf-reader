$(function(){

    var get_max_page = function(){
        return $(".page-hash").length;
    }

    var get_current_page = function(){
        var current_page_no = 0;
        var location = parseInt($(document).scrollTop());
        $(".page-hash").each(function(){
            var page_no = parseInt($(this).attr('id').replace('page-hash-', ''));
            var page_location = parseInt($(this).offset().top);
            if (location+200 > (page_location-5)){
                current_page_no++;
            }
        });
        return current_page_no;
   }
   
   var show_page = function(){
        var current_page_no = get_current_page();
        current_page_no = current_page_no == 0 ? 1 : current_page_no;
        var total_page = get_max_page();
        var precentage = parseInt(current_page_no * 100 / total_page);
        $("#current-page-no").html(current_page_no + '/' + total_page + '<br />' + precentage + '%');
   };show_page();


    var MINIMUM_SIZE = 800;
    var MAXIMUM_SIZE = 1000;

    $("#zoom-in").click(function(){
        var width = parseInt($(".piece").css('width').replace("px", "'"));
        if (width < MAXIMUM_SIZE){
            $(".piece").animate({width: '+=50px'}, 'fast')
        }
    });

   $("#zoom-out").click(function(){
        var width = parseInt($(".piece").css('width').replace("px", "'"));
        if (width > MINIMUM_SIZE){
            $(".piece").animate({width: '-=50px'}, 'fast')
        }
    });

   $("#arrow-up").click(function(){
        var current_page = get_current_page();
        if (current_page > 1){
            $.scrollTo($("#page-hash-" + (current_page - 1)), 500);
        }
   })

   $("#arrow-down").click(function(){
        var current_page = get_current_page();
        if (current_page < get_max_page()){
            $.scrollTo($("#page-hash-" + (current_page + 1)), 500);
        }
   })

   $(window).scroll(function(){
        show_page();
   });

$('#pdf-board>img').load(show_page());
});

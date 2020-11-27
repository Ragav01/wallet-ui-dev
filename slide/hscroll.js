$('.card-row').slick({
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
});
$('.fev-user').slick({
    infinite: true,
    slidesToScroll: 3,
    variableWidth: true,
});

// animation====================================================================================================
$(document).ready(function(){
    $('#transition').click(function(){
        $(".home").hide();
        $('.transition-con').show();

    });
    // transitionBack
    $('#transitionBack').click(function(){
        $('.transition-con').hide();
        $(".home").show();
    });
    // send
    $('#send').click(function(){
        $('.transition-con').hide();
        $(".alert").show();
        $(".cricle").addClass("animate__bounceIn");
        $(".line").addClass("animate__zoomIn");
    });
    // alert-back
    $('#alert-back, #trans-again').click(function(){
       $(".alert").hide();
       $('.transition-con').show();

    });
    // See-stats
    $('#See-stats').click(function(){
       $(".alert").hide();
       $('.transition-con').hide();
       $('.home').show();
    });
    // add_active_class
    $('.users').click(function(){
        $('.users').removeClass("active");
        $(this).addClass("active");
        var name = $(this).find('p').text();
        var image = $(this).find('img').attr('src');
            // alert("Your are a - " + image);
        $("#uname").html(name);
        $("#uimg").attr('src',image);

    });

    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='samount']:checked").val();
        if(radioValue){
            // alert("Your are a - " + radioValue);
            $("#amount").val(radioValue);
            $("#send").html("send $"+(radioValue));
            $("#price").html("$"+(radioValue));
        }
    });
    $("#amount").keyup(function(){
        $("input:radio").removeAttr("checked");
        let amount = $("#amount").val();
        $("#send").html("send $"+(amount));
        $("#price").html("$"+(amount));
    });
});
// animation_END ====================================================================================================

$(document).ready(function(){
    
});
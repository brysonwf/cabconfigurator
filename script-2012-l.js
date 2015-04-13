
var url = location.href;  // entire url including querystring - also: window.location.href;
var baseURL = url.substring(0, url.indexOf('/', 14));
var isConsumer = false;
var isDealer = false;
var couponhtml = null;

function getUrlVar(requestedKey) {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    if (typeof requestedKey == 'undefined') {
        return vars;
    } else {
        return vars[requestedKey];
    }
}

function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
    && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
}



$(document).ready(function() {

    $('#phone').keyup( function(){
        var temp = $(this).attr('value');
        $(this).attr('value', temp.replace(/[^\d\-]/g,""));
    });

    //hide 3 cosmetic option menus
    //$('.add-to-cart-options').find('#custcol40').parent().parent().parent().next().hide().next().hide().next().hide().next().hide();
    $('.add-to-cart-options').each( function(){
        $(this).find('#custcolcabinetoptionspiping').parent().parent().parent().hide();
        $(this).find('#custcolcabinetoptionspiping_m').parent().parent().parent().hide();
        $(this).find('#custcolcabinettolexcolor').parent().parent().parent().hide();
        $(this).find('#custcolcabinetgrillcloth').parent().parent().parent().hide();
        $(this).find('#custcolcabinethandle').parent().parent().parent().hide();
        $(this).find('#custcolcabinetoptionsfeet').parent().parent().parent().hide();
        $(this).find('#custcolcabinetoptionscorners').parent().parent().parent().hide();
    });

    //hide corners menu
    $('.add-to-cart-options').find('#custcol43').parent().parent().parent().next().hide();

    //hide Chassis menu
    $('.add-to-cart-options').find('#custcol47').parent().parent().parent().next().hide();

    //hide Baffle menu
    $('.add-to-cart-options').find('#custcol48').parent().parent().parent().next().hide();

    //hide PackPanel menu
    $('.add-to-cart-options').find('#custcol49').parent().parent().parent().next().hide();

    //hide Wiring Harness menu
    $('.add-to-cart-options').find('#custcol51').parent().parent().parent().next().hide();

    //show costmetic stuff
    $('.add-to-cart-options').each(function(){
        $(this).find('select[name="custcol40"]').change(function(){
            if ($(this).val() == 1){
                $(this).parent().parent().parent().parent().find('#custcolcabinetoptionspiping').val('').parent().parent().parent().hide();
                $('#piping-preview-container').html('<h3></h3><div></div>');
                $(this).parent().parent().parent().parent().find('#custcolcabinetoptionspiping_m').val('').parent().parent().parent().hide();
                $('#pipingm-preview-container').html('<h3></h3><div></div>');
                $(this).parent().parent().parent().parent().find('#custcolcabinettolexcolor').val('').parent().parent().parent().hide();
                $('#tolex-preview-container').html('<h3></h3><div></div>');
                $(this).parent().parent().parent().parent().find('#custcolcabinetgrillcloth').val('').parent().parent().parent().hide();
                $('#grillcloth-preview-container').html('<h3></h3><div></div>');
                $(this).parent().parent().parent().parent().find('#custcolcabinethandle').val('').parent().parent().parent().hide();
                $('#handle-preview-container').html('<h3></h3><div></div>');
                $(this).parent().parent().parent().parent().find('#custcolcabinetoptionsfeet').val('').parent().parent().parent().hide();
                $('#feet-preview-container').html('<h3></h3><div></div>');
                $(this).removeClass('active');
            }else if ($(this).val() == 2){
                $(this).parent().parent().parent().parent().find('#custcolcabinetoptionspiping').parent().parent().parent().show();
                $(this).parent().parent().parent().parent().find('#custcolcabinetoptionspiping_m').parent().parent().parent().show();
                $('.item-drill-down #custcolcabinetoptionspiping').change();
                $(this).parent().parent().parent().parent().find('#custcolcabinettolexcolor').parent().parent().parent().show();
                $('.item-drill-down #custcolcabinettolexcolor').change();
                $(this).parent().parent().parent().parent().find('#custcolcabinetgrillcloth').parent().parent().parent().show();
                $('.item-drill-down #custcolcabinetgrillcloth').change();
                $(this).parent().parent().parent().parent().find('#custcolcabinethandle').parent().parent().parent().show();
                $('.item-drill-down #custcolcabinethandle').change();
                $(this).parent().parent().parent().parent().find('#custcolcabinetoptionsfeet').parent().parent().parent().show();
                $('.item-drill-down #custcolcabinetoptionsfeet').change();
                $(this).addClass('active');
            }else if (($(this).val() == 4) || ($(this).val() == 5)){
                $(this).parent().parent().parent().parent().find('#custcolcabinetoptionspiping').val('').parent().parent().parent().hide();
                $(this).parent().parent().parent().parent().find('#custcolcabinetoptionspiping_m').val('').parent().parent().parent().hide();
                $('.item-drill-down #custcolcabinetoptionspiping').change();
                $(this).parent().parent().parent().parent().find('#custcolcabinettolexcolor').val('').parent().parent().parent().hide();
                $('.item-drill-down #custcolcabinettolexcolor').change();
                $(this).parent().parent().parent().parent().find('#custcolcabinetgrillcloth').val('').parent().parent().parent().hide();
                $('.item-drill-down #custcolcabinetgrillcloth').change();
                $(this).parent().parent().parent().parent().find('#custcolcabinethandle').val('').parent().parent().parent().hide();
                $('.item-drill-down #custcolcabinethandle').change();
                $(this).parent().parent().parent().parent().find('#custcolcabinetoptionsfeet').val('').parent().parent().parent().hide();
                $('.item-drill-down #custcolcabinetoptionsfeet').change();
                $(this).addClass('active');
            }
        });
        $(this).find('select[name="custcol62"]').change(function(){
            if ($(this).val() == 1){
                $(this).parent().parent().parent().parent().find('#custcolcabinetoptionscorners').val('').parent().parent().parent().hide();
            }else{
                $(this).parent().parent().parent().parent().find('#custcolcabinetoptionscorners').parent().parent().parent().show();
            }
        });
        $(this).find('select[name="custcol43"]').change(function(){
            if ($(this).val() == 1){
                $(this).parent().parent().parent().next().find('select').val("").parent().parent().parent().hide();
                $(this).removeClass('active');
            }else{
                $(this).parent().parent().parent().next().show();
                $(this).addClass('active');
            }
        });
        $(this).find('select[name="custcol47"]').change(function(){
            if ($(this).val() == 1){
                $(this).parent().parent().parent().next().find('select').val("").parent().parent().parent().hide();
                $(this).removeClass('active');
            }else{
                $(this).parent().parent().parent().next().show();
                $(this).addClass('active');
            }
        });
        $(this).find('select[name="custcol48"]').change(function(){
            if ($(this).val() == 1){
                $(this).parent().parent().parent().next().find('select').val("").parent().parent().parent().hide();
                $(this).removeClass('active');
            }else{
                $(this).parent().parent().parent().next().show();
                $(this).addClass('active');
            }
        });
        $(this).find('select[name="custcol49"]').change(function(){
            if ($(this).val() == 1){
                $(this).parent().parent().parent().next().find('select').val("").parent().parent().parent().hide();
                $(this).removeClass('active');
            }else{
                $(this).parent().parent().parent().next().show();
                $(this).addClass('active');
            }
        });
        $(this).find('select[name="custcol51"]').change(function(){
            if ($(this).val() == 1){
                $(this).parent().parent().parent().next().find('select').val("").parent().parent().parent().hide();
                $(this).removeClass('active');
            }else{
                $(this).parent().parent().parent().next().show();
                $(this).addClass('active');
            }
        });


        //catalog 2014 scripts

        $('#custcolcatalogoptions').parent().parent().parent().parent().parent().hide();
        if($('#login-email .level').html() == 'Dealer'){
            $('#custcolcatalogoptions').parent().parent().parent().parent().parent().show();
        }

    });

    $('div.sort').parent().parent().parent().parent().parent().parent().addClass("sortbar");
    $('div.pageination').parent().parent().parent().parent().parent().parent().parent().parent().addClass("pageinationbar");


    //attach autocomplete
    $("#search-form-input").autocomplete({
        //define callback to format results
        source: function(req, add){
            //pass request to server
            $.getJSON("http://mojostuff.com/search/items.php?callback=?", req, function(data) {
                //create array for response objects
                var suggestions = [];
                //process response
                $.each(data, function(i, val){
                    suggestions.push(val.name);
                });
                //pass array to callback
                add(suggestions);
            });
        },
        minLength: 2,
        //define select handler
        select: function(e, ui) {
            //create formatted friend
            var itemName = ui.item.value;
            //add friend to to div
            $("#search-form-input").html(itemName);
        },
        //define select handler
        change: function() {}
    });


    $(".fancybox").fancybox();

    if ( (customerEmail != '') && ( (customerLevel == 'Online Price')  || (customerLevel == '') || (customerLevel == 'Base Price') ) ){
        $("#consumer-promocode-div").show();
        isConsumer = true;
    } else if ( (customerEmail != '') && ( (customerLevel == 'Dealer')  || (customerLevel == 'OEM') ) ){
        isDealer = true;
    }

    if ($('#div__label').html() == ''){
        $('#div__label').hide();
    }


    //search query
    try{
        var searchstring = getUrlVar('search').split("+");
        var newsearchstring = '';
        for(var x in searchstring){
            if (searchstring[x] != ''){
                var decode = searchstring[x];
                newsearchstring = newsearchstring+decode+" ";
            }
        }
        $("#search-form-input").get(0).value = newsearchstring;
    }catch(e){
    }

    $(".feedback-banner-a").fancybox({
        'width'				: 630,
        'height'			: '90%',
        'autoScale'     	: false,
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'type'				: 'iframe',
        'titleShow'			: false
    });
    $('.show-feedback-form').click(function(){
        $(".feedback-banner-a").click();
    });

    $(".show-pricematch-form").fancybox({
        'width'				: 620,
        'height'			: 580,
        'autoScale'     	: false,
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'type'				: 'iframe',
        'titleShow'			: false
    });

    $(".show-free-catalog-form").fancybox({
        'width'				: 630,
        'height'			: '90%',
        'autoScale'     	: false,
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'type'				: 'iframe',
        'titleShow'			: false
    });

    //item drill down

    $('.price-matching-a').click(function(){
        $(".price-matching-info").toggle();
    });


    var related_size = $(".related-item-cell").size();
    if (related_size == 0){
        $(".related-items").remove();
    }


    if ($(".stock-status span").html() == "Out of Stock"){
        $("#stock-notification").show();
    }
    $("#stock-notification-button").click(function(){
        $.get("http://mojostuff.com/scripts/notify.php?itemid="+$("#stock-notification-id").val()+"&email="+$("#stock-notification-email").val()+"&name="+$("#stock-notification-name").val()+"&url="+location.href+"");
        $("#stock-notification").html("Thanks!")
    });

    //promo code and checkout pages
    cuponhtml_text = $("#coupon-code").html();

    $("#segas-tshirt-info-link").fancybox({
        'titlePosition'		: 'inside',
        'transitionIn'		: 'none',
        'transitionOut'		: 'none'
    });


    //check out page
    if ($('body').hasClass('checkout')){
        $("#shippingcarrierselect").parent().parent().addClass("shipping-carrier-dropdown").parent().addClass("shipping-carrier-dropdown-table");
        /*if ( (cuponhtml_text == "FREESHIP") || (cuponhtml_text == "LABORDAY2011")){
         $("#custbodysegas_tshirt_size").parent().parent().parent().addClass("custbodysegas_tshirt_size-dropdown");
         }else{*/
        $("#custbodysegas_tshirt_size").parent().parent().parent().addClass("custbodysegas_tshirt_size-dropdown").hide();
        /*}*/
    }


    //promocode
    if ($("#removecoupon").length !=0){
        if (isDealer){
            if (cuponhtml_text == "freeship"){
                $("#removecoupon").parent().parent().append('<a id="free-ship-consumers-only" href="#free-ship-consumers-only"><img src="https://checkout.netsuite.com/c.923962/img/banner-freeship-alert.png" border="0" alt="Free Shipping Consumers Only" /></a>');
                $('#tbl_submitter').remove();
                $('#free-ship-consumers-only').click(function(){
                    $("#removecoupon").click();
                    $(this).remove();
                })
            }
            if (cuponhtml_text == "wonderyears"){
                $("#removecoupon").parent().parent().append('<a id="free-ship-consumers-only" href="#free-ship-consumers-only"><img src="http://mojotone.com/img/popup-alert-wonderyears.png" border="0" alt="Wonderyears is consumers only." /></a>');
                $('#tbl_submitter').remove();
                $('#free-ship-consumers-only').click(function(){
                    $("#removecoupon").click();
                    $(this).remove();
                })
            }
            if (cuponhtml_text == "laborday2011"){
                $("#removecoupon").parent().parent().append('<a id="free-ship-consumers-only" href="#free-ship-consumers-only"><img src="http://mojotone.com/img/banner-laborday2011-alert.png" border="0" alt="Laborday2011 is Consumers only." /></a>');
                $('#tbl_submitter').remove();
                $('#free-ship-consumers-only').click(function(){
                    $("#removecoupon").click();
                    $(this).remove();
                })
            }
        }
        if (cuponhtml_text == "freeship" || cuponhtml_text == "reeship<"){
            $("#custbody_back_order_status option[value='1']").remove();
        }

    }
    //end promocode

    //pay with paypal
    /*

     if ($('input#submitter').val() == 'Pay with PayPal'){
     $('input#submitter').parent().parent().prepend('<div class="paypal-noadd-message">Paypal orders <b>cannot</b> have items added after they are placed: <input id="paypal-noadd-message-confirm" name="paypal-noadd-message-confirm" type="checkbox" /> <label for="paypal-noadd-message-confirm">I Agree</label></div>');
     $('input#submitter').attr('disabled', 'disabled');
     $('input#submitter').addClass('paypal-disabled');
     $('#paypal-noadd-message-confirm').click( function(){
     if ($('#paypal-noadd-message-confirm').attr('checked')){
     if (!$('input#submitter').hasClass('backorder-disabled')){
     $('input#submitter').removeAttr('disabled');
     }
     $('input#submitter').removeClass('paypal-disabled');
     }else{
     $('input#submitter').attr('disabled', 'disabled');
     $('input#submitter').addClass('paypal-disabled');
     }
     })
     }

     backorderDropDown();

     //pay while backordering
     $('#custbody_back_order_status').change(function(){
     backorderDropDown();
     });

     */

    /*
     //autocomplete
     $('.item-title a').each(function(){
     $.get("http://mojostuff.com/scripts/items.php?item="+$(this).html());
     });
     $('.category-title a').each(function(){
     $.get("http://mojostuff.com/scripts/items.php?item="+$(this).html()+"&o=2&content="+$(this).parent().find('.descrption .text').html());
     });


     // content refinement

     if ($("#item-drill-down-image a").html() == ""){
     $.get("http://mojostuff.com/scripts/flag.php?issue=noImg&item="+$('.item-drill-down-title').html());
     }

     $("#flag-image").click(function(){
     $.get("http://mojostuff.com/scripts/flag.php?issue=badImg&item="+$('h2').html());
     $(this).html('Thanks!');
     });

     $("#flag-description").click(function(){
     $.get("http://mojostuff.com/scripts/flag.php?issue=badDescription&item="+$('h2').html());
     $(this).html('Thanks for letting us know. We will try to source information for this item.');
     });
     */

    /*
     if ( ($(".item-drill-down .description").html() == "<p></p>") || ($(".item-drill-down .description").html() == "") ){
     $.get("http://mojostuff.com/scripts/flag.php?issue=noDescription&item="+$('.item-drill-down-title').html());
     $("#flag-description").remove();
     }*/

    // end content refinement

});


function backorderDropDown(){
    if ($('#custbody_back_order_status').val() == 1){
        $('input#submitter').parent().parent().prepend('<div class="backorder-message-div"><table style="padding:0; margin:0;"><tr><td>If you backorder items that are not in stock, you are responsible for <b>separate</b> shipping charges on those items.<br/> If the total weight of the backorder is 2lbs or less shipping is free.</td><td> <input id="backorder-message-confirm" name="backorder-message-confirm" type="checkbox" /> <label for="backorder-message-confirm">I Agree</label></td></tr></div>');
        $('input#submitter').attr('disabled', 'disabled');
        $('input#submitter').addClass('backorder-disabled');
        $('#backorder-message-confirm').click( function(){
            if ($('#backorder-message-confirm').attr('checked')){
                if (!$('input#submitter').hasClass('paypal-disabled')){
                    $('input#submitter').removeAttr('disabled');
                }
                $('input#submitter').removeClass('backorder-disabled');
            }else{
                $('input#submitter').attr('disabled', 'disabled');
                $('input#submitter').addClass('backorder-disabled');
            }
        });
    }else{
        $('.backorder-message-div').remove();
        if (!$('input#submitter').hasClass('paypal-disabled')){
            $('input#submitter').removeAttr('disabled');
        }
        $('input#submitter').removeClass('backorder-disabled');
    }
}


$(window).load(function(){
    /*
     var comments_count = $("#dsq-num-posts").html();
     if (comments_count != null){
     $("#comments-item-count").html("("+comments_count+")");
     }
     */

    // content refinement
    $('.image').each(function(){
        var title = $(this).parents(".item").find('.item-number').html();

        if ($(this).find('img').length){ // if our image has length

            var length = $(this).find('img').attr('title').length; //query the length

            //test to see if img is a PNG
            if ( ( ($(this).find('img').attr('title').substring(length-3)).toLowerCase() ) == 'png'){
                if (title != 'null'){
                    $.get("http://mojostuff.com/scripts/flag.php?issue=png&item="+encodeURI(title));
                }
                //test to see if img is comming soon img
            }else if ( $(this).find('img').attr('title') == 'COMING-SOON-S.jpg'){
                $.get("http://mojostuff.com/scripts/flag.php?issue=commingSoonImage&item="+encodeURI(title));
                $('#flag-image').remove();
            }
        }else{//no image
            $.get("http://mojostuff.com/scripts/flag.php?issue=noImg&item="+encodeURI(title));
        }
    });
    // end content refinement

});
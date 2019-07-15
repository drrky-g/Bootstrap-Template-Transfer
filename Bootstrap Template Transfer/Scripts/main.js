jQuery(document).ready(function($) {

  // Header fixed and Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });

  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
    $('#header').addClass('header-fixed');
  }

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Gallery - uses the magnific popup jQuery plugin
  $('.gallery-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  // custom code
    //code toggles
    $("#code-display-fb").hide();
    $('#code-display-math').hide();
    $('#code-display-fact').hide();
    $('#code-display-soaf').hide();
    $('#code-display-pal').hide();

    $("#btnToggleMath").click(function () {
        $("#code-display-math").toggle();

        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    })

    $("#btnToggleFact").click(function () {
        $("#code-display-fact").toggle();

        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    })

    $("#btnToggleSOAF").click(function () {
        $("#code-display-soaf").toggle();

        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    })

    $("#btnTogglePal").click(function () {
        $("#code-display-pal").toggle();

        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    })

    $("#btnToggleFB").click(function () {
        $("#code-display-fb").toggle();

        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    })



    //Sum of All Fears Scripts
    //submit button listener
    $("#fearSubmit").click(function () {


        //store inputs
        var indexZero = +$("#index0").val();
        var indexOne = +$("#index1").val();
        var indexTwo = +$("#index2").val();
        var indexThree = +$("#index3").val();
        var indexFour = +$("#index4").val();
        var kValue = +$("#kvalue").val();

        console.log('Values stored.');
        console.log('K is...');
        console.log(kValue);

        //push values into array
        var sOAFears = [
            indexZero,
            indexOne,
            indexTwo,
            indexThree,
            indexFour
        ];


        console.log('Array Built')
        console.log(sOAFears);

        for (var i = 0; i < 4; i++) {
            //going through array and taking final value for comparing sums
            var pulledNumber = sOAFears.pop();
            console.log('The array just popped ' + pulledNumber + ' to compare.')
            //remaining array values shown in console
            console.log('Your remaining array values are:')
            console.log(sOAFears);
            //add pulled value to remaining array indexes
            console.log('Adding pulled number to array:')
            var modifiedArray = sOAFears.map(addPulled)

            function addPulled(num) {
                return num + pulledNumber;

            }

            console.log(modifiedArray);

            //find funct
            function doesKExist(modifiedArray) {
                return modifiedArray == kValue;
            }

            //store sum being searched in variable
            var kWasFound = modifiedArray.find(doesKExist);
            console.log(kWasFound);


            if (kWasFound === kValue) {
                break;
            }

        }
        //show result in output field
        if (kValue === kWasFound) {
            $("#koutput").text("K Exists!")
            console.log("K Exists!")
        } else {
            $("#koutput").text("K was not found.")
            console.log("K is not found.")
        }


    })

    //clear button
    $("#fearClear").click(function () {
        $("#index0").val('');
        $("#index1").val('');
        $("#index2").val('');
        $("#index3").val('');
        $("#index4").val('');
        $("#kvalue").val('');
        $("#koutput").text('');

    })


    //FizzBuzz Scripts

    $("#btnFBRun").click(function () {
        //Store Inputs
        var fizzNum = +$("#fizzInput").val();
        var buzzNum = +$("#buzzInput").val();
        var fbNum = fizzNum * buzzNum;
        //Form array
        var outputArray = []
        //fill array 1-100
        for (var i = 1; i < 101; i++) {
            if (i % fbNum == 0) {
                //isolate numbers divided by both
                outputArray.push("<span id='fizzbuzzcolor'>FizzBuzz</span>");
            } else if (i % fizzNum == 0) {
                //isolate numbers divided by fizz
                outputArray.push("<span id='fizzcolor'>Fizz</span>");
            } else if (i % buzzNum == 0) {
                //isolate numbers divided by buzz
                outputArray.push("<span id='buzzcolor'>Buzz</span>");
            } else outputArray.push(i);
        }
        //convert array into string
        var fbArray = outputArray.join(' ');
        //display results
        $("#fbOutput").html(fbArray);






        //logs for testing
        console.log('inputs secured, manipulating data...')
        console.log(fizzNum);
        console.log(buzzNum);
        console.log(fbNum);
        console.log(outputArray);


    })

    $('#btnFBClear').click(function () {
        $('#fbOutput').text('');
        $('#fizzInput').val('');
        $('#buzzInput').val('');
    })

    //Factorial Scripts
    //Listener for Button Press
    $("#startFactor").click(function () {
        //Collect Data
        var factEntry = +$("#factInput").val();
        //Manipulate Data
        var factoredOutput = Factorial(factEntry);
        //Output Manipulated Data
        $("#factOutput").text(factEntry + " has a factorial of " + factoredOutput + ".")
    });

    //Clear Button Functionality
    $("#clearFactor").click(function () {
        $("#factOutput").text('Your factorial will appear here.');
        $("#factInput").val('');
    })


    //Factorial function being called by factoredOutput variable
    function Factorial(num) {
        if (num > 0) {
            for (var loop = num - 1; loop > 1; loop--) {
                num *= loop;
            }
        }
        else if (num == 0) {
            num = 1;
        }
        else {
            num = "undefined";
        }
        return num;

    }

    //Palindrome Scripts
    //Run Button Listener
    $("#palBtn").click(function () {
        //Store Input
        var word = $("#palIn").val();
        //Break word into an array of characters
        var wordBreak = word.split('')
        //Flip array
        var flippedArray = wordBreak.reverse();
        //Convert array back into string
        var flippedWord = flippedArray.join('');



        //logs for testing
        console.log('storing data and running methods...')
        console.log(word);
        console.log(wordBreak);
        console.log(flippedArray);
        console.log(flippedWord);



        if (word === flippedWord) {
            $("#palOut").text('Looks like ' + word + ' is a palindrome!')
        } else {
            $("#palOut").text('Unfortunately that is not a palindrome.')
        }
    })

    //Clear Button Listener
    $("#palClear").click(function () {
        $("#palOut").text('');
        $("#palIn").val('')
    })

    //Basic Math Scripts
    //submit button event listener
    $("#mathbtn").click(function () {
        //Step 1: Get User Data
        var num1 = +$("#num1").val();
        var num2 = +$("#num2").val();
        var num3 = +$("#num3").val();
        var num4 = +$("#num4").val();
        var num5 = +$("#num5").val();
        //Step 2: Manipulate data with calculations
        var smallest = Math.min(num1, num2, num3, num4, num5);
        var largest = Math.max(num1, num2, num3, num4, num5);
        var sum = num1 + num2 + num3 + num4 + num5;
        var product = num1 * num2 * num3 * num4 * num5;
        var mean = sum / 5;
        //Display Results
        $("#smallest").text("The smallest number in the set is: " + smallest);
        $("#largest").text("The largest number in the set is: " + largest);
        $("#product").text("The product of the numbers is: " + product);
        $("#sum").text("The sum of the numbers is: " + sum);
        $("#mean").text("The average of the numbers in the set is: " + mean);

    })
    //clear button event listener
    $("#mathclear").click(function () {
        $("#num1").val('');
        $("#num2").val('');
        $("#num3").val('');
        $("#num4").val('');
        $("#num5").val('');
        $("#smallest").text('');
        $("#largest").text('');
        $("#product").text('');
        $("#sum").text('');
        $("#mean").text('');
    })
});



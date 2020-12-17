$(document).ready(function () {

    var sum = 0.0;

    $(".dugme").click(function () {

        $("#pitanja").submit(function(e) {
            e.preventDefault();
        });
        
        if ($("[name = radio1]").is(':checked')) {

            var check_value = $('.prviRadio:checked').val();
            sum = sum + parseFloat(check_value);
        }
        else{

            sum = sum + 0;
        }


        if ($("[name = radio2]").is(':checked')) {

            var check_value = $('.drugiRadio:checked').val();
            sum = sum + parseFloat(check_value);
        }
        else{

            sum = sum + 0;
        }


        if ($("[name = radio3]").is(':checked')) {

            var check_value = $('.treciRadio:checked').val();
            sum = sum + parseFloat(check_value);
        }
        else{

            sum = sum + 0;
        }


        if ($("[name = check11]").is(':checked') && $("[name = check13]").is(':checked')) {

            sum = sum + 1;
        } else {

            sum = sum + 0;
        }


        if ($("[name = check21]").is(':checked') && $("[name = check22]").is(':checked')) {

            sum = sum + 1;
        } else {

            sum = sum + 0;
        }

        alert("Uspešno ste uradili zadatak, vaš broj bodova je: " + sum + "/5");

    });


    $(".dugme2").click(function () {

        $("#pitanja").submit(function(e) {
            e.preventDefault();
        });

        $('input[type=checkbox]').each(function () {
            this.checked = false;
        });

        $('input[type=radio]').each(function () {
            this.checked = false;
        });
    });

    
    $(".dugme3").click(function(){

        $("#pitanja").submit(function(e) {

            e.preventDefault();
        });

        $(".N1").css("background-color","red");
        $(".T1").css("background-color","green");

    });
});

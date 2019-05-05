var fName = "";
var lName = "";
var Email = "";
var cantry = "";
var age = 0;
var gender = "";



$(document).ready(function () {


    $("#buttonHead").click(function () {
        $('html, body').animate({
            scrollTop: $("#myFrom").offset().top
        }, 500);
    });

    $(".btnNext").click(function () {
        fName = $("#fname").val();
        lName = $("#lname").val();
        Email = $("#Email").val();
        cantry = $("#contry option:selected").text();
        age = $("#year").val();
        gender = $(".jender input[type='radio']:checked").val();
        var myerorr = false;
        var objecterorr = "";



        if (fName != "") {
            if (lName != "") {
                if (Email != "") {
                    if (cantry != "היבשת שלך") {
                        if (gender == "זכר" || gender == "זכר") {
                            if (age > 1) {
                                if ($('input[id="AC"]:checked').val() == "true") {
                                    alert("הצלחה");



                                } else {
                                    myerorr = true;
                                    objecterorr = ".AC";
                                }
                            } else {
                                myerorr = true;
                                objecterorr = "#year";
                            }
                        } else {
                            myerorr = true;
                            objecterorr = ".jender";
                        }
                    } else {
                        myerorr = true;
                        objecterorr = "#contry";
                    }
                } else {
                    myerorr = true;
                    objecterorr = "#Email";
                }
            } else {
                myerorr = true;
                objecterorr = "#lname";
            }
        } else {
            myerorr = true;
            objecterorr = "#fname";

        }
        var allObject = ["#fname", "#lname", "#Email", "#contry", ".jender", "#year", ".AC"];

        $("#fname").tooltip("hide");
        $("#fname").mouseout(function () {
            $("#fname").tooltip("hide");
        });
        $("#fname").focusout(function () {
            $("#fname").tooltip("hide");
        });
        $("#fname").hover(function () {
            $("#fname").tooltip("hide");
        });
        $("#fname").click(function () {
            $("#fname").tooltip("hide");
        });
        $("#fname").mousedown(function () {
            $("#fname").tooltip("hide");
        });
        $("#fname").mouseup(function () {
            $("#fname").tooltip("hide");
        });


        $("#lname").tooltip("hide");
        $("#lname").mouseout(function () {
            $("#lname").tooltip("hide");
        });
        $("#lname").focusout(function () {
            $("#lname").tooltip("hide");
        });
        $("#lname").hover(function () {
            $("#lname").tooltip("hide");
        });
        $("#lname").click(function () {
            $("#lname").tooltip("hide");
        });
        $("#lname").mousedown(function () {
            $("#lname").tooltip("hide");
        });
        $("#lname").mouseup(function () {
            $("#lname").tooltip("hide");
        });

        $("#Email").tooltip("hide");
        $("#Email").mouseout(function () {
            $("#Email").tooltip("hide");
        });
        $("#Email").focusout(function () {
            $("#Email").tooltip("hide");
        });
        $("#lname").hover(function () {
            $("#lname").tooltip("hide");
        });
        $("#Email").click(function () {
            $("#Email").tooltip("hide");
        });
        $("#Email").mousedown(function () {
            $("#lname").tooltip("hide");
        });
        $("#Email").mouseup(function () {
            $("#lname").tooltip("hide");
        });

        $("#contry").tooltip("hide");
        $("#contry").mouseout(function () {
            $("#contry").tooltip("hide");
        });
        $("#contry").focusout(function () {
            $("#contry").tooltip("hide");
        });
        $("#contry").hover(function () {
            $("#contry").tooltip("hide");
        });
        $("#contry").click(function () {
            $("#contry").tooltip("hide");
        });
        $("#contry").mousedown(function () {
            $("#contry").tooltip("hide");
        });
        $("#contry").mouseup(function () {
            $("#contry").tooltip("hide");
        });


        if (myerorr == true) {


            $(objecterorr).tooltip("show");
            $(objecterorr).mouseout(function () {
                $(objecterorr).tooltip("show");
            });
            $(objecterorr).focusout(function () {
                $(objecterorr).tooltip("show");
            });
            $(objecterorr).hover(function () {
                $(objecterorr).tooltip("show");
            });
            $(objecterorr).click(function () {
                $(objecterorr).tooltip("show");
            });
            $(objecterorr).mousedown(function () {
                $(objecterorr).tooltip("show");
            });
            $(objecterorr).mouseup(function () {
                $(objecterorr).tooltip("show");
            });
        }




    });

});
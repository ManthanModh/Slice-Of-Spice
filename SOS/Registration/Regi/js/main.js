
function validate()
{
   a=document.getElementById("password");
b=document.getElementById("re_password");
If(a!=b)
{
    Alert("password must be same");
}
}

// (function($) {

//     $( "#birth_date" ).datepicker({
//         dateFormat: "mm - dd - yy",
//         showOn: "both",
//         buttonText : '<i class="zmdi zmdi-calendar-alt"></i>',
//     });

//     $('#signup-form').validate(
//         {
//         rules : {
//             first_name : {
//                 required: true,
//             },
//             last_name : {
//                 required: true,
//             },
            // phone_number : {
            //     required: true
            // },
            // password : {
            //     required: true
            // },
            // re_password : {
            //     required: true,
            //     equalTo: "#password"
            // }
    //     },
    //     onfocusout: function(element) {
    //         $(element).valid();
    //     },
    // });


    
      
//     jQuery.extend(jQuery.validator.messages, {
//         required: "",
//         remote: "",
//         email: "",
//         url: "",
//         date: "",
//         dateISO: "",
//        // number: "",
//         //digits: "",
//         creditcard: "",
//         equalTo: ""
//     });
// })(jQuery);
$(document).ready(function() {

    //js for second page//
     $("#pan_form").change(function(){
       var type_vals =  $("#pan_form").val();
      // alert(type_vals);
        if(type_vals == "PAN")
        {
            $("#pan_number").prop("disabled", false);
        }
        else
        {
            $("#pan_number").prop("disabled", true);
        }
        
    });

    $("#entity").change(function() {
        var val = $(this).val();
        if (val == "individual") {
            $("#title").html("<option value='mr'>Mr.</option><option value='miss'>Miss.</option><option value='mrs'>Mrs.</option>");
        } else if (val == "non-individual") {
            $("#title").html("<option value='mx'>Mx</option><option value='ms'>Ms.</option>");

        }
    });



    $(".lead_form").show();
    $(".addtional_form").hide();
    $(".vechical_form").hide();
    $(".category_form").hide();
    $(".customer_form").hide();
    $(".lead_save").show();
    $(".addtional_save").hide();
    $(".vechical_save").hide();
    $(".category_save").hide();
    $(".customer_save").hide();


    $("#lead_details").click(function() {
        $(".lead_form").show();
        $(".category_form").hide();
        $(".vechical_form").hide();
        $(".customer_form").hide();
        $(".applicant_buttons").hide();
        $(".addtional_form").hide();
        $(".dataTable").hide();

        $(".lead_save").show();
        $(".vechical_save").hide();
        $(".addtional_save").hide();
        $(".category_save").hide();
        $(".customer_save").hide();
    });


    $("#vechical_details").click(function() {
        $(".lead_form").hide();
        $(".category_form").hide();
        $(".vechical_form").show();
        $(".customer_form").hide();
        $(".applicant_buttons").hide();
        $(".dataTable").hide();

        $(".lead_save").hide();
        $(".vechical_save").show();
        $(".category_save").hide();
        $(".customer_save").hide();
    });


    $("#customer_category").click(function() {
        $(".lead_form").hide();
        $(".category_form").show();
        $(".vechical_form").hide();
        $(".customer_form").hide();
        $(".applicant_buttons").hide();
        $(".dataTable").hide();

        $(".lead_save").hide();
        $(".vechical_save").hide();
        $(".category_save").show();
        $(".customer_save").hide();
    });


    $("#customer_details").click(function() {
        $(".lead_form").hide();
        $(".category_form").hide();
        $(".vechical_form").hide();
        $(".customer_form").show();
        $(".applicant_buttons").hide();
        $(".dataTable").hide();

        $(".lead_save").hide();
        $(".vechical_save").hide();
        $(".category_save").hide();
        $(".customer_save").show();
    });

    //for selecting sourcing channel

    $("#sourcing_channel").change(function() {
        var val = $(this).val();
        if (val == "Assets Division") {
            $("#sourcing_type").html(" <select class='form-control mandatory' id='sourcing_type' multiple='multiple'>     <option value='DSA'>DSA</option><option value='Dealers'>Dealers</option><option value='Connectors'>Connectors</option><option value='Direct'>Direct/Employee/DSE</option><option value='Manufacturers'>Manufacturers</option></select>");

        } else if (val == "Liability Division") {
            $("#sourcing_type").html("<option value='Liability Branch Code' >Liability Branch Code</option>");
            $("#sourcing_code").val("Employee Code");
        } else if (val == "Web based") {
            $("#sourcing_type").html("<option value='Corporate Website'>Corporate Website</option><option value='Internet Banking'>Internet Banking</option><option value='Mobile Banking'>Mobile Banking</option>");
            //$("#sourcing_code").html("<option value='Not applicable'>Not applicable</option>");
        } else if (val == "Campaign") {
            $("#sourcing_type").html("<option value='Not applicable'>Not applicable</option>");
            $("#sourcing_code").val("Campaign Code");

        } else {
            $("#sourcing_type").html("<option value='Not applicable'>Not applicable</option>");
            $("#sourcing_code").val("Employee Code");

        }
    });

    $("#sourcing_type").change(function() {
        var val = $(this).val();
        if (val == "Direct") {
            $("#sourcing_code").val("Employee Code");

        } else if ((val == "Corporate Website") || (val == "Internet Banking") || (val == "Mobile Banking")) {
            //$("#sourcing_type").html("<option value='Corporate Website'>Corporate Website</option><option value='Internet Banking'>Internet Banking</option><option value='Mobile Banking'>Mobile Banking</option>");
            $("#sourcing_code").val("Not applicable");
        } else {
            $("#sourcing_code").val("Vendor Code");

        }
    });







    //js for ninth page//

    $(".customer_form").hide();

    $("#applicant_details").click(function() {
        $(".lead_form").hide();
        $(".category_form").hide();
        $(".vechical_form").hide();
        $(".customer_form").hide();
        $(".applicant_buttons").show();
        $(".dataTable").show();
    });

    $("#editApplicant").click(function() {

        $(".customer_form").show();
        $(".applicant_buttons").hide();
        $(".dataTable").hide();
    });






    //js for tenth page//


    $(".basic_form").show();
    $(".identity_form").hide();
    $(".address_form").hide();
    $(".employee_form").hide();
    $(".income_form").hide();

    $("#basic_details").click(function() {
        $(".basic_form").show();
        $(".identity_form").hide();
        $(".address_form").hide();
        $(".employee_form").hide();
        $(".income_form").hide();
    });

    $("#identity_details").click(function() {
        $(".basic_form").hide();
        $(".identity_form").show();
        $(".address_form").hide();
        $(".employee_form").hide();
        $(".income_form").hide();
    });
    $("#address_details").click(function() {
        $(".basic_form").hide();
        $(".identity_form").hide();
        $(".address_form").show();
        $(".employee_form").hide();
        $(".income_form").hide();
    });

    $("#employee_details").click(function() {
        $(".basic_form").hide();
        $(".identity_form").hide();
        $(".address_form").hide();
        $(".employee_form").hide();
        $(".income_form").show();
    });


    $("#income_details").click(function() {
        $(".basic_form").hide();
        $(".identity_form").hide();
        $(".address_form").hide();
        $(".employee_form").hide();
        $(".income_form").show();
    });

});


//functions for save button

function product_info() {


    $(".lead_form").hide();
    $(".product_form").show();
    $(".applicant_form").hide();
    $(".vechical_form").hide();
    $(".additional_form").hide();
    $(".loan_form").hide();

    $(".lead_save").hide();
    $(".product_save").show();
    $(".applicant_save").hide();
    $(".vechical_save").hide();
    $(".additional_save").hide();
    $(".loan_save").hide();

}

function applicant_info() {


    $(".lead_form").hide();
    $(".product_form").show();
    $(".applicant_form").hide();
    $(".vechical_form").hide();
    $(".additional_form").hide();
    $(".loan_form").hide();

    $(".lead_save").hide();
    $(".product_save").show();
    $(".applicant_save").hide();
    $(".vechical_save").hide();
    $(".additional_save").hide();
    $(".loan_save").hide();

}

function vechical_info() {


    $(".lead_form").hide();
    $(".product_form").hide();
    $(".applicant_form").hide();
    $(".vechical_form").show();
    $(".additional_form").hide();
    $(".loan_form").hide();

    $(".lead_save").hide();
    $(".product_save").hide();
    $(".applicant_save").hide();
    $(".vechical_save").show();
    $(".additional_save").hide();
    $(".loan_save").hide();

}





function customer_confirmation() {

    $("#myModal").show();



}


$(document).ready(function() {
    $('.collapse')
        .on('shown.bs.collapse', function(event) {
            event.stopPropagation();
            console.log("open");
            $(this)
                .parent()
                .find(".fa-chevron-right")
                .removeClass("fa-chevron-right")
                .addClass("fa-chevron-down")
                .find(".btn_bar")
                .removeClass("btn_bar")
                .addClass("btn_bar_pink");

        }).on('hidden.bs.collapse', function(event) {
            console.log("closed");
            event.stopPropagation();
            $(this)
                .parent()
                .find(".fa-chevron-down")
                .removeClass("fa-chevron-down")
                .addClass("fa-chevron-right")
                .find(".btn_bar_pink")
                .removeClass("btn_bar_pink")
                .addClass("btn_bar");

        });
});

// function main_lead() {
//    document.location = 'create_lead.html';
// }

// function dashboard() {
//    document.location = '../login/dashboard.html';
// }

function activity() {
   document.location = 'retail_sales_cam.html';
}

function create_lead() {
   document.location = 'sales_create_lead.html';
}

function add_applicant() {
   document.location = 'sales_add_applicant.html';
}
function edit_applicant() {
   document.location = 'sales_edit_applicant.html';
}

// function edit_applicant() {
//    document.location = 'edit_applicant.html';
// }

function lead_dedupe() {
   document.location = 'sales_lead_dedupe.html';
}



function lead_section() {
   document.location = 'sales_sourcing_details.html';
}


function sourcing_details() {
   document.location = 'retail_sales_lead_details.html';
}

function lead_dedupe() {
   document.location = 'sales_lead_dedupe.html';
}

function terms_info() {
   document.location = 'sales_termsandconditions.html';
}

function save_lead() {
   document.location = 'sales_section.html#tab2';
}

function applicant_table() {
   document.location = 'sales_section.html#dataTable';
}

function qde_section() {
   document.location = '../retail_sales_dashboard/my_dashboard.html';
}

function dde_section() {
   document.location = '../sales_dde/sales_basic_details.html';
}

$(document).ready(function() {



    $("#product_type").change(function() {
        var val = $(this).val();
        if (val == "New CV") {


            $("#asset_type").show();
            $("#vechical_use").hide();
            $("#vechical_group").hide();
            $("#mon_manufacturing").hide();
            $("#yr_manufacturing").hide();
            $("#age_asset").hide();
            $("#vechical_reg").hide();

            $("#qrp_fund").show();
            $("#others_div").show();
            $("#discount_div").show();
            $("#insurance_type").show();
            $(".tax_type").show();
            $("#fast_type").show();
            $("#insurance_val").hide();
            $("#idv_type").hide();
            $(".premit_type").hide();
            $("#fitness_date_id").hide();
            $(".frsd_type").hide();
            $("#customer_info_1").hide();
            $("#customer_info_2").show();

        } else if (val == "New Cars") {


            $("#asset_type").hide();
            $("#vechical_use").hide();
            $("#vechical_group").hide();
            $("#mon_manufacturing").hide();
            $("#yr_manufacturing").hide();
            $("#age_asset").hide();
            $("#vechical_reg").hide();

            $("#qrp_fund").show();
            $("#others_div").show();
            $("#discount_div").show();
            $("#insurance_type").show();
            $(".tax_type").show();
            $("#fast_type").show();
            $("#insurance_val").hide();
            $("#idv_type").hide();
            $(".premit_type").hide();
            $("#fitness_date_id").hide();
            $(".frsd_type").hide();
            $("#customer_info_1").hide();
            $("#customer_info_2").show();

        } else if (val == "Used CV") {


            $("#asset_type").show();
            $("#vechical_use").hide();
            $("#vechical_group").hide();
            $("#mon_manufacturing").show();
            $("#yr_manufacturing").show();
            $("#age_asset").show();
            $("#vechical_reg").show();

            $("#qrp_fund").hide();
            $("#others_div").hide();
            $("#discount_div").hide();
            $("#insurance_type").hide();
            $(".tax_type").hide();
            $("#fast_type").hide();
            $("#insurance_val").show();
            $("#idv_type").show();
            $(".premit_type").show();
            $("#fitness_date_id").show();
            $(".frsd_type").show();
            $("#customer_info_1").hide();
            $("#customer_info_2").show();

        } else if (val == "Used Cars") {


            $("#asset_type").hide();
            $("#vechical_use").show();
            $("#vechical_group").hide();
            $("#mon_manufacturing").show();
            $("#yr_manufacturing").show();
            $("#age_asset").show();
            $("#vechical_reg").hide();

            $("#qrp_fund").hide();
            $("#others_div").hide();
            $("#discount_div").hide();
            $("#insurance_type").hide();
            $(".tax_type").hide();
            $("#fast_type").hide();
            $("#insurance_val").show();
            $("#idv_type").show();
            $(".premit_type").hide();
            $("#fitness_date_id").hide();
            $(".frsd_type").show();
            $("#customer_info_1").show();
            $("#customer_info_2").hide();

        }
    });




    if ($("#product_type").val() == "New CV") {


        $("#asset_type").show();
        $("#vechical_use").hide();
        $("#vechical_group").hide();
        $("#mon_manufacturing").hide();
        $("#yr_manufacturing").hide();
        $("#age_asset").hide();
        $("#vechical_reg").hide();

        $("#qrp_fund").show();
        $("#others_div").show();
        $("#discount_div").show();
        $("#insurance_type").show();
        $(".tax_type").show();
        $("#fast_type").show();
        $("#insurance_val").hide();
        $("#idv_type").hide();
        $(".premit_type").hide();
        $("#fitness_date_id").hide();
        $(".frsd_type").hide();
        $("#customer_info_1").hide();
        $("#customer_info_2").show();

    } else if ($("#product_type").val() == "New Cars") {


        $("#asset_type").hide();
        $("#vechical_use").hide();
        $("#vechical_group").hide();
        $("#mon_manufacturing").hide();
        $("#yr_manufacturing").hide();
        $("#age_asset").hide();
        $("#vechical_reg").hide();

        $("#qrp_fund").show();
        $("#others_div").show();
        $("#discount_div").show();
        $("#insurance_type").show();
        $(".tax_type").show();
        $("#fast_type").show();
        $("#insurance_val").hide();
        $("#idv_type").hide();
        $(".premit_type").hide();
        $("#fitness_date_id").hide();
        $(".frsd_type").hide();
        $("#customer_info_1").hide();
        $("#customer_info_2").show();

    } else if ($("#product_type").val() == "Used CV") {


        $("#asset_type").show();
        $("#vechical_use").hide();
        $("#vechical_group").hide();
        $("#mon_manufacturing").show();
        $("#yr_manufacturing").show();
        $("#age_asset").show();
        $("#vechical_reg").show();

        $("#qrp_fund").hide();
        $("#others_div").hide();
        $("#discount_div").hide();
        $("#insurance_type").hide();
        $(".tax_type").hide();
        $("#fast_type").hide();
        $("#insurance_val").show();
        $("#idv_type").show();
        $(".premit_type").show();
        $("#fitness_date_id").show();
        $(".frsd_type").show();
        $("#customer_info_1").hide();
        $("#customer_info_2").show();

    } else if ($("#product_type").val() == "Used Cars") {


        $("#asset_type").hide();
        $("#vechical_use").show();
        $("#vechical_group").hide();
        $("#mon_manufacturing").show();
        $("#yr_manufacturing").show();
        $("#age_asset").show();
        $("#vechical_reg").hide();

        $("#qrp_fund").hide();
        $("#others_div").hide();
        $("#discount_div").hide();
        $("#insurance_type").hide();
        $(".tax_type").hide();
        $("#fast_type").hide();
        $("#insurance_val").show();
        $("#idv_type").show();
        $(".premit_type").hide();
        $("#fitness_date_id").hide();
        $(".frsd_type").show();
        $("#customer_info_1").show();
        $("#customer_info_2").hide();

    }


});







function click_app() {
    document.getElementById("applicant_form").style.display = "block";
    document.getElementById("dataTable").style.display = "none";
    document.getElementById("add_co_applicant").style.display = "none";
    document.getElementById("add_guarantor").style.display = "none";



}

//for lead dedupe - Proceed and Reject 



$(document).ready(function() {

    $("#proceed_div").hide();
    $("#reject_div").hide();

    $("#proceed_new_button").click(function() {
        $("#proceed_div").show();
        $("#reject_div").hide();
    });

    $("#proceed_exisiting_button").click(function() {
        $("#proceed_div").show();
        $("#reject_div").hide();
    });

    $("#reject_button").click(function() {
        $("#proceed_div").hide();
        $("#reject_div").show();
    });




});




/* If checkbox is needed*/

// $(document).ready(function() {

//     $("#proceed_with_sumbit").hide();
//     $("#proceed_without_sumbit").show();

//     $(".checkbox").click(function() {
//         if ($(this).is(":checked")) {
//             $("#proceed_with_sumbit").show();
//             $("#proceed_without_sumbit").hide();
//         } else {

//             $("#proceed_without_sumbit").show();
//             $("#proceed_with_sumbit").hide();

//         }
//     });

// });

/* If radio button is needed*/
/*$(document).ready(function() {
    //$("#proceed_with_sumbit").hide();
    //$("#proceed_without_sumbit").show
        //$("#proceed_exisiting_button").prop("disabled", true);
    $("input[name$='radio-pick']").click(function() {
        var test = $(this).val();

        //$("#proceed_with_sumbit").show();
        //$("#proceed_without_sumbit").hide();

        $("#proceed_new_button").prop("disabled", true);
        $("#proceed_without_sumbit").prop("disabled", false);

        if ($(this).hasClass('proceed_btn_new')) {
            $("#proceed_new_button").prop("disabled", false);

        }

    });


});*/



$(document).ready(function() {

    $(".non_individual_section_leadco").hide();
    $("#select_main_button_leadco").change(function() {
        var IndVsNonValue = $("#select_main_button_leadco").val();
        if (IndVsNonValue == "individual") {
            $(".non_individual_section_leadco").hide();
            $(".individual_section_leadco").show();
        } else {
            $(".non_individual_section_leadco").show();
            $(".individual_section_leadco").hide();
        }
    });
   
});


/* exact vs probable match */

$(document).ready(function() {

    $(".probable_table").hide();
    $(".exact_table").show();

    $("#select_main_button_match").change(function() {
        var val = $("#select_main_button_match").val();
        if (val == "exact_match") {
            $(".probable_table").hide();
            $(".exact_table").show();

        } else {
            $(".probable_table").show();
            $(".exact_table").hide();
        }

    });

});


$(document).ready(function() {
    $(".save").click(function() {
        $("#add_vehicle").show();
        $("#alert").show();
        // $("#team_list").hide();
        // $(".modal-backdrop.fade.in").hide();
        
    });
});

function alert_interval()
{
    
    document.getElementById("alert").style.display = "none";
}
setInterval(alert_interval,3000);
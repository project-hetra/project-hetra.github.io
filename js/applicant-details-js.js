function alert_interval()
{
    
    document.getElementById("alert").style.display = "none";
}
setInterval(alert_interval,3000);

$(document).ready(function()
{
$("#non_individual_section_start").hide();
$("#select_main_button").change(function()
{
    var IndVsNonValue = $("#select_main_button").val();
        if(IndVsNonValue == "individual")
        {
            $("#non_individual_section_start").hide();
            $("#individual_section_start").show();
        }
        else
        {
            $("#non_individual_section_start").show();
            $("#individual_section_start").hide();
        }
});
});


$(document).ready(function()
{

 $("#non_individual_section_start_identity").hide();
$("#select_main_button_identity").change(function()
{
    var IndVsNonValue = $("#select_main_button_identity").val();
        if(IndVsNonValue == "individual")
        {
            $("#non_individual_section_start_identity").hide();
            $("#individual_section_start_identity").show();
            

        }
        else
        {
            $("#non_individual_section_start_identity").show();
            $("#individual_section_start_identity").hide();
            
        }
});
 });

 $(document).ready(function()
    {
        $("#non_individual_section_address").hide();
        $("#select_main_button_address").change(function()
        {
            
            var IndVsNonValue = $("#select_main_button_address").val();

                
                if(IndVsNonValue == "individual")
                {
                    $("#non_individual_section_address").hide();
                    $("#individual_section_address").show();
                }
                else
                {
                    $("#non_individual_section_address").show();
                    $("#individual_section_address").hide();
                }
            
            
        });
        $("#address_section_checkbox").click(function(){
            var addressChecked = $("#address_section_checkbox").prop('checked');
            if(addressChecked == true)
            {
                var Address1 =  $("#address1").val();
                $("#line1").val(Address1);
                $("#line1").prop("disabled",true);
                var Address2 =  $("#address2").val();
                $("#line2").val(Address2);
                $("#line2").prop("disabled",true);
                var Address3 =  $("#address3").val();
                $("#line3").val(Address3);
                $("#line3").prop("disabled",true);
                var Address4 =  $("#pincode").val();
                $("#current_pincode").val(Address4);
                $("#current_pincode").prop("disabled",true);
                var Address5 =  $("#permanent_address_city").val();
                $("#current_address_city").html('<select class="control_form"  id="current_address_city" name="current_address_city" placeholder=" "  ><option value="'+Address5+'">'+Address5+'</option></select>');
                $("#current_address_city").prop("disabled",true);
                var Address6 =  $("#permanent_address_district").val();
                $("#current_address_district").html('<select class="control_form" disabled="disabled" id="current_address_district" name="current_address_district" placeholder=" " ><option value="'+Address6+'">'+Address6+'</option></select>');
                $("#current_address_district").prop("disabled",true);
                var Address7 =  $("#permanent_address_state").val();  
                $("#current_address_state").html('<select class="control_form" disabled="disabled" id="current_address_state" name="current_address_state" placeholder=" " ><option value="'+Address7+'">'+Address7+'</option></select>');
                $("#current_address_state").prop("disabled",true);
                var Address8 =  $("#permanent_address_country").val();
                $("#current_address_country").html('<select class="control_form" disabled="disabled"  name="current_address_country" id="current_address_country" placeholder=" " ><option value="'+Address8+'">'+Address8+'</option></select>');
                $("#current_address_country").prop("disabled",true);
                

                
            }
            else
            {
                $("#line1").val(" ");
                $("#line2").val(" ");
                $("#line3").val(" ");
                $("#current_address_pin_code").val(" ");
                $("#current_address_city").html('<select class="control_form" id="current_address_city" name="current_address_city" placeholder=" "  ><option value="">Select</option><option value=""></option></select>');
                $("#current_address_district").html('<select class="control_form" id="current_address_district" name="current_address_district" placeholder=" " ><option value="">Select</option><option value=""></option></select>');
                $("#current_address_state").html('<select class="control_form" id="current_address_state" name="current_address_state" placeholder=" " ><option value="">Select</option><option value=""></option></select>');
                $("#current_address_country").html('<select class="control_form"  name="current_address_country" id="current_address_country" placeholder=" " ><option value="">Select</option><option value=""></option></select>');
            }

        });

        $("#address_section_checkbox_cm").click(function(){
            var addressChecked = $("#address_section_checkbox_cm").prop('checked');
            if(addressChecked == true)
            {
                var Address1 =  $("#cmr_line1").val();
                $("#cm_line1").val(Address1);
                $("#cm_line1").prop("disabled",true);
                var Address2 =  $("#cmr_line2").val();
                $("#cm_line2").val(Address2);
                $("#cm_line2").prop("disabled",true);
                var Address3 =  $("#cmr_line3").val();
                $("#cm_line3").val(Address3);
                $("#cm_line3").prop("disabled",true);
                var Address4 =  $("#cmr_current_address_pin_code").val();
                $("#cm_current_pincode").val(Address4);
                $("#cm_current_pincode").prop("disabled",true);
                var Address5 =  $("#cmr_current_address_city").val();
                $("#cm_current_address_city").html('<select class="control_form"  id="current_address_city" name="current_address_city" placeholder=" "  ><option value="'+Address5+'">'+Address5+'</option></select>');
                $("#cm_current_address_city").prop("disabled",true);
                var Address6 =  $("#cmr_current_address_district").val();
                $("#cm_current_address_district").html('<select class="control_form" disabled="disabled" id="current_address_district" name="current_address_district" placeholder=" " ><option value="'+Address6+'">'+Address6+'</option></select>');
                $("#cm_current_address_district").prop("disabled",true);
                var Address7 =  $("#cmr_current_address_state").val();  
                $("#cm_current_address_state").html('<select class="control_form" disabled="disabled" id="current_address_state" name="current_address_state" placeholder=" " ><option value="'+Address7+'">'+Address7+'</option></select>');
                $("#cm_current_address_state").prop("disabled",true);
                var Address8 =  $("#cmr_current_address_country").val();
                $("#cm_current_address_country").html('<select class="control_form" disabled="disabled"  name="current_address_country" id="current_address_country" placeholder=" " ><option value="'+Address8+'">'+Address8+'</option></select>');
                $("#cm_current_address_country").prop("disabled",true);
                 var Address9 =  $("#cmr_reg_residence_number").val();
                $("#cm_reg_residence_number").val(Address9);
                 $("#cm_reg_residence_number").prop("disabled",true);
                

                
            }
            else
            {
                $("#cm_line1").val(" ");
                $("#cm_line2").val(" ");
                $("#cm_line3").val(" ");
                $("#cm_current_address_pin_code").val(" ");
                $("#cm_current_address_city").html('<select class="control_form" id="current_address_city" name="current_address_city" placeholder=" "  ><option value="">Select</option><option value=""></option></select>');
                $("#cm_current_address_district").html('<select class="control_form" id="current_address_district" name="current_address_district" placeholder=" " ><option value="">Select</option><option value=""></option></select>');
                $("#cm_current_address_state").html('<select class="control_form" id="current_address_state" name="current_address_state" placeholder=" " ><option value="">Select</option><option value=""></option></select>');
                $("#cm_current_address_country").html('<select class="control_form"  name="current_address_country" id="current_address_country" placeholder=" " ><option value="">Select</option><option value=""></option></select>');
                $("#cm_reg_residence_number").val(" ");
            }

        });
        
    });


     $(document).ready(function()
    {
        $("#non_individual_section_employment").hide();
        $("#select_main_button_employment").change(function()
        {
            
            var IndVsNonValue = $("#select_main_button_employment").val();

                
                if(IndVsNonValue == "individual")
                {
                    $("#non_individual_section_employment").hide();
                    $("#individual_section_employment").show();
                }
                else
                {
                    $("#non_individual_section_employment").show();
                    $("#individual_section_employment").hide();
                }
            
            
        });
        
    });

    $(document).ready(function()
    {
        $("#non_individual_section_income").hide();
        $("#select_main_button_income").change(function()
        {
            
            var IndVsNonValue = $("#select_main_button_income").val();

                
                if(IndVsNonValue == "individual")
                {
                    $("#non_individual_section_income").hide();
                    $("#individual_section_income").show();
                }
                else
                {
                    $("#non_individual_section_income").show();
                    $("#individual_section_income").hide();
                }
            
            
        });
        
    });





$(document).ready(function()
            {
            $("#non_individual_section_guarantor").hide();
            $("#select_main_button_addguarantor").change(function()
            {
                var IndVsNonValue = $("#select_main_button_addguarantor").val();
                    if(IndVsNonValue == "individual")
                    {
                        $("#non_individual_section_guarantor").hide();
                        $("#individual_section_guarantor").show();
                    }
                    else
                    {
                        $("#non_individual_section_guarantor").show();
                        $("#individual_section_guarantor").hide();
                    }
            });
            });


$(document).ready(function()
            {
            $("#non_individual_section_coapp").hide();
            $("#select_main_button_coapp").change(function()
            {
                var IndVsNonValue = $("#select_main_button_coapp").val();
                    if(IndVsNonValue == "individual")
                    {
                        $("#non_individual_section_coapp").hide();
                        $("#individual_section_coapp").show();
                    }
                    else
                    {
                        $("#non_individual_section_coapp").show();
                        $("#individual_section_coapp").hide();
                    }
            });
            });


    /******document upload script*********/

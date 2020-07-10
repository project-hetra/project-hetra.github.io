
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
                var Address2 =  $("#address2").val();
                $("#line2").val(Address2);
                var Address3 =  $("#address3").val();
                $("#line3").val(Address3);
                var Address4 =  $("#permanent_address_pin_code").val();
                $("#current_address_pin_code").val(Address4);
                var Address5 =  $("#permanent_address_city").val();
                $("#current_address_city").html('<select class="control_form" id="current_address_city" name="current_address_city" placeholder=" "  ><option value="'+Address5+'">'+Address5+'</option></select>');
                var Address6 =  $("#permanent_address_district").val();
                $("#current_address_district").html('<select class="control_form" id="current_address_district" name="current_address_district" placeholder=" " ><option value="'+Address7+'">'+Address7+'</option></select>');
                var Address7 =  $("#permanent_address_state").val();  
                $("#current_address_state").html('<select class="control_form" id="current_address_state" name="current_address_state" placeholder=" " ><option value="'+Address7+'">'+Address7+'</option></select>');
                var Address8 =  $("#permanent_address_country").val();
                $("#current_address_country").html('<select class="control_form"  name="current_address_country" id="current_address_country" placeholder=" " ><option value="'+Address8+'">'+Address8+'</option></select>');
                

                
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


    /******document upload script*********/

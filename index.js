$(document).ready(function) {

  function postToGoogle() {
    var field1 = $("#Name").val();
    var field2 = $("#CompanyName").val();
    var field3 = $("#Phone").val();
    var field4 = $("#Email").val();
    var field5 = $("#HowDidYouHear").val();
    var field6 = $("#Service").val();
    var field7 = $("#TellUsMore").val();
  
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdY0QyJ0P8qv1gn4B-ZQqLWiPF3uQy2bVDQPh0LacmZwl_94w/formResponse",
        
      //add your google form generated numbers below which are also the 'names' of your inputs     
      data: {
        "entry.2005620554": field1,
        "entry.1315315351": field2,
        "entry.1166974658": field3,
        "entry.1045781291": field4,
        "entry.1065046570": field5,
        "entry.1066570801": field6,
        "entry.839337160": field7,
  
      },
      type: "POST",
      dataType: "xml",
      success: function (d) {
        $('#contact').trigger('reset');
      },
      error: function (x, y, z) {
        $('#contact').trigger('reset');
      }
    });
    return false;
  }
}
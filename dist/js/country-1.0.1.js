var site_url = 'https://wisniorproject.com/country.js/controller/'
var data = ''
var countryjs = {
  init: function(){
    // Write funtion for log the use data
  },
  load: function(ele){
    var jxr = $.post(site_url + 'get-country-list.php', function(){}, 'json')
               .always(function(snap){
                 if((snap != '') && (snap != null) && (snap.length > 0)){
                   snap.forEach(function(item){
                     if(ele.value == 'name'){
                       $(ele.element).append('<option value="' + item.country_name + '">' + item.country_name + '</option>')
                     }else{
                       $(ele.element).append('<option value="' + item.country_code + '">' + item.country_name + '</option>')
                     }
                   })
                 }
               })
  }
}

countryjs.init()

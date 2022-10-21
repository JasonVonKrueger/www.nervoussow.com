$('#contactForm').on('submit', function(event) {
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id', 'service_2uz6dt2');
    formData.append('template_id', 'template_oig6ifa');
    formData.append('user_id', 'user_2KaXxbD1prDYl7vk0ih0h');
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        $('#contactForm').hide();
        $('#submitSuccessMessage').show();

        //alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
});

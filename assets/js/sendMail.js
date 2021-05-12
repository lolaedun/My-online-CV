function sendMail(contactForm) {
    emailjs.send("service_py25tol","template_l8uiwzc", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response.status, response.text);
            alert('Your mail is sent!');
        },
        function(error) {
            console.log("FAILED", error);
            alert('Oops... ' + JSON.stringify(error));
        }
    );
    return false;  // To block from loading a new page
}


/* code fragment
var data = {
    service_id: "service_py25tol",
    template_id: "template_l8uiwzc",
    user_id: "user_ycoJhCrC9L3ODSSESOoKj",
    template_params: {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
        
    }
};
 
$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(sendMail),
    contentType: 'application/json'
}).done(function() {
    alert('Your mail is sent!');
}).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
});
*/
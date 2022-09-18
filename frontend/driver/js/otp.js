function registerDriver() {

    $.ajax({

        url: "http://localhost:8080/driver/register",

        method: "POST",

        headers : {
            "Content-Type": "application/json"
        },

        data: JSON.stringify({
            registeredWith: sessionStorage.getItem("registeredWith"),
            phone: sessionStorage.getItem("driverPhone")
        }),

        success: function(response) {
            sessionStorage.setItem("driverProfile", JSON.stringify(response))
            redirect('driver-profile.html')
        }
    })
}
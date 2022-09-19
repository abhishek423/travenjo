function registerDriver() {

    $.ajax({

        url: "https://fakeface.rest/face/json?gender=male&minimum_age=25&maximum_age=50",

        success: function (imgResponse) {

            $.ajax({

                url: "http://localhost:8080/driver/register",

                method: "POST",

                headers : {
                    "Content-Type": "application/json"
                },

                data: JSON.stringify({
                    registeredWith: sessionStorage.getItem("registeredWith"),
                    phone: sessionStorage.getItem("driverPhone"),
                    profilePic: imgResponse.image_url
                }),

                success: function(response) {
                    sessionStorage.setItem("driverProfile", JSON.stringify(response))
                    redirect('driver-profile.html')
                }
            })
        }
    })
}
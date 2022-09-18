let emergenyBookingPriceList = [];
let compareBookingPriceList = [];
let images = [];
let selectedRideIndex = 0;
let tripType;

window.onload = function() {
    for(let i=0; i< 10; i++)
    {
        $.ajax({

            url: "https://fakeface.rest/face/json?gender=male&minimum_age=25&maximum_age=50",

            success: function (response) {
                images.push(response.image_url)
            }
        })
    }

    let interval = setInterval(function(){
        if(images.length == 10) {
            clearInterval(interval)
            getRideOptions()
        }
    }, 100)
}

function getRideOptions() {
    $.ajax({

        url: "http://localhost:8080/ride/book",

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        data: JSON.stringify({
            riderId: sessionStorage.getItem("riderId"),
            from: sessionStorage.getItem("from"),
            to: sessionStorage.getItem("to")
        }),

        success: function (response) {

            console.log(response)
            if (response.comparePriceBooking != null) {
                tripType = "COMPARE_PRICE_RIDE"
                let bookingOptions = response.comparePriceBooking.tripOptions
                console.log(bookingOptions)
                console.log(response)
                compareBookingPriceList = bookingOptions
                let html = "";
                for (let i = 0; i < bookingOptions.length; i++) {
                    let option = bookingOptions[i];
                    html += "<div id='ride-details-" + i + "' class=\"ride-details-wrapper\" onClick='selectEmergencyRide(" + i + ")'>\n" +
                        "                <div class=\"driver-image-wrapper\">\n" +
                        "                    <img class=\"driver-avatar\"\n" +
                        "                         src=\"" + images[i] + "\" />\n" +
                        "                </div>\n" +
                        "                <div class=\"car-details-wrapper\">\n" +
                        "                    <div class=\"service-provider-container\"> " + option.rideServiceProviderContext.serviceProvider + " </div>\n" +
                        "                    <div class=\"car-model-container\"> " + option.driver.carModel + " </div>\n" +
                        "                    <div class=\"car-number-container\"> " + option.driver.carNumber + " </div>\n" +
                        "                </div>\n" +
                        "                <div class=\"price-button-wrapper\">\n" +
                        "                    <div class=\"price-text-wrapper\"> INR " + parseFloat(option.rideServiceProviderContext.price).toFixed(2) + " </div>\n" +
                        "                </div>\n" +
                        "            </div>";
                }
                $("#ride-option-list").html(html)
                $("#ride-details-0").addClass('ride-selected')
            }

            else if (response.emergencyPriceBooking != null) {

                tripType = "EMERGENCY_RIDE"
                let bookingOptions = response.emergencyPriceBooking.tripOptions
                emergenyBookingPriceList = bookingOptions
                $("#warning-text-custom-price").removeClass("hidden")
                let html = "";
                for (let i = 0; i < bookingOptions.length; i++) {
                    let option = bookingOptions[i];
                    html += "<div id='ride-details-" + i + "' class=\"ride-details-wrapper\" onClick='selectEmergencyRide(" + i + ")'>\n" +
                        "                <div class=\"driver-image-wrapper\">\n" +
                        "                    <img class=\"driver-avatar\"\n" +
                        "                         src=\"" + images[i] + "\" />\n" +
                        "                </div>\n" +
                        "                <div class=\"car-details-wrapper\">\n" +
                        "                    <div class=\"service-provider-container\"> " + option.rideServiceProviderContext.serviceProvider + " </div>\n" +
                        "                    <div class=\"car-model-container\"> " + option.driver.carModel + " </div>\n" +
                        "                    <div class=\"car-number-container\"> " + option.driver.carNumber + " </div>\n" +
                        "                </div>\n" +
                        "                <div class=\"price-button-wrapper\">\n" +
                        "                    <div class=\"price-text-wrapper\"> INR " + parseFloat(option.rideServiceProviderContext.price).toFixed(2) + " </div>\n" +
                        "                </div>\n" +
                        "            </div>";
                }
                $("#ride-option-list").html(html)
                $("#ride-details-0").addClass('ride-selected')
            }

            else if (response.splitBooking != null) {

                tripType = "SPLIT_RIDE"
                let bookingOptions = response.splitBooking.tripOptions
                emergenyBookingPriceList = bookingOptions
                $("#warning-text-split").removeClass("hidden")
                let html = "";
                for (let i = 0; i < bookingOptions.length; i++) {
                    let option = bookingOptions[i];
                    let splitFrom  = "";
                    let splitTo = "";

                    console.log(option.rideServiceProviderContext.splitInfo.pickUp)

                    if(option.rideServiceProviderContext.splitInfo.pickUp.indexOf(',') > -1)
                        splitFrom = option.rideServiceProviderContext.splitInfo.pickUp.split(',')[0]
                    else splitFrom = option.rideServiceProviderContext.splitInfo.pickUp

                    if(option.rideServiceProviderContext.splitInfo.drop.indexOf(',') > -1)
                        splitTo = option.rideServiceProviderContext.splitInfo.drop.split(',')[0]
                    else splitTo = option.rideServiceProviderContext.splitInfo.drop

                    html += "<div>" +
                        "<div id='ride-details-" + i + "' class=\"ride-details-wrapper\" onClick='selectEmergencyRide(" + i + ")'>\n" +
                        "                <div class=\"driver-image-wrapper\">\n" +
                        "                    <img class=\"driver-avatar\"\n" +
                        "                         src=\"" + images[i] + "\" />\n" +
                        "                </div>\n" +
                        "                <div class=\"car-details-wrapper\">\n" +
                        "                    <div class=\"service-provider-container\"> " + option.rideServiceProviderContext.serviceProvider + " </div>\n" +
                        "                    <div class=\"car-model-container\"> " + option.driver.carModel + " </div>\n" +
                        "                    <div class=\"car-number-container\"> " + option.driver.carNumber + " </div>\n" +
                        "                </div>\n" +
                        "                <div class=\"price-button-wrapper\">\n" +
                        "                    <div class=\"price-text-wrapper\"> INR " + parseFloat(option.rideServiceProviderContext.price).toFixed(2) + " </div>\n" +
                        "                </div>\"" +
                        "                " +
                        "            </div>" +
                        "<div class='split-info'> " + splitFrom + " TO " + splitTo + " </div>" +
                        "</div>";
                }
                $("#ride-option-list").html(html)
                $("#ride-details-0").addClass('ride-selected')
            }

            $(".page-wrapper").removeClass('hidden')
            $(".wait-screen").hide()
        }
    })
}

function selectEmergencyRide(index) {
    $("[id^=ride-details]").removeClass('ride-selected')
    $("#ride-details-" + index).addClass('ride-selected')
    selectedRideIndex = index;
}

function confirmRide() {
    $.ajax({

        url: "http://localhost:8080/trip/create",

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        data: JSON.stringify({
            pickup: sessionStorage.getItem("from"),
            destination: sessionStorage.getItem("to"),
            riderId: sessionStorage.getItem("riderId"),
            driverId: emergenyBookingPriceList[selectedRideIndex].driverId,
            tripType: tripType
        }),

        success: function (response) {
        }
    })
}
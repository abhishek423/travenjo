let rideId;
let waitingForAcceptance = false;
let declineReason;
let waitingForDeclineReason = false;
let currentLocation;

window.onload = function() {

    currentLocation = getParameterByName("currentlocation")
    if(currentLocation == undefined) currentLocation = "Garia"
    $(".fact_data_container").html(currentLocation)

    $.ajax({

        url: "https://fakeface.rest/face/json?gender=male&minimum_age=25&maximum_age=50",

        success: function (response) {
            $("#dp-wrapper").html("<img class='dp-image' src='" + response.image_url +"' />")
        }
    })

    $("#name").html(getDriverDetail("name"))
    $("#phoneNumber").html(getDriverDetail("phoneNumber"))
    $("#address").html(getDriverDetail("address"))
    $("#regNumber").html(getDriverDetail("driverRegistrationIdWithServiceProvider"))
    $("#carModel").html(getDriverDetail("carModel"))
    $("#carNumber").html(getDriverDetail("carRegistrationNumber"))
    $("#driverRegisteredWith").html(getDriverDetail("driverRegisteredWith"))

    lookForBooking()

    $(".decline-reason-text").click(function(){
        $(".decline-reason-text").removeClass("selected-decline-reason")
        $(this).addClass("selected-decline-reason")
        declineReason = $(this).attr('id')
    })
}

function getDriverDetail(key) {
    let driver = JSON.parse(sessionStorage.getItem("driverProfile"))
    return driver[key]
}

function lookForBooking() {

    $.ajax({

        url: "http://localhost:8080/ride?serviceProvider=" + getDriverDetail("driverRegisteredWith") + "&currentLocation=" + currentLocation,

        success: function(response) {
            try{
                if(response.length == 0) {
                    $("#trip-notification").addClass("hidden")
                    return;
                }
                response = response[0]
                $("#pickUpLocation").html(response.from)
                $("#dropLocation").html(response.to)
                $("#amount").html("INR " + parseFloat(response.price).toFixed(2))
                $("#actual-price-text").html("Price offered INR " + parseFloat(response.price).toFixed(2))
                $("#towards").html(response.to);
                rideId = response.id;

                $("#trip-notification").removeClass("hidden")
            } catch(e) {
                console.error(e)
                $("#trip-notification").addClass("hidden")
            } finally {
                setTimeout(function(){
                    lookForBooking()
                }, 2000)
            }
        }
    })
}

function acceptRide() {
    $.ajax({

        url: "http://localhost:8080/ride/driver/accept?serviceProvider=" + getDriverDetail("driverRegisteredWith") + "&rideId=" + rideId + "&driverId=" + getDriverDetail("driverId"),

        success: function(response) {
            waitingForAcceptance = true;
            $("#waiting-screen").removeClass("hidden")
        }
    })
}

function declineRide() {
    $("#trip-notification").css("height", "0px");
    $("#decline-popup").removeClass("hidden");
}

function handleDeclineReason() {
    $("#decline-popup").addClass("hidden");
    if(declineReason == "price") {
        $("#emergency-price-popup").removeClass("hidden");
    }
    else if(declineReason == "drop-location") {
        $("#split-ride-option-popup").removeClass("hidden");
    }
}

function submitEmergencyPrice() {
    let customPrice = $("#custom-price").val()
    $("#emergency-price-popup").addClass("hidden")
    $.ajax({

        url: "http://localhost:8080/ride/driver/declinewithcustomprice?serviceProvider=" + getDriverDetail("driverRegisteredWith") + "&rideId=" + rideId + "&driverId=" + getDriverDetail("driverId") + "&customPrice=" + customPrice,

        success: function(response) {
            waitingForAcceptance = true;
            waitingForDeclineReason = false;
            $("#waiting-screen").removeClass("hidden")
        }
    })
}

function submitSplitPoint() {
    let splitPoint = $("#split-point").val()
    $("#split-ride-option-popup").addClass("hidden")
    $("#waiting-screen").removeClass("hidden")
    $.ajax({

        url: "http://localhost:8080/ride/driver/declinewithsplit?serviceProvider=" + getDriverDetail("driverRegisteredWith") + "&rideId=" + rideId + "&driverId=" + getDriverDetail("driverId") + "&splitPoint=" + splitPoint,

        success: function(response) {
            waitingForAcceptance = true;
            waitingForDeclineReason = false;
            console.log("HIDDEN")
            $("#waiting-screen").removeClass("hidden")
        }
    })
}
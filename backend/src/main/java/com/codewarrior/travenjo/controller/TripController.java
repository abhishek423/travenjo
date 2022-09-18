package com.codewarrior.travenjo.controller;

import com.codewarrior.travenjo.model.Trip;
import com.codewarrior.travenjo.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TripController {

    @Autowired
    private TripService tripService;

    @PostMapping(value="trip/create", produces= MediaType.APPLICATION_JSON_VALUE)
    public Trip createTrip(@RequestBody Trip trip) {
        return tripService.create(trip);
    }
}

package com.codewarrior.travenjo.service;

import com.codewarrior.travenjo.model.Trip;
import com.codewarrior.travenjo.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TripService {

    @Autowired
    private TripRepository tripRepository;

    public Trip create(Trip trip) {
        trip.setStatus("REQUESTED");
        return tripRepository.save(trip);
    }
}

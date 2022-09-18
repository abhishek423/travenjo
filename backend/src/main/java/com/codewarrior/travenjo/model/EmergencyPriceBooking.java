package com.codewarrior.travenjo.model;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@Data
public class EmergencyPriceBooking {

    private List<DriverRideMapContext> tripOptions;
}


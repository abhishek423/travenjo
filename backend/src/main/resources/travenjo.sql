-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 18, 2022 at 06:05 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travenjo`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
CREATE TABLE IF NOT EXISTS `booking` (
  `booking_id` int(11) NOT NULL AUTO_INCREMENT,
  `trip_id` int(20) NOT NULL,
  `payment_type` varchar(200) NOT NULL,
  `offer` int(11) NOT NULL,
  `booking_status` varchar(100) NOT NULL,
  PRIMARY KEY (`booking_id`),
  KEY `trip_id` (`trip_id`),
  KEY `offer` (`offer`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

DROP TABLE IF EXISTS `driver`;
CREATE TABLE IF NOT EXISTS `driver` (
  `driver_id` int(10) NOT NULL AUTO_INCREMENT,
  `phone_number` varchar(20) NOT NULL,
  `name` varchar(120) NOT NULL,
  `address` varchar(120) NOT NULL,
  `driver_registered_with` varchar(200) NOT NULL,
  `car_model` varchar(200) NOT NULL,
  `driver_registration_id_with_service_provider` varchar(200) NOT NULL,
  `car_registration_number` varchar(200) NOT NULL,
  `profile_pic` varchar(500) NOT NULL,
  PRIMARY KEY (`driver_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `driver`
--
-- --------------------------------------------------------

--
-- Table structure for table `driver_payment_details`
--

DROP TABLE IF EXISTS `driver_payment_details`;
CREATE TABLE IF NOT EXISTS `driver_payment_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `driver_id` int(10) NOT NULL,
  `payment_service_id` int(11) NOT NULL,
  `encrypted_details` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `driver_id` (`driver_id`),
  KEY `payment_service_id` (`payment_service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `offer`
--

DROP TABLE IF EXISTS `offer`;
CREATE TABLE IF NOT EXISTS `offer` (
  `offer_id` int(20) NOT NULL AUTO_INCREMENT,
  `offer_name` varchar(100) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  PRIMARY KEY (`offer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `payment_services`
--

DROP TABLE IF EXISTS `payment_services`;
CREATE TABLE IF NOT EXISTS `payment_services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `service_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rider`
--

DROP TABLE IF EXISTS `rider`;
CREATE TABLE IF NOT EXISTS `rider` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `phone_number` varchar(20) NOT NULL,
  `preferred_services` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rider`


-- --------------------------------------------------------

--
-- Table structure for table `rider_payment_details`
--

DROP TABLE IF EXISTS `rider_payment_details`;
CREATE TABLE IF NOT EXISTS `rider_payment_details` (
  `id` int(11) NOT NULL,
  `payment_service_id` int(11) NOT NULL,
  `rider_id` int(10) NOT NULL,
  `encrypted_details` text NOT NULL,
  KEY `payment_service_id` (`payment_service_id`),
  KEY `rider_id` (`rider_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rider_service_preferences`
--

DROP TABLE IF EXISTS `rider_service_preferences`;
CREATE TABLE IF NOT EXISTS `rider_service_preferences` (
  `id` int(11) NOT NULL,
  `rider_id` int(10) NOT NULL,
  `service_provider_id` int(11) NOT NULL,
  KEY `rider_id` (`rider_id`),
  KEY `service_provider_id` (`service_provider_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `service_providers`
--

DROP TABLE IF EXISTS `service_providers`;
CREATE TABLE IF NOT EXISTS `service_providers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `trip`
--

DROP TABLE IF EXISTS `trip`;
CREATE TABLE IF NOT EXISTS `trip` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `pickup` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `driver_id` int(11) NOT NULL,
  `rider_id` int(11) NOT NULL,
  `status` varchar(100) NOT NULL,
  `next_trip_id` int(20) DEFAULT NULL,
  `trip_type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `driver_id` (`driver_id`),
  KEY `rider_id` (`rider_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`trip_id`) REFERENCES `trip` (`id`),
  ADD CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`offer`) REFERENCES `offer` (`offer_id`);

--
-- Constraints for table `driver_payment_details`
--
ALTER TABLE `driver_payment_details`
  ADD CONSTRAINT `driver_payment_details_ibfk_1` FOREIGN KEY (`driver_id`) REFERENCES `driver` (`driver_id`),
  ADD CONSTRAINT `driver_payment_details_ibfk_2` FOREIGN KEY (`payment_service_id`) REFERENCES `payment_services` (`id`);

--
-- Constraints for table `rider_payment_details`
--
ALTER TABLE `rider_payment_details`
  ADD CONSTRAINT `rider_payment_details_ibfk_1` FOREIGN KEY (`payment_service_id`) REFERENCES `payment_services` (`id`),
  ADD CONSTRAINT `rider_payment_details_ibfk_2` FOREIGN KEY (`rider_id`) REFERENCES `rider` (`id`);

--
-- Constraints for table `rider_service_preferences`
--
ALTER TABLE `rider_service_preferences`
  ADD CONSTRAINT `rider_service_preferences_ibfk_1` FOREIGN KEY (`rider_id`) REFERENCES `rider` (`id`),
  ADD CONSTRAINT `rider_service_preferences_ibfk_2` FOREIGN KEY (`service_provider_id`) REFERENCES `service_providers` (`id`);

--
-- Constraints for table `trip`
--
ALTER TABLE `trip`
  ADD CONSTRAINT `trip_ibfk_1` FOREIGN KEY (`driver_id`) REFERENCES `driver` (`driver_id`),
  ADD CONSTRAINT `trip_ibfk_2` FOREIGN KEY (`rider_id`) REFERENCES `rider` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

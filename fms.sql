-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 01, 2015 at 06:55 AM
-- Server version: 5.5.44-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `fms`
--

-- --------------------------------------------------------

--
-- Table structure for table `buoy`
--

CREATE TABLE IF NOT EXISTS `buoy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `guid` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `buoy`
--

INSERT INTO `buoy` (`id`, `guid`) VALUES
(1, 'test');

-- --------------------------------------------------------

--
-- Table structure for table `buoy_group`
--

CREATE TABLE IF NOT EXISTS `buoy_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `buoy_group`
--

INSERT INTO `buoy_group` (`id`, `name`) VALUES
(1, 'BG!');

-- --------------------------------------------------------

--
-- Table structure for table `buoy_instance`
--

CREATE TABLE IF NOT EXISTS `buoy_instance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `buoy_id` int(11) NOT NULL,
  `buoy_group_id` int(11) NOT NULL,
  `date_created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `buoy_group_id` (`buoy_group_id`),
  KEY `buoy_id` (`buoy_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `buoy_instance`
--

INSERT INTO `buoy_instance` (`id`, `buoy_id`, `buoy_group_id`, `date_created`) VALUES
(1, 1, 1, '2015-08-18 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `buoy_instance_command`
--

CREATE TABLE IF NOT EXISTS `buoy_instance_command` (
  `buoy_instance_id` int(11) NOT NULL,
  `command_type_id` int(11) NOT NULL,
  PRIMARY KEY (`buoy_instance_id`,`command_type_id`),
  KEY `buoy_instance_id` (`buoy_instance_id`,`command_type_id`),
  KEY `command_type_fk` (`command_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `buoy_instance_sensor`
--

CREATE TABLE IF NOT EXISTS `buoy_instance_sensor` (
  `buoy_instance_id` int(11) NOT NULL,
  `sensor_type_id` int(11) NOT NULL,
  PRIMARY KEY (`buoy_instance_id`,`sensor_type_id`),
  KEY `bi_sensor_type_fk` (`sensor_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `buoy_instance_sensor`
--

INSERT INTO `buoy_instance_sensor` (`buoy_instance_id`, `sensor_type_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `command_type`
--

CREATE TABLE IF NOT EXISTS `command_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `reading`
--

CREATE TABLE IF NOT EXISTS `reading` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sensor_type_id` int(11) NOT NULL,
  `buoy_instance_id` int(11) NOT NULL,
  `value` double NOT NULL,
  `latitude` double(10,0) NOT NULL,
  `longitude` double(10,0) NOT NULL,
  `timestamp` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sensor_type_id` (`sensor_type_id`),
  KEY `buoy_instance_id` (`buoy_instance_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `reading`
--

INSERT INTO `reading` (`id`, `sensor_type_id`, `buoy_instance_id`, `value`, `latitude`, `longitude`, `timestamp`) VALUES
(1, 1, 1, 50, 0, 0, '0000-00-00 00:00:00'),
(3, 1, 1, 14, -27, 153, '0000-00-00 00:00:00'),
(4, 1, 1, 14, -27, 153, '0000-00-00 00:00:00'),
(5, 1, 1, 14, -27, 153, '0000-00-00 00:00:00'),
(6, 1, 1, 14, -27, 153, '0000-00-00 00:00:00'),
(7, 1, 1, 14, -27, 153, '0000-00-00 00:00:00'),
(8, 1, 1, 14, -27, 153, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sensor_type`
--

CREATE TABLE IF NOT EXISTS `sensor_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `unit` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `sensor_type`
--

INSERT INTO `sensor_type` (`id`, `name`, `description`, `unit`) VALUES
(1, 'Turbidity', 'Amount of light that can pass through the water', 'NTU');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `last_login` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `last_login`) VALUES
(7, '', '', 'andrew.cleland@uqconnect.edu.au', '$2a$10$Xkyq5MgdrmgkqkqDGGbTSOcc.4IS02hqCyT7EsThaNkmFcRoMPpdq', '2015-08-29 16:07:11'),
(8, '', '', 'andrew.cleland3@gmail.com', '$2a$10$ATSoi/kjpY2TfD0mluLFJ.pfEUMUVxsErER/5jqNRnRsF.ACovT2S', '2015-09-01 06:01:06'),
(10, '', '', '', '$2a$10$bc6pmvWopPRx1wUpsotWKu92Ubwh0hmpoxeVtjkU1mJf15HNZ4qWq', NULL),
(11, '', '', 'neptune', '$2a$10$w9FWvgI2Z7BbMIi0Y576BuUk3sL9U/06GzDA0QzpFjeJ4jcUgdhEm', '2015-09-01 02:54:40');

-- --------------------------------------------------------

--
-- Table structure for table `warning`
--

CREATE TABLE IF NOT EXISTS `warning` (
  `buoy_instance_id` int(11) NOT NULL,
  `warning_trigger_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `warning_trigger`
--

CREATE TABLE IF NOT EXISTS `warning_trigger` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `value` int(11) NOT NULL,
  `operator` int(11) NOT NULL,
  `message` int(11) NOT NULL,
  `sensor_type_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `buoy_instance`
--
ALTER TABLE `buoy_instance`
  ADD CONSTRAINT `buoy_fk` FOREIGN KEY (`buoy_id`) REFERENCES `buoy` (`id`),
  ADD CONSTRAINT `buoy_group_fk` FOREIGN KEY (`buoy_group_id`) REFERENCES `buoy_group` (`id`);

--
-- Constraints for table `buoy_instance_command`
--
ALTER TABLE `buoy_instance_command`
  ADD CONSTRAINT `buoy_instance_fk` FOREIGN KEY (`buoy_instance_id`) REFERENCES `buoy_instance` (`id`),
  ADD CONSTRAINT `command_type_fk` FOREIGN KEY (`command_type_id`) REFERENCES `command_type` (`id`);

--
-- Constraints for table `buoy_instance_sensor`
--
ALTER TABLE `buoy_instance_sensor`
  ADD CONSTRAINT `bi_buoy_instance_fk` FOREIGN KEY (`buoy_instance_id`) REFERENCES `buoy_instance` (`id`),
  ADD CONSTRAINT `bi_sensor_type_fk` FOREIGN KEY (`sensor_type_id`) REFERENCES `sensor_type` (`id`);

--
-- Constraints for table `reading`
--
ALTER TABLE `reading`
  ADD CONSTRAINT `reading_buoy_instance_fk` FOREIGN KEY (`sensor_type_id`) REFERENCES `buoy_instance_sensor` (`buoy_instance_id`),
  ADD CONSTRAINT `reading_buoy_instance_sensor_type_fk` FOREIGN KEY (`buoy_instance_id`) REFERENCES `buoy_instance_sensor` (`buoy_instance_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

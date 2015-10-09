-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 15, 2015 at 08:11 AM
-- Server version: 5.6.19-0ubuntu0.14.04.1
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
  `name` varchar(100) NOT NULL,
  `active_buoy_instance_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `buoy`
--

INSERT INTO `buoy` (`id`, `guid`, `name`, `active_buoy_instance_id`) VALUES
(1, 'e9528b5e-1d8f-4960-91ae-8b21ecc0bcab', 'BUOY-ONE', 63),
(3, '974614e0-929a-42d5-8d18-db95ba9da803', 'BUOY-2', 64),
(4, '0c459044-3aeb-4fd6-a226-0e0b4e7167f7', 'test1', 0),
(18, '0c459044-3aeb-4fd6-a226-0e0b4e7167f7', 'BUOY3', 0),
(19, 'a9130c99-4748-4de0-8b2f-62f084a7307b', 'buoy4', 89);

-- --------------------------------------------------------

--
-- Table structure for table `buoy_command`
--

CREATE TABLE IF NOT EXISTS `buoy_command` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `buoy_id` int(11) NOT NULL,
  `command_type_id` int(11) NOT NULL,
  `value` decimal(9,6) DEFAULT NULL,
  `sent` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `command_type_fk` (`command_type_id`),
  KEY `buoy_id` (`buoy_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=31 ;

--
-- Dumping data for table `buoy_command`
--

INSERT INTO `buoy_command` (`id`, `buoy_id`, `command_type_id`, `value`, `sent`) VALUES
(1, 1, 1, 30.000000, 1),
(2, 1, 1, 30.000000, 0),
(3, 1, 1, 30.000000, 1),
(4, 1, 1, 10.000000, 0),
(5, 1, 1, 30.000000, 1),
(27, 1, 1, 5.000000, 0),
(28, 3, 1, 5.000000, 0),
(29, 4, 1, 300.000000, 0),
(30, 4, 1, 50.000000, 0);

-- --------------------------------------------------------

--
-- Table structure for table `buoy_group`
--

CREATE TABLE IF NOT EXISTS `buoy_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;

--
-- Dumping data for table `buoy_group`
--

INSERT INTO `buoy_group` (`id`, `name`) VALUES
(0, 'Unassigned'),
(1, 'Dredging South'),
(2, 'Riverside North'),
(5, 'Bowney Downs');

-- --------------------------------------------------------

--
-- Table structure for table `buoy_instance`
--

CREATE TABLE IF NOT EXISTS `buoy_instance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `buoy_id` int(11) NOT NULL,
  `buoy_group_id` int(11) NOT NULL,
  `date_created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `buoy_group_id` (`buoy_group_id`),
  KEY `buoy_id` (`buoy_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=90 ;

--
-- Dumping data for table `buoy_instance`
--

INSERT INTO `buoy_instance` (`id`, `name`, `buoy_id`, `buoy_group_id`, `date_created`) VALUES
(6, 'Instance 6', 1, 1, '0000-00-00 00:00:00'),
(7, 'Instance 7', 1, 1, '0000-00-00 00:00:00'),
(8, 'Instance 888', 1, 2, '2015-09-09 00:00:00'),
(63, 'Brisbane River 14/00', 1, 5, '2015-09-13 12:45:21'),
(64, 'Dredging Buoy North', 3, 1, '2015-09-13 13:25:51'),
(89, 'Bowney Downs A', 19, 5, '2015-09-15 06:25:03');

--
-- Triggers `buoy_instance`
--
DROP TRIGGER IF EXISTS `buoy_instance_after_delete`;
DELIMITER //
CREATE TRIGGER `buoy_instance_after_delete` AFTER DELETE ON `buoy_instance`
 FOR EACH ROW BEGIN
	DECLARE active_buoy_instance_id int;
    
	SELECT `buoy`.`active_buoy_instance_id` INTO active_buoy_instance_id
    FROM `buoy` 
    WHERE `buoy`.`id`=OLD.`buoy_id`;
    
	IF OLD.`id` = active_buoy_instance_id THEN
		UPDATE `buoy` SET `buoy`.`active_buoy_instance_id`=0 WHERE 	`buoy`.`id`=OLD.`buoy_id`;
    END IF;
END
//
DELIMITER ;
DROP TRIGGER IF EXISTS `buoy_instance_after_insert`;
DELIMITER //
CREATE TRIGGER `buoy_instance_after_insert` AFTER INSERT ON `buoy_instance`
 FOR EACH ROW BEGIN
	UPDATE `buoy` SET `buoy`.`active_buoy_instance_id`=NEW.id WHERE `buoy`.`id`=NEW.buoy_id;
END
//
DELIMITER ;
DROP TRIGGER IF EXISTS `buoy_instance_before_insert`;
DELIMITER //
CREATE TRIGGER `buoy_instance_before_insert` BEFORE INSERT ON `buoy_instance`
 FOR EACH ROW BEGIN
    SET NEW.date_created = IFNULL(NEW.date_created, NOW());
END
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `buoy_instance_sensor`
--

CREATE TABLE IF NOT EXISTS `buoy_instance_sensor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `buoy_instance_id` int(11) NOT NULL,
  `sensor_type_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `buoy_instance_id_2` (`buoy_instance_id`,`sensor_type_id`),
  KEY `buoy_instance_id` (`buoy_instance_id`,`sensor_type_id`),
  KEY `buoy_instance_sensor_sensor_type_fk` (`sensor_type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

--
-- Dumping data for table `buoy_instance_sensor`
--

INSERT INTO `buoy_instance_sensor` (`id`, `buoy_instance_id`, `sensor_type_id`) VALUES
(4, 6, 1),
(7, 6, 2),
(8, 6, 3),
(1, 7, 1),
(3, 7, 2),
(9, 7, 3),
(10, 7, 4),
(5, 8, 1),
(6, 8, 2),
(11, 8, 3),
(12, 8, 4),
(23, 63, 1),
(24, 63, 2),
(25, 63, 3),
(26, 63, 4),
(27, 64, 1),
(28, 64, 2),
(29, 64, 3),
(30, 64, 4),
(31, 89, 1),
(32, 89, 2),
(33, 89, 3),
(34, 89, 4);

-- --------------------------------------------------------

--
-- Table structure for table `command_type`
--

CREATE TABLE IF NOT EXISTS `command_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `command_type`
--

INSERT INTO `command_type` (`id`, `name`) VALUES
(1, 'poll_rate');

-- --------------------------------------------------------

--
-- Table structure for table `reading`
--

CREATE TABLE IF NOT EXISTS `reading` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `buoy_instance_id` int(11) NOT NULL,
  `sensor_type_id` int(11) NOT NULL,
  `value` double NOT NULL,
  `latitude` decimal(8,6) NOT NULL,
  `longitude` decimal(9,6) NOT NULL,
  `timestamp` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sensor_type_id` (`sensor_type_id`),
  KEY `buoy_instance_id` (`buoy_instance_id`),
  KEY `reading_buoy_instance_sensor_fk` (`buoy_instance_id`,`sensor_type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=96 ;

--
-- Dumping data for table `reading`
--

INSERT INTO `reading` (`id`, `buoy_instance_id`, `sensor_type_id`, `value`, `latitude`, `longitude`, `timestamp`) VALUES
(40, 64, 1, 40, -27.425676, 153.147055, '2015-09-04 15:04:05'),
(41, 63, 1, 33, -27.436574, 153.116627, '2015-09-16 04:00:00'),
(43, 63, 3, 85, -27.436574, 153.116627, '2015-09-16 04:00:00'),
(44, 63, 1, 53, -27.424690, 153.134480, '2015-09-06 13:00:00'),
(45, 63, 2, 12, -27.424690, 153.134480, '2015-09-06 13:00:00'),
(46, 63, 3, 55, -27.424690, 153.134480, '2015-09-06 13:00:00'),
(52, 63, 2, 15, -27.436574, 153.116627, '2015-09-16 04:00:00'),
(76, 64, 2, 11, -27.425676, 153.147055, '2015-09-04 15:04:05'),
(77, 64, 3, 43, -27.425676, 153.147055, '2015-09-04 15:04:05'),
(78, 64, 4, 18, -27.425676, 153.147055, '2015-09-04 15:04:05'),
(79, 64, 1, 67, -27.421948, 153.181515, '2015-09-08 12:30:00'),
(80, 64, 2, 68, -27.421948, 153.181515, '2015-09-08 12:30:00'),
(81, 64, 3, 44, -27.421948, 153.181515, '2015-09-08 12:30:00'),
(82, 64, 4, 87, -27.421948, 153.181515, '2015-09-08 12:30:00'),
(83, 89, 1, 45, -27.467650, 153.039379, '2015-09-02 11:45:00'),
(84, 89, 2, 23, -27.467650, 153.039379, '2015-09-02 11:45:00'),
(85, 89, 3, 18, -27.467650, 153.039379, '2015-09-02 11:45:00'),
(86, 89, 4, 87, -27.467650, 153.039379, '2015-09-02 11:45:00'),
(87, 89, 1, 34, -27.471610, 153.054485, '2015-09-03 20:36:00'),
(88, 89, 2, 40, -27.471610, 153.054485, '2015-09-03 20:36:00'),
(89, 89, 3, 30, -27.471610, 153.054485, '2015-09-03 20:36:00'),
(90, 89, 4, 33, -27.471610, 153.054485, '2015-09-03 20:36:00'),
(91, 64, 1, 100, -27.425676, 153.147055, '2015-09-13 03:44:47'),
(95, 63, 2, 15, -27.425676, 153.054485, '2015-09-24 00:00:00');

-- --------------------------------------------------------

--
-- Stand-in structure for view `readings/index`
--
CREATE TABLE IF NOT EXISTS `readings/index` (
`id` int(11)
,`buoy_instance_id` int(11)
,`sensor_type_id` int(11)
,`value` double
,`latitude` decimal(8,6)
,`longitude` decimal(9,6)
,`timestamp` datetime
,`sensor_type_name` varchar(100)
,`sensor_type_unit` varchar(50)
,`sensor_type_description` varchar(100)
,`buoy_id` int(11)
,`buoy_group_id` int(11)
,`buoy_group_name` varchar(100)
);
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `sensor_type`
--

INSERT INTO `sensor_type` (`id`, `name`, `description`, `unit`) VALUES
(1, 'Turbidity', 'Amount of light that can pass through the water', 'NTU'),
(2, 'Temperature', 'Temperature', 'Degrees Celcius'),
(3, 'Battery', 'Battery', '%'),
(4, 'Pressure', 'Water pressure', 'hPa');

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
  `role` varchar(100) NOT NULL,
  `last_login` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=43 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `role`, `last_login`) VALUES
(20, 'Henry', 'Ponco', 'henry.ponco@gmail.com', '$2a$10$k/q.GvtiN7yDt98ZWuhYc.NsL3VoZ65fPvbrv1D4IWg//YzjHxlWq', 'user', '2015-09-15 07:17:42'),
(23, 'Andrew', 'Dyery', 'andrew@dyergroup.com.au', '$2a$10$GS3SwHHk/.lSG0Qr6ult/enNp3bkSGE4vTAJWQUWxMcTmFhin2oxW', 'system_admin', '2015-09-15 12:09:51'),
(29, 'Sean', 'Manson', 'sean_manson@iprimus.com.au', '$2a$10$lnb4zYzJ75hf2Ruak.Tic.ldlnGEEQ5Jcet3JVQALmbw7PDdP38DC', 'user', '2015-09-15 07:17:52'),
(30, 'Andrew', 'Cleland', 'andrew.cleland3@gmail.com', '$2a$10$QgpDqpnkFxLlmBytWE74Uu3lg6z1mhrilsNSE0DeAR6Qcb68qeLiW', 'system_admin', '2015-09-15 07:17:59'),
(41, 'Tom', 'Howard', 'thowa1995@gmail.com', '$2a$10$mv/lnHvD5P4duPWZJ4tcM.Xj/Yrj2yLRARR3Q9ugKST.Hf6Qp9132', 'power_user', '2015-09-15 09:43:43');

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
  `value` decimal(8,2) NOT NULL,
  `operator` varchar(100) NOT NULL,
  `message` varchar(250) NOT NULL,
  `buoy_instance_id` int(11) NOT NULL,
  `sensor_type_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `buoy_instance_id` (`buoy_instance_id`,`sensor_type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=27 ;

--
-- Dumping data for table `warning_trigger`
--

INSERT INTO `warning_trigger` (`id`, `value`, `operator`, `message`, `buoy_instance_id`, `sensor_type_id`) VALUES
(4, 20.00, '<', 'The battery level has dropped below 20%', 7, 2),
(11, 50.00, '>', 'The Turbidity is > 50 NTU', 7, 1),
(13, 20.50, '<', 'The battery level has dropped below 20.50%', 7, 2),
(14, 40.50, '<', 'The battery level has dropped below 20.50%', 7, 2),
(24, 50.00, '<', 'temperature is too low', 63, 2),
(25, 100.00, '=', 'Battery is full!', 63, 3);

-- --------------------------------------------------------

--
-- Structure for view `readings/index`
--
DROP TABLE IF EXISTS `readings/index`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `readings/index` AS select `reading`.`id` AS `id`,`reading`.`buoy_instance_id` AS `buoy_instance_id`,`reading`.`sensor_type_id` AS `sensor_type_id`,`reading`.`value` AS `value`,`reading`.`latitude` AS `latitude`,`reading`.`longitude` AS `longitude`,`reading`.`timestamp` AS `timestamp`,`sensor_type`.`name` AS `sensor_type_name`,`sensor_type`.`unit` AS `sensor_type_unit`,`sensor_type`.`description` AS `sensor_type_description`,`buoy_instance`.`buoy_id` AS `buoy_id`,`buoy_group`.`id` AS `buoy_group_id`,`buoy_group`.`name` AS `buoy_group_name` from (((`reading` left join `sensor_type` on((`reading`.`sensor_type_id` = `sensor_type`.`id`))) left join `buoy_instance` on((`reading`.`buoy_instance_id` = `buoy_instance`.`id`))) left join `buoy_group` on((`buoy_instance`.`buoy_group_id` = `buoy_group`.`id`))) order by `buoy_group`.`id`,`reading`.`buoy_instance_id`;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `buoy_command`
--
ALTER TABLE `buoy_command`
  ADD CONSTRAINT `buoy_command_buoy_fk` FOREIGN KEY (`buoy_id`) REFERENCES `buoy` (`id`),
  ADD CONSTRAINT `command_type_fk` FOREIGN KEY (`command_type_id`) REFERENCES `command_type` (`id`);

--
-- Constraints for table `buoy_instance`
--
ALTER TABLE `buoy_instance`
  ADD CONSTRAINT `buoy_fk` FOREIGN KEY (`buoy_id`) REFERENCES `buoy` (`id`),
  ADD CONSTRAINT `buoy_group_fk` FOREIGN KEY (`buoy_group_id`) REFERENCES `buoy_group` (`id`);

--
-- Constraints for table `buoy_instance_sensor`
--
ALTER TABLE `buoy_instance_sensor`
  ADD CONSTRAINT `buoy_instance_sensor_buoy_instance_fk` FOREIGN KEY (`buoy_instance_id`) REFERENCES `buoy_instance` (`id`),
  ADD CONSTRAINT `buoy_instance_sensor_sensor_type_fk` FOREIGN KEY (`sensor_type_id`) REFERENCES `sensor_type` (`id`);

--
-- Constraints for table `reading`
--
ALTER TABLE `reading`
  ADD CONSTRAINT `reading_buoy_instance_sensor_fk` FOREIGN KEY (`buoy_instance_id`, `sensor_type_id`) REFERENCES `buoy_instance_sensor` (`buoy_instance_id`, `sensor_type_id`);

--
-- Constraints for table `warning_trigger`
--
ALTER TABLE `warning_trigger`
  ADD CONSTRAINT `warning_trigger_buoy_instance_sensor_fk` FOREIGN KEY (`buoy_instance_id`, `sensor_type_id`) REFERENCES `buoy_instance_sensor` (`buoy_instance_id`, `sensor_type_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

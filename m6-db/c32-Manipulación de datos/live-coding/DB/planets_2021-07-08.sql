# ************************************************************
# Sequel Pro SQL dump
# Versión 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.32)
# Base de datos: planets
# Tiempo de Generación: 2021-07-08 23:42:13 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Volcado de tabla color_planet
# ------------------------------------------------------------

DROP TABLE IF EXISTS `color_planet`;

CREATE TABLE `color_planet` (
  `planet_id` int(11) unsigned NOT NULL,
  `color_id` int(11) unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `color_planet` WRITE;
/*!40000 ALTER TABLE `color_planet` DISABLE KEYS */;

INSERT INTO `color_planet` (`planet_id`, `color_id`)
VALUES
	(6,1),
	(6,4),
	(5,3),
	(5,4),
	(10,5),
	(7,2),
	(9,5),
	(4,5),
	(3,4);

/*!40000 ALTER TABLE `color_planet` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla colors
# ------------------------------------------------------------

DROP TABLE IF EXISTS `colors`;

CREATE TABLE `colors` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;

INSERT INTO `colors` (`id`, `name`)
VALUES
	(1,'rojo'),
	(2,'naranja'),
	(3,'celeste'),
	(4,'marron'),
	(5,'blanco'),
	(6,'violeta');

/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla galaxies
# ------------------------------------------------------------

DROP TABLE IF EXISTS `galaxies`;

CREATE TABLE `galaxies` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `galaxies` WRITE;
/*!40000 ALTER TABLE `galaxies` DISABLE KEYS */;

INSERT INTO `galaxies` (`id`, `name`)
VALUES
	(1,'Vía láctea'),
	(3,'NGC 1427A');

/*!40000 ALTER TABLE `galaxies` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla images
# ------------------------------------------------------------

DROP TABLE IF EXISTS `images`;

CREATE TABLE `images` (
  `id` int(10) unsigned NOT NULL,
  `url` varchar(45) DEFAULT NULL,
  `planet_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Volcado de tabla planets
# ------------------------------------------------------------

DROP TABLE IF EXISTS `planets`;

CREATE TABLE `planets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `diameter` int(11) DEFAULT NULL,
  `has_rings` tinyint(4) DEFAULT NULL,
  `galaxy_id` int(11) unsigned DEFAULT NULL,
  `life` varchar(45) DEFAULT NULL,
  `discovered` date DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `planet_galaxy_fk_idx` (`galaxy_id`),
  CONSTRAINT `planet_galaxy_fk` FOREIGN KEY (`galaxy_id`) REFERENCES `galaxies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `planets` WRITE;
/*!40000 ALTER TABLE `planets` DISABLE KEYS */;

INSERT INTO `planets` (`id`, `name`, `diameter`, `has_rings`, `galaxy_id`, `life`, `discovered`, `image`)
VALUES
	(3,'Mercurio',4878,0,1,NULL,'1310-01-01','/images/mercurio.jpeg'),
	(4,'Venus',12100,0,1,NULL,'1210-01-01','/images/venus.jpeg'),
	(5,'Tierra2',12756,0,1,'humans','0000-01-01','/images/tierra.jpeg'),
	(6,'Marte',142984,0,1,'aliens','1120-01-01','/images/marte.jpeg'),
	(7,'Júpiter',142984,0,1,NULL,'1610-07-01','/images/jupiter.jpeg'),
	(8,'Saturno',120536,1,1,NULL,'1519-01-01','/images/saturno.jpeg'),
	(9,'Urano',51108,0,1,NULL,'1787-01-01','/images/urano.jpeg'),
	(10,'Neptuno',49538,0,1,NULL,'1487-01-01','/images/neptuno.jpeg');

/*!40000 ALTER TABLE `planets` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

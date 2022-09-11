CREATE TABLE `story` IF NOT EXISTS `story`.`story` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY(`id`)
) ENGINE=InnoDB;
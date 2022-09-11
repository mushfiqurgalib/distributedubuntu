CREATE TABLE IF NOT EXISTS `status`.`status` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(40) NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    PRIMARY KEY(`id`)
) ENGINE = InnoDB;

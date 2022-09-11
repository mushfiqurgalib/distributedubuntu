CREATE TABLE IF NOT EXISTS `users`.`users` (
    `email` VARCHAR(40) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    PRIMARY KEY(`email`)
) ENGINE = InnoDB;

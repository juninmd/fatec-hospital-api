SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

CREATE SCHEMA IF NOT EXISTS `dados191n` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci ;
USE `dados191n` ;

-- -----------------------------------------------------
-- Table `dados191n`.`usuarios`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `dados191n`.`usuario` (
  `codigo` INT NOT NULL AUTO_INCREMENT ,
  `nome` VARCHAR(40) NOT NULL ,
  `senha` VARCHAR(40) NOT NULL ,
  `email` VARCHAR(40) NOT NULL ,
  PRIMARY KEY (`codigo`) )
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `dados191n`.`editoras`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `dados191n`.`poema` (
  `codigo` INT NOT NULL AUTO_INCREMENT ,
  `titulo` VARCHAR(40) NOT NULL ,
  `corpo` VARCHAR(40) NOT NULL ,
  `codigo_usuario` INT NOT NULL,
  PRIMARY KEY (`codigo`) )
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

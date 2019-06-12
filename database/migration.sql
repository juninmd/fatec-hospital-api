CREATE SCHEMA IF NOT EXISTS `dados191n` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci ;

USE `dados191n` ;

-- -----------------------------------------------------
-- Table `dados191n`.`hospital`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `dados191n`.`hospital` (
  `hos_codigo` INT NOT NULL AUTO_INCREMENT ,
  `hos_nome` VARCHAR(40) NOT NULL ,
  `hos_endereco` VARCHAR(40) NOT NULL ,
  `hos_telefone` VARCHAR(40) NOT NULL ,
  `hos_cnpj` VARCHAR(40) NOT NULL ,
  PRIMARY KEY (`hos_codigo`) );

-- -----------------------------------------------------
-- Table `dados191n`.`especialidade`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `dados191n`.`especialidade` (
  `esp_codigo` INT NOT NULL AUTO_INCREMENT ,
  `esp_nome` VARCHAR(40) NOT NULL ,
  PRIMARY KEY (`esp_codigo`) );

-- -----------------------------------------------------
-- Table `dados191n`.`medico`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `dados191n`.`medico` (
  `med_codigo` INT NOT NULL AUTO_INCREMENT ,
  `med_nome` VARCHAR(40) NOT NULL ,
  `med_hospital` INT NOT NULL,
  `esp_codigo` INT NOT NULL,
  `hos_codigo` INT NOT NULL,
  PRIMARY KEY (`med_codigo`) );


-- -----------------------------------------------------
-- Table `dados191n`.`usuarios`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `dados191n`.`usuario` (
  `usu_codigo` INT NOT NULL AUTO_INCREMENT ,
  `usu_nome` VARCHAR(40) NOT NULL ,
  `usu_senha` VARCHAR(40) NOT NULL ,
  `usu_email` VARCHAR(40) NOT NULL ,
  PRIMARY KEY (`usu_codigo`) );

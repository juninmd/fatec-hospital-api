use dados191n;

-- -----------------------------------------------------
-- Table `dados191n`.`usuario`
-- -----------------------------------------------------
insert into dados191n.usuario 
		(codigo, nome, senha, email) 
values 	('1', 'Antonio', '123', '1@1.com'),
		('2', 'Carlos', '123', '2@1.com'),
		('3', 'Junior', '123', '3@1.com');

-- -----------------------------------------------------
-- Table `dados191n`.`poema`
-- -----------------------------------------------------
insert into dados191n.poema 
		(codigo, titulo, corpo, codigo_usuario) 
values 	('1', 'Titulo', 'Corpo', '1'),
		('2', 'Titulo b', 'Corpo', '1'),
		('3', 'Titulo c', 'Corpo', '1');

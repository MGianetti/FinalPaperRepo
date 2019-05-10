CREATE TABLE client(
    cpf        PRIMARY KEY, 
    cellphone  VARCHAR(50) NOT NULL, 
    telephone  VARCHAR(50), 
    created_at TIMESTAMP NOT NULL, 
    updated_at TIMESTAMP NOT NULL,
    nome       VARCHAR(256) NOT NULL, 
    cep        VARCHAR(64), 
    id         SERIAL
);
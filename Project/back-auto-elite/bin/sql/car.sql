CREATE TABLE car(
    plate VARCHAR(32) PRIMARY KEY, 
    is_mercosul BOOLEAN NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
    holder VARCHAR(64)
    FOREIGN KEY ("holder") REFERENCES client(cpf)
);
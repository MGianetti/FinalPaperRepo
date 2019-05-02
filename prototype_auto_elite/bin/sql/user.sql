CREATE TABLE user(
    user_name VARCHAR(64) PRIMARY KEY, 
    pass_word VARCHAR(128) NOT NULL, 
    id        SERIAL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
);
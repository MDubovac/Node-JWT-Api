/*
 * This is the main Database file
 * It contains all the queries we will use
 */

-- Create Database:
CREATE DATABASE node_auth;

-- Create users Table:
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

-- Insert into users Table:
INSERT INTO users (user_name, user_email, user_password) VALUES  ('Mladen', 'mladen@gmail.com', 'mladen123');
# Solo Travel Tracker

A full-stack web application that helps travelers track the countries they've visited with an interactive world map. Built with Node.js, Express.js, EJS, and PostgreSQL for persistent data storage.

## 🚀 Features

- **Interactive World Map** - Visual representation of visited countries
- **Country Tracking** - Add countries you've visited by name
- **Color-Coded Map** - Visited countries are highlighted on the map
- **Persistent Storage** - All data saved in PostgreSQL database
- **User-Friendly Interface** - Simple form to input and manage visited countries
- **Real-Time Updates** - Map updates instantly when new countries are added

## 🛠️ Tech Stack

- **Backend**: Node.js and Express.js for server-side logic and routing
- **Database**: PostgreSQL for persistent data storage
- **Templating**: EJS for dynamic server-side rendering
- **Frontend**: HTML5, CSS3, and vanilla JavaScript
- **Middleware**: Body-Parser for handling form submissions
- **Database Client**: pg (node-postgres) for PostgreSQL connection


## 🗃️ Database Schema

```sql
CREATE TABLE visited_countries (
  id SERIAL PRIMARY KEY,
  country_code VARCHAR(3) NOT NULL,
  country_name VARCHAR(100) NOT NULL,
  visited_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

## Screenshots
![Travel Tracker Website Page](public/styles/Screenshot%202026-01-31%20234859.png)

This README provides a complete overview of your travel tracker application with database integration clearly documented.



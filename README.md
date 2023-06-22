# README

- Sample Project for [Factored](https://factored.ai/)
- [Repository](https://github.com/J0SUEFDZ/factored)

# Overview

## Backend

Given a database schema on how the relations work, and an SQL file with a database for Star Wars, create a backend API-only project in RoR with the schema and load the information using seeds. The API must have user creation.

## Frontend

Create a login page using the previous API for authentication. Also display all Films, People and planets for this.

# Setup

```zsh
# Using HTTPS
git clone https://github.com/J0SUEFDZ/factored.git
# Using SSH
git clone git@github.com:J0SUEFDZ/factored.git
```

## Backend Setup

```zsh
# On a New Terminal

cd factored_api
rvm install 3.1.2 # or use rbenv or any other ruby version manager
gem install rails -v 6.1.4.1 # specific version
bundle install # install Gems
rails db:migrate # create migrations
rails db:seed # seeding with all data
rails s -p 8000 # specific port 8000
```

## Frontend Setup

```zsh
# On a New Terminal
# Using node 20.3.0
# Using npm 9.7.1
# App created using Vite with React + SWC

cd factored_app
npm install
npm run dev
```

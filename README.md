# README

Sample Project for [Factored](https://factored.ai/)

# Setup

```zsh
git clone <this_project>
```

## Backend Setup

```zsh
# On a New Terminal

cd factored_api
gem install rails -v 6.1.4.1 # specific version
bundle install
rails db:setup
rails db:migrate
rails db:seed # seeding
rails s -p 8000 # specific port 8000
```

## Frontend Setup

```zsh
# On a New Terminal

cd factored_app
npm install
npm run dev
```

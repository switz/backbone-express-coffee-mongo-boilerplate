**NOTE: This is still a WIP. I'll be improving the README shortly**

# Backbone Boilerplate
I built this after I couldn't find a suitable boilerplate project for Backbone. Most of the boilerplate Backbone projects I found either offered too much, or too little. This is somewhere in between. It's lightweight, yet easily extensible. Want to add another page? Just create a new file in `app/views` and extend `App.Views.View`, plus a single line in your router. Plus, this project is javascript from the top to bottom, utilizing a mongodb bson store via mongoose. Authentication is baked directly into the project, in accordance with [this fantastic post](http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt).

## Modules
* Backbone.js
* Express.js
* Mongoose (mongodb)
* Stylus
* Coffeescript
* Handlebars.js

## Namespace
Many projects I found either had all of their code in a single file, or used commonjs to `require` different files. Call me vain, but I merely wanted a simple namespace. I think it looks cleaner, and my code is no longer forcefully indented. It might be slightly less efficient, but I've worked on **very** large Backbone projects that use similar namespacing and they were more than fast enough.

## Coffeescript
I love coffeescript. 'Nuff said.

## Authentication
This project currently employs email and password authentication. It is baked into the Backbone application as well as the express application so you're rearing to go. We use bcrypt to hash the passwords and an email instead of a username. Using a username instead of a password is trivial – just edit the user model in `server/models/user.coffee`.

## Grunt
In order to compile everything from coffeescript to stylus to handlebars, this project utilizes grunt. Grunt is an amazing tool. While developing just run `grunt watch` and your frontend code will compile on saves. The serverside runs coffeescript natively, therefore there is no need to compile it. `grunt compile` will compile the project once (including templates and styles). `grunt production` will compile your files for production. Edit `grunt.js` to modify this process. It's fairly straightforward, so customize it to your hearts delight. This process could be improved slightly in its current iteration.

## Directory Structure
    /app - backbone frontend
      /collections
      /models
      /utils - frontend utilities
      /views
        /templates - handlebars templates
        /styles - stylus files
    /public
    /server - express backend
    /vendor - vendor scripts

## Contributing
I built this project to suit my own needs. If you find something you want to improve, feel free to send over a pull request. I can't promise that I'll merge it due to my personal preferences, but I can promise that I'll take a look at it and get back to you in a timely fashion. This repo is definitely a *work in progress* and is nowhere near perfect.

## Questions || Comments
Email me at <hi@saewitz.com> or open an issue on this repo. Thanks for looking!

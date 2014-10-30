# Jasmine - Getting Familiar

First things first: `gem install jasmine`.

To initialize a Jasmine testing thingy, run `jasmine init`.

Your main Javascript files go under `public/javascripts/app_files'.

The specs to match your main javascript files go under 'spec/javascripts/app_files'.

Lib and spec names follow a pattern - "LibraryName" => "LibraryNameSpec". If a lib is called "Player.js", then the spec must be called "PlayerSpec.js".

## Notes from David's presentation on Jasmine

- spec and src directories
- test properties as well as functions/methods
  - i.e. test constructors


## Why we do that app namespacing thing

A typical lib directory looks like this:

    lib
      models.js
      controllers.js
      views.js

We want our top-level App object (`{}`) to persist between these scripts, or if it doesn't exist, to be created. Thing is, we can't just put `App = {};` at the beginning of all the scripts - cause then the object will keep getting overwritten with `{}`! You want to put `App = App || {};`, so that App will be assigned to itself if it exists, and created as an empty object if it doesn't exist yet.
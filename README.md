# Tinder-auto-liker

A JS script to play inside the browser to auto-like on Tinder.

## Prerequisites

- Have a Tinder account
- Optional but recommended, have a Plus/Gold/Platinium account to get unlimited likes

## How does it work?

The script intends to mimick a human behaviour, and therefore not liking every profile as soon as it appears on screen. This is because I believe Tinder detects these behaviours and then never show you to people.
So, for each profile:

- scroll through all the photos, waiting between 1-2 seconds before going to the next photo,
- open the information panel, then waiting between 1-2 seconds,
- like the profile
- if a pop-up shows (like buy Premium or other) dismiss it
- wait between 1-2 seconds before starting it all over again

## How to run

- On the Tinder website, open the Developper tools (depends on your Browser and OS, search it online)
- Copy the content of _tinder.js_ inside the multi-lined console, then click _execute_
- Delete the lines copied and write `start()` inside the console
- Click _execute_, enjoy!

## Dev

This repo is public and suggestions are welcomed

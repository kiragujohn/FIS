#!/bin/sh

cd "/Applications/Google Chrome.app/Contents/MacOS/"
ls -ltr
./"Google Chrome" --remote-debugging-port=9222 

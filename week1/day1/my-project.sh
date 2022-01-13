#!/bin/bash

echo "Creating my-project folder"
mkdir my-project;
#creates my-project folder
cd my-project;

mkdir assets;
#Creates assets folder

mkdir css;
#Creates css folder
cd css;

touch styles.css;
#Creates styles.css file 
cd ..;

touch index.html;
#Creates index.html file

mkdir js;
#creates js folder
cd js;
#creates scripts.js in js folder
touch scripts.js;
npm i @babel/cli @babel/core @babel/preset-env --save-dev

npm run watch

watch: "babel app/js -d app.dist --presents env -w"
watch: "babel app/js/es6.js -o app/js/es5.js --present env -w"
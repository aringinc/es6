npm i @babel/cli @babel/core @babel/preset-env --save-dev

npm run watch

create file .babelrc.json
{
    "presets": [
        "@babel/preset-env"
    ]
}

watch: "babel app/js -d app.dist -w" for files in dir
watch: "babel app/js/es6.js -o app/js/es5.js -w" for file


git commit -m "first commit"
git remote add origin https://github.com/aringinc/REPO_NAME.git
git push -u origin master
# static-server

Server for static files hosted in Heroku and using [node-static](https://github.com/cloudhead/node-static)

## How to set up

1. Create a heroku account and install the Heroku CLI and node.js
2. Navigate to the root folder
3. Install the node-static module and dependencies
`npm install node-static`
4. Login to heroku
`heroku login`
5. Create the app in heroku (e.g. static-server)
`heroku create app-name-here`
6. Push to heroku
`git push heroku master`
7. Deploy and launch one instance of the web app-name-here
`heroku ps:scale web=1`
8. Open the webapp sample file via browser
`your-app-name.herokuapp.com/hello.txt`
9. Add new files by adding it to the `public` folder and using git to add/commit file and repeat step 6
`git add . && git commit -m"a commit message"`

## Dropbox integration

You can also deploy new files via dropbox by dragging and dropping files. After following the set up above connect the app to dropbox by going to `dashboard > your-app-instance > deploy` and following the dropbox instructions

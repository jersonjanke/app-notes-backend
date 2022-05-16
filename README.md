## Deploy your application to Heroku

```bash
$ git add .
$ git commit -m "Added a Procfile."
$ heroku login

Enter your Heroku credentials.
...

$ heroku create

Creating arcane-lowlands-8408... done, stack is cedar
https://app-music-notes-backend.herokuapp.com/deployed | git@heroku.com:arcane-lowlands-8408.git

Git remote heroku added

$ git push heroku main

...
-----> Node.js app detected
...
-----> Launching... done
       https://app-music-notes-backend.herokuapp.com/deployed to Heroku
```

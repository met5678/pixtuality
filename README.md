Pixtuality
==========

Setup / Running Locally
-----------------------
One time setup:

1. Install [Node](http://nodejs.org/)
2. Install Meteor: `curl https://install.meteor.com/ | sh`

Run at http://localhost:3000:
```bash
cd pixtuality-app
meteor
```

Deploying local build to production
-----------------------------------
Deploys to http://ec2-54-152-250-109.compute-1.amazonaws.com/

```bash
cd pixtuality-deploy
mup deploy
```
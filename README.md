# Hello bront

> can I get a huh yeahhh?

# Building project onto Docker Hub
## Building locally
Install docker from [these instructions](https://docs.docker.com/get-docker/)
To validate run
```
$ docker version
```
and you should see something like
```
Docker version 19.03.8, build afacb8b
```

Make sure you are in the home directory of this repo and build the project using the Dockerfile:
```
$ docker build . --tag brontchat:v0.0.1
```

This command looks at the current directory `.` and finds the Dockerfile to create an image named `brontchat` with the tag `v0.0.1`

Now let's look at all of your images and you should see it below:
```
$ docker images
```

## Push the image to Docker Hub
Make sure you make an account at [Docker Hub](https://hub.docker.com/)

Login using your Docker Hub credentials
```
$ docker login
```

Re-tag your image with your Docker Hub username:
```
$ docker tag brontchat:v0.0.1 <USERNAME>/brontchat:v0.0.1
```

Push it to Docker Hub:
```
$ docker push <USERNAME>/brontchat:v0.0.1
```

You should be able to see it in your Docker Hub repository online: https://hub.docker.com/
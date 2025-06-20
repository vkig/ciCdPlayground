# The playground

This is intended to be a minimal project for a CI/CD workshop.
It consists of a simple JavaScript project, some unit and integration tests, and example configuration for some CI/CD tools.

**_NOTE:_**
This readme provides some general description about this repo. It is not necessary for workshop participants to follow it.

## Setup

Yarn is recommended, but corresponding npm commands should work, too.

To install dependencies run `yarn`

Serve at localhost:8081 with `yarn dev`

Run tests with `yarn test` and `yarn test:e2e`

## Provisioning

In the workshop infrastructure we provision an S3 bucket 'cicd-workshop-playground'
and give the Jenkins instance write access to it.
Thus, the s3Upload plugin for Jenkins can deploy to the bucket.
After running Jenkinsfile the app is accessible at
https://cicd-workshop-playground.s3.amazonaws.com/$GITHUB_USERNAME/index.html
There will be some IP based restriction to the bucket making it only available to workshop participants.

Here is some [nushell](www.nushell.sh) magic to open all deployed instances of the artefact:

```
http get https://cicd-workshop-playground.s3.eu-central-1.amazonaws.com | get content.content | flatten | where tag == Key | get content | flatten | get content | split column '/' | get column1 | uniq | each {|username| $"https://cicd-workshop-playground.s3.eu-central-1.amazonaws.com/($username)/index.html"} | each {|url| ^open $url}

```

`open` is the macOS CLI command to open a URL, on Linux replace it with the command for the browser you want to use. (You don't need the `^` if the command does not collide with a nushell build-in.)

# The tools

## Github Actions

Running out of the box on, well, Github, see `.github`.

## Jenkins (WIP)

There is a Jenkinsfile present.

## Gitlab CI

There is a `.gitlab-ci.yml` with working test stages. Deployment has to be checked.

## TeamCity (POC)

Requires a TeamCity server, e.g. https://hub.docker.com/r/jetbrains/teamcity-server.
Due to issues with TeamCity's docker wrapper in some dockerised agents, an agent with locally installed yarn is required.
The way TeamCity handles its docker containers make a docker in docker setup rather complicated,
so that support for this rather obscure CI/CD tool is probably not worth the effort.
See `.teamcity` for a basic setup.

# portfolio: Back End

Repository of the back-end for my Portfolio Project.

## Goals

The goal of this project is to showcase my experience as Full-Stack Software Engineer and herein particular on Software Engineering topics, such as networking, Architecture Patterns and DevOps.

## Continuous Integration / Continuous Deployment

Shipping software as we build and test is a critical part of any Development Environment. This is preferable, as it allows for quick adjustments as soon as an issue is detected.

For that reason we will start with two deployment environments for our Back-End: DEV and PROD. The code should be developed in separate branches, and never merged directly to main. Instead, regular Pull Requests should be made to DEV. Once it passes the tests and the previous, we will merge to main and deploy to PROD.

### DEV
`https://portfolio-noel-backend-dev.herokuapp.com/`
Having a DEV environment will allow us to test new features as we develop them, before shipping to production.

### PROD
`https://portfolio-noel-backend-prod.herokuapp.com/`
This is the environment that will be shipped to the clients. Only reviewed pull requests and tested features on DEV will be accepted for merge to PROD.

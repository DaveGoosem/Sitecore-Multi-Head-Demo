# Sitecore-Multi-Head-Demo

Welcome to the Multi-Headed Multi-site setup demo for Sitecore JSS. This demo uses Sitecore 10.2 and assumes usage of a Next.JS SSR and Sitecore Headless SXA solution.
The concepts in here are what's important and usage of multiple Next.JS "heads" which share components from the "shared" head in the same way that Sitecore SXA Shared Site does. 
We are replicating known Sitecore Development patterns to the front end and using NPM Workspaces with a Transpiler module to allow us to access the "shared" app's components without needing to actually manage "shared" as an independant package.

See also: 
- https://davegoosem.com/sitecore-jss-multi-site-with-npm-workspaces/
- https://davegoosem.com/sitecore-headless-jss-static-site-generation-ssg/
- https://docs.npmjs.com/cli/v7/using-npm/workspaces#getting-started-with-workspaces 


## Quick Steps to set up your NPM Workspaces Solution
- ensure you have NodeJS installed: https://nodejs.org/en/download 
- ensure you have npm installed:  https://docs.npmjs.com/downloading-and-installing-node-js-and-npm `npm install -g npm` 
- install Sitecore Headless CLI: https://www.npmjs.com/package/@sitecore-jss/sitecore-jss-cli `npm i @sitecore-jss/sitecore-jss-cli`
- set up your initial site structure and workspace config

Project folder structure:

 ```
  projectRoot
   jss
     site1
     site2
     shared

//package.json file contents: (use your own values)
{
  "name": "multiheaddemo",
  "private": true,
  "workspaces": [
    "site1",
    "site2",
    "shared"
  ]
}
```


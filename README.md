# Sitecore-Multi-Head-Demo

Welcome to the Multi-Headed Multi-site setup demo for Sitecore JSS. This demo uses Sitecore 10.2 and assumes usage of a Next.JS SSR and Sitecore Headless SXA solution.
The concepts in here are what's important and usage of multiple Next.JS "heads" which share components from the "shared" head in the same way that Sitecore SXA Shared Site does. 
We are replicating known Sitecore Development patterns to the front end and using NPM Workspaces with a Transpiler module to allow us to access the "shared" app's components without needing to actually manage "shared" as an independant package.

See also: 
- https://davegoosem.com/sitecore-jss-multi-site-with-npm-workspaces/
- https://davegoosem.com/sitecore-headless-jss-static-site-generation-ssg/
- https://docs.npmjs.com/cli/v7/using-npm/workspaces#getting-started-with-workspaces
- https://doc.sitecore.com/xp/en/developers/hd/20/sitecore-headless-development/install-headless-services-using-the-package--zip-file.html
- https://doc.sitecore.com/xp/en/developers/hd/20/sitecore-headless-development/create-a-sitecore-api-key.html
- 


## Quick Steps to set up your NPM Workspaces Solution
- Stand up your Sitecore installation (use SIA or your preferred approach/toplogy). You'll need to install Sitecore Headless Services, SPE and SXA for the example: 
- Create your API Key as per instructions here: https://doc.sitecore.com/xp/en/developers/hd/20/sitecore-headless-development/create-a-sitecore-api-key.html 
- ensure you have NodeJS installed: https://nodejs.org/en/download 
- ensure you have npm installed:  https://docs.npmjs.com/downloading-and-installing-node-js-and-npm `npm install -g npm` 
- install Sitecore Headless CLI: https://www.npmjs.com/package/@sitecore-jss/sitecore-jss-cli `npm i @sitecore-jss/sitecore-jss-cli`
- set up your initial solution folder structure and npm workspaces package.json config

Project folder structure:

 ```
  projectRoot/
   jss/
     site1/
     site2/
     shared/

//package.json file contents: (use your own values) Note the names match the folder roots exactly
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

- To run up a new head, run this command in the root directory for each head: `npm init sitecore-jss@20.0.3 nextjs` (this is for version 20.0.3 nextjs - use your own values)
- follow the prompts and supply your own values for API Key and Sitecore Site Urls
- 


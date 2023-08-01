# Sitecore-Multi-Head-Demo

Welcome to the Multi-Headed Multi-site setup demo for Sitecore JSS. This demo uses Sitecore 10.2 and assumes usage of a Next.JS SSR and Sitecore Headless SXA solution.
The concepts in here are what's important and usage of multiple Next.JS "heads" which share components from the "shared" head in the same way that Sitecore SXA Shared Site does. 
We are replicating known Sitecore Development patterns to the front end and using NPM Workspaces with a Transpiler module to allow us to access the "shared" app's components without needing to actually manage "shared" as an independant package.

See also: https://davegoosem.com/sitecore-jss-multi-site-with-npm-workspaces/


## General Steps to set up your NPM Workspaces Solution

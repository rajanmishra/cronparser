CRON Parser
============================================

CLI tool to parse CRON request



##Set-Up Locally
----------------------

1. Please check the node and npm version in package.json to use the compatible version

2. Install nodejs (http://nodejs.org/en/download/) use ``` node -v ``` to check version and verfiy node installation

3. Clone or download the project from github. git@github.com:rajanmishra/cronparser.git

4. Go to the root of Project 

5. Run ``` npm install . -g ``` to install cronparser CLI globally

6. Run ``` cronparser --help ``` to see example command to get started

7. Run ``` cronparser "*/15 0 1,15 * 1-5 /usr/bin/find" ``` to parse the cron request

You should see this response


| (index)      | Values                     | 
| -------------|:--------------------------:|
| minute       |       '0 15 30 45'         |
| hour         |           '0'              |
| day of month |          '1 15'            | 
| month        |'1 2 3 4 5 6 7 8 9 10 11 12'| 
| day of week  |        '1 2 3 4 5'         | 
| command      |      '/usr/bin/find'       | 



8. Run ``` npm install ``` then ``` npm test ``` to run the test cases, we're using jest https://jestjs.io/

9. Run ``` npm uninstall . -g  ``` to uninstall the CLI


## Aplication Architechture

Application Server - Nodejs


---Please drop an email at rajanmishra2010@hotmail.com for any issue-----

# angular auto admin loopback example
This is an example app for a crud interface for your loopback app created with [generator-moda](https://github.com/johannesjo/generator-modular-angular) and [generator-aaal](https://github.com/johannesjo/generator-angular-auto-admin-loopback)
## getting started
Clone the repository
```
git clone git@github.com:johannesjo/angular-auto-admin-looopback.git
```
Install and run backend
```
cd angular-auto-admin-looopback
npm install
node .
```
Open new tab and install and run frontend
```
cd client
npm install && bower install
gulp
```
Log yourself in in the browser
```
user: john@doe.com
password: opensesame
```
Rebuild the backend (e.g. after model changes)
```
npm install -g yo bower generator-aaal
rm -r client/app/scripts/aaal
cd client && yo aaal
```

# TP_TestLogiciel
this is a simple flask application with Javascript. I implemented 3 types of testin : unit Test, integreation Test and e2e Testing
## Python Requirements 
To install needed requirements execute the command :  
``` 
pip install -r requirements.txt 
```
     
## Unit Test
Commands : 

```
cd unitTest  
```
```
python3 -m pytest -vvv --cov=app test_app.py
```
## Integration Test
Commands :  
```
cd integration_test 
```
```
python3 -m pytest  --cov=app test.py
```
## E2E TEst
Commands:
```
cd e2eTest
```
Install cypress with NPM
```
npm install
```
Open Cypress :
``` 
node_modules/.bin/cypress open
```


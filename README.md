## to run

`npm install`

`npm run dev`

# info
uses generated api calls from openapi-generator-cli, needs running server to generate api calls
```bash
openapi-generator-cli generate -i http://localhost:8080/v3/api-docs -g typescript-axios -o src/api/generated
```

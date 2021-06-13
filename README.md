Nest js from `nest new app` with the usual configuration already done.

Requires:
- mongodb instance somewhere
- Configuration file `src/config/dev.env` for mongo uri

Plus: 
- Update every dependencie to latest 06/12/2020

Config:
- `'prettier/prettier':'error',`
- `'@typescript-eslint/explicit-function-return-type':'off'`
- `'files':['*.ts'],
  'rules':{
  '@typescript-eslint/explicit-function-return-type':['error']
  }`
  

Extra libraries: 
- "@nestjs/mongoose"
- "class-transformer"
- "class-validator"
- "mongoose"
- "swagger-ui-express"
- "@nestjs/swagger"
- "@nestjs/config"
- "ts-transformer-keys"

Extra dev-libraries
- "ts-node"
- "nodemon"
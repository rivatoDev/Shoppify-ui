const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, './src/app/environments/secrets.ts'); 

const envConfigFile = `
export const secrets = {
  apiUrl: '${process.env.apiUrl}',
  mpPk: '${process.env.mpPk}'
};
`;

fs.writeFileSync(targetPath, envConfigFile);
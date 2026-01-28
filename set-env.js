const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, './src/app/secrets/secret.ts'); 

const envConfigFile = `
export const secrets = {
  apiUrl: '${process.env.apiUrl}',
  
};
`;

fs.writeFileSync(targetPath, envConfigFile);
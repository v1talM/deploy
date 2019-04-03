import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {ApiRoot} from "../env"

Vue.use(VueAxios, axios)
const mock = '+ vue-router@3.0.2\n' +
    'added 1 package from 1 contributor and audited 12036 packages in 11s\n' +
    'found 7 vulnerabilities (6 moderate, 1 high)\n' +
    '  run `npm audit fix` to fix them, or `npm audit` for details\n' +
    'SFdeMacBook-Pro-52:deploy sf$ npm install saas-loader\n' +
    'npm ERR! code E404\n' +
    'npm ERR! 404 Not Found - GET https://registry.npmjs.org/saas-loader- Not found\n' +
    'npm ERR! 404\n' +
    'npm ERR! 404  \'saas-loader@latest\' is not in the npm registry.\n' +
    'npm ERR! 404 Your package name is not valid, because\n' +
    'npm ERR! 404  1. name can only contain URL-friendly characters\n' +
    'npm ERR! 404\n' +
    'npm ERR! 404 Note that you can also install from a\n' +
    'npm ERR! 404 tarball, folder, http url, or git url.\n' +
    '\n' +
    'npm ERR! A complete log of this run can be found in:\n' +
    'npm ERR!     /Users/sf/.npm/_logs/2019-04-02T08_29_27_001Z-debug.log\n' +
    'SFdeMacBook-Pro-52:deploy sf$ cnpm install saas-loader --save\n' +
    'bash: cnpm: command not found\n' +
    'SFdeMacBook-Pro-52:deploy sf$ npm install saas-loader --save-dev\n' +
    'npm ERR! code E404\n' +
    'npm ERR! 404 Not Found - GET https://registry.npmjs.org/saas-loader- Not found\n' +
    'npm ERR! 404\n' +
    'npm ERR! 404  \'saas-loader@latest\' is not in the npm registry.\n' +
    'npm ERR! 404 Your package name is not valid, because\n' +
    'npm ERR! 404  1. name can only contain URL-friendly characters\n' +
    'npm ERR! 404\n' +
    'npm ERR! 404 Note that you can also install from a\n' +
    'npm ERR! 404 tarball, folder, http url, or git url.\n' +
    '\n' +
    'npm ERR! A complete log of this run can be found in:\n' +
    'npm ERR!     /Users/sf/.npm/_logs/2019-04-02T08_29_43_053Z-debug.log\n' +
    'SFdeMacBook-Pro-52:deploy sf$ npm install sass-loader node-sass --save-dev\n' +
    '\n' +
    '> node-sass@4.11.0 install /Users/sf/Dev/fe/deploy/node_modules/node-sass\n' +
    '> node scripts/install.js\n' +
    '\n' +
    'Cached binary found at /Users/sf/.npm/node-sass/4.11.0/darwin-x64-67_binding.node\n' +
    '\n' +
    '> node-sass@4.11.0 postinstall /Users/sf/Dev/fe/deploy/node_modules/node-sass\n' +
    '> node scripts/build.js\n' +
    '\n' +
    'Binary found at /Users/sf/Dev/fe/deploy/node_modules/node-sass/vendor/darwin-x64-67/binding.node\n' +
    'Testing binary\n' +
    'Binary is fine\n' +
    'npm notice save node-sass is being moved from dependencies to devDependencies\n' +
    'npm WARN ajv-keywords@3.4.0 requires a peer of ajv@^6.9.1 but none is installed. You must install peer dependencies yourself.\n' +
    '\n' +
    '+ sass-loader@7.1.0\n' +
    '+ node-sass@4.11.0\n' +
    'added 9 packages from 16 contributors, updated 1 package and audited 12058 packages in 91.029s\n' +
    'found 7 vulnerabilities (6 moderate, 1 high)\n' +
    '  run `npm audit fix` to fix them, or `npm audit` for details\n' +
    'SFdeMacBook-Pro-52:deploy sf$ npm install jquery\n' +
    'npm WARN ajv-keywords@3.4.0 requires a peer of ajv@^6.9.1 but none is installed. You must install peer dependencies yourself.\n' +
    '\n' +
    '+ jquery@3.3.1\n' +
    'added 1 package from 1 contributor and audited 12059 packages in 9.978s\n' +
    'found 7 vulnerabilities (6 moderate, 1 high)\n' +
    '  run `npm audit fix` to fix them, or `npm audit` for details'

const config = {
    onUploadProgress: progressEvent => {
        var complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
        this.$store.dispatch('setRequestProgress', complete)
    }
}

export default {
    pullCodeByModule (module) {
        return mock
        // return Vue.axios.get( ApiRoot + '/repertory/api/repertoryjson?module=' + module, config )
    }
}
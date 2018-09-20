const isProduction = process.env.NODE_ENV === 'production';
module.exports = require("marko-starter").projectConfig({
  name: "Rtalwar26-blog", // Optional, but added here for demo purposes
  lassoConfig: {
    bundlingEnabled: isProduction,
    fingerprintsEnabled: isProduction,
    require: {
      
    },
    minifyJS: isProduction,
    urlPrefix: isProduction ? "/sana-website" : "/static",
    plugins: [
      'lasso-marko',
      {
        "plugin": "lasso-sass",
        "config":{
            "includePaths":["./node_modules"],
            "indentedSyntax":true
            
        }
      }

    ]
  }
});

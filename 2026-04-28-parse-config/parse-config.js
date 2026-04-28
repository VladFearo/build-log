const fs = require("fs");


const args = process.argv.slice(2);

if (args.length === 0 ){
    console.error("Error: missing config file path")
} else if(args.length > 1){
    console.error("Error: too many arguments")
} else {
    const configPath = args[0];
    const fileContent = fs.readFileSync(configPath, "utf8");
    console.log(fileContent);
}
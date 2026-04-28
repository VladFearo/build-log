const fs = require("fs");

function readJsonFile(filepath){
    try {
        const fileContent = fs.readFileSync(filepath, "utf8");
        const data = JSON.parse(fileContent);
        return data;
    } catch (err) {
        console.error("Error: invalid JSON");
        return null;
    }
    
}

const args = process.argv.slice(2);

if (args.length === 0 ){
    console.error("Error: missing config file path")
} else if(args.length > 1){
    console.error("Error: too many arguments")
} else {
    const configPath = args[0];
    const data = readJsonFile(configPath);
    if (data){
    console.log(data);
    }
}
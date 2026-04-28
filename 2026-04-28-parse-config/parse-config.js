const args = process.argv.slice(2);

if (path.length === 0 ){
    console.error("Error: missing config file path")
} else if(path.length > 1){
    console.error("Error: too many arguments")
} else {
    console.log(`Config path: ${args[0]}`);
}
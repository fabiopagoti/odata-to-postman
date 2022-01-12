const { program } = require("commander");
program.version("0.0.1");

//commands

program
  .command("test")
  .description("test")
  .action(function (name) {
    console.log(name);
  });

//options

program.option(
  "-d, --odata",
  "postman",
  "https://services.odata.org/V2/OData/OData.svc/"
);

program.parse(process.argv);

const fs = require("fs");

fs.writeFileSync("./.env", `${process.env.API}\n`);

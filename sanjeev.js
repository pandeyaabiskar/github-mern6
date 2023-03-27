import chalk from "chalk";

//console.log(chalk.bgCyan(chalk.magenta("hello")))

const NameOfPlace = "Mountain"

const change = chalk.red(NameOfPlace)
const bg = chalk.bgBlue(change)

console.log(bg)
import chalk from "chalk";

console.log(chalk.red("yo man! jessie pinkman "));

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Get out of the error!'));
console.log(warning('I warn you again !'));

import { modifierNames, foregroundColorNames } from 'chalk';

console.log(modifierNames.includes('bold'));
//=> true

console.log(foregroundColorNames.includes('pink'));
//=> false


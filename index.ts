import inquirer from 'inquirer'

let {paragraph} = await  inquirer.prompt({
    type:"input",
    name:"paragraph",
    message : "Enter Paragrapgh"
})


let countCharacter = paragraph.replace(/\s/g , '').length

let wordCounter = paragraph.split(/\s/).filter(word => word.length > 0).length

console.log(`It Has ${countCharacter} Characters And ${wordCounter} Words`);


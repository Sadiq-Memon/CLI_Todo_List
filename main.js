#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyan("\t\n Welcome  to  my  TODO  List \t\n"));
let lists = [];
let condition = true;
while (condition) {
    let operation = await inquirer.prompt([
        {
            name: "operator",
            type: "list",
            message: "Please select operation",
            choices: ["AddItem", "ShowItem", "DeleteTodo", "Exit"]
        },
    ]);
    if (operation.operator === "AddItem") {
        let add = await inquirer.prompt([
            {
                name: "addtask",
                type: "input",
                message: "what do you want to add in your todos?"
            }
        ]);
        lists.push(add.addtask);
        console.log(lists);
    }
    else if (operation.operator === "ShowItem") {
        console.log(lists);
    }
    else if (operation.operator === "DeleteTodo") {
        let del = await inquirer.prompt([
            {
                name: "DeleteTask",
                type: "input",
                message: "What do you want to delete in your todos"
            }
        ]);
        lists = lists.filter(item => item !== del.DeleteTask);
        console.log(`"${del.DeleteTask}" has been deleted from the todos.`);
        console.log(lists);
    }
    else if (operation.operator === "Exit") {
        console.log("Thanks for Using my todoList");
        break;
    }
    else {
        console.log("Please select a valid Operator");
    }
    ;
}
;

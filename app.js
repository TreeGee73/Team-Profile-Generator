// Node Packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Outside File Variables
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const questions = require("./lib/questions");

// Path Variables
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Team Variable (Built by question answers)
let teamData = [];
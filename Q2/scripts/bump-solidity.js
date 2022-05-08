const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment

let multiplier3content = fs.readFileSync("./contracts/Multiplier3Verifier.sol", { encoding: "utf-8" });
let multiplier3bumped = multiplier3content.replace(solidityRegex, "pragma solidity ^0.8.0");
multiplier3bumped = multiplier3bumped.replace(verifierRegex, "contract Multiplier3Verifier");

fs.writeFileSync("./contracts/Multiplier3Verifier.sol", multiplier3bumped);
fs.writeFileSync("./contracts/Multiplier3Verifier_plonk.sol", multiplier3bumped);
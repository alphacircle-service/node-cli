#!/usr/bin/env node
const fs = require("fs");

(() => {
  const root = process.argv[2];
  if (root) {
    console.log("\x1b[32m%s\x1b[0m", "root : " + root);
    fs.mkdirSync(`${root}/domain/repository`, { recursive: true });
    fs.mkdirSync(`${root}/interface-adapter/dto`, { recursive: true });
    fs.mkdirSync(`${root}/use-case`, { recursive: true });
    fs.mkdirSync(`${root}/infra/entity`, { recursive: true });
  } else {
    console.error("\x1b[31m%s\x1b[0m", "Error, usage: $mkdirca {root}");
  }
})();

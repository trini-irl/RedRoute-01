const { spawn } = require("node:child_process");

const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const children = [
  spawn(npm, ["run", "dev"], { cwd: __dirname, stdio: "inherit", shell: true }),
  spawn(npm, ["run", "dev:backend"], { cwd: __dirname, stdio: "inherit", shell: true }),
];

function stopAll() {
  for (const child of children) {
    if (!child.killed) child.kill();
  }
}

process.on("SIGINT", () => {
  stopAll();
  process.exit(0);
});

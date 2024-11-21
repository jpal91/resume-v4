import { defineConfig } from "checkly";

export default defineConfig({
  projectName: "Resume",
  logicalId: "resume-monitoring-1",
  repoUrl: "https://github.com/jpal91/resume-v4",
  checks: {
    activated: true,
    muted: false,
    runtimeId: "2022.10",
    frequency: 60,
    locations: ["us-east-1", "eu-west-1"],
    tags: ["website"],
    alertChannels: [],
    checkMatch: "**/__checks__/*.check.ts",
    ignoreDirectoriesMatch: [],
    browserChecks: {
      frequency: 30,
      testMatch: "**/__checks__/*.spec.ts",
    },
  },
  cli: {
    runLocation: "us-east-1",
  },
});

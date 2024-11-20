import { defineConfig } from "checkly";

export default defineConfig({
  projectName: "Website Monitoring",
  logicalId: "website-monitoring-1",
  repoUrl: "https://github.com/acme/website",
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
      frequency: 10,
      testMatch: "**/__checks__/*.spec.ts",
    },
  },
  cli: {
    runLocation: "us-east-1",
  },
});

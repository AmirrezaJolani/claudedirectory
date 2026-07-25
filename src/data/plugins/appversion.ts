import { Plugin } from "@/lib/types";

export const appversionPlugin: Plugin = {
  slug: "appversion",
  title: "AppVersion",
  description:
    "Stop forgetting to bump package.json and stop guessing the SemVer level. Analyzes commits since the last version, recommends major/minor/patch with per-change reasoning, applies it to appversion.json + package.json, updates the changelog, and cuts a tagged GitHub Release. Optional read-only ticket enrichment from Jira, Plane, Shortcut, ClickUp, and Linear.",
  tags: ["semver", "versioning", "changelog", "release", "git", "github"],
  featured: false,
  dateAdded: "2026-07-25",
  author: {
    name: "Amirreza Jolani",
    url: "https://github.com/AmirrezaJolani",
  },
  repoUrl: "https://github.com/AmirrezaJolani/appversion-skill",
  installCommand:
    "/plugin marketplace add AmirrezaJolani/appversion-skill && /plugin install appversion@appversion-skill",
  config: `{
  "enabledPlugins": {
    "appversion@appversion-skill": true
  }
}`,
  commands: [
    { name: "/appversion:package", description: "Bump the version and sync package.json, config JSON files, and badges" },
    { name: "/appversion:github", description: "Create the annotated tag and cut the GitHub Release" },
    { name: "/appversion:release", description: "Run the full guided release: analyze, bump, changelog, tag, Release" },
    { name: "/appversion:jira", description: "Set up and verify read-only Jira ticket enrichment" },
    { name: "/appversion:linear", description: "Set up and verify read-only Linear issue enrichment" },
    { name: "/appversion:plane", description: "Set up and verify read-only Plane issue enrichment" },
    { name: "/appversion:shortcut", description: "Set up and verify read-only Shortcut story enrichment" },
    { name: "/appversion:clickup", description: "Set up and verify read-only ClickUp task enrichment" },
  ],
  relatedItems: [
    { type: "plugin", slug: "changelog-generator", relationship: "works-with" },
    { type: "skill", slug: "changelog", relationship: "works-with" },
  ],
};

import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Gergely Pákozdi",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["GhActions", "Jenkins", "Cloud", "Infrastructure"],
    // Which CI/CD tools do you use in your project?
    tools: ["Jenkins", "GhActions", "ArgoCD"],
    // What do you want to learn in this workshop?
    expectations: ["Have a better overview about the tools and the idea."],
  },
});

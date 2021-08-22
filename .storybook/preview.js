let modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "dialog-container");
document.querySelector("body").appendChild(modalRoot);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

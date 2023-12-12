const Page = require("../utils/Page");

const PDiv = require("../elements/PDiv");

const page = new Page({
  title: "Главная страница",
  content: [
    PDiv({
      classes: "blocks",
      content: [
        PDiv({ classes: "blocks__block", content: ["Block-1"] }),
        PDiv({ classes: "blocks__block", content: ["Block-2"] }),
      ],
    }),
  ],
});

module.exports = page;

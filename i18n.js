const NextI18Next = require("next-i18next").default;
const path = require("path");

module.exports = new NextI18Next({
  defaultLanguage: "es",
  otherLanguages: ["en","hi", "ar", "zh", "fr"],
  localePath: path.resolve("./public/static/locales"),
});

const handleGeneratePassword = (length, options) => {
  var chosenCharacters = "",
    password = "";
  const addedOptions = options.filter((option) => option.state);
  addedOptions.map((item, index) => {
    switch (item.option) {
      case "Include Lowercase Letters":
        chosenCharacters += "abcdefghijklmnopqrstuvwxyz";
        break;

      case "Include Uppercase Letters":
        chosenCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;

      case "Include Numbers":
        chosenCharacters += "1234567890";
        break;

      case "Include Symbols":
        chosenCharacters += "!@#$%^&*()?|";
        break;

      default:
        break;
    }
  });
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chosenCharacters.length);
    password += chosenCharacters.charAt(index);
  }
  return password;
};

export default handleGeneratePassword;

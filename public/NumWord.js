//Class with static method to translate numbers 1-10 to strings

export default class NumWord {
  static translate = num => {
    let ret = "";
    switch (num) {
      case 1:
        ret = "one";
        break;
      case 2:
        ret = "two";
        break;
      case 3:
        ret = "three";
        break;
      case 4:
        ret = "four";
        break;
      case 5:
        ret = "five";
        break;
      case 6:
        ret = "six";
        break;
      case 7:
        ret = "seven";
        break;
      case 8:
        ret = "eight";
        break;
      case 9:
        ret = "nine";
        break;
      case 10:
        ret = "ten";
        break;
      default:
        break;
    }
    return ret;
  };
}

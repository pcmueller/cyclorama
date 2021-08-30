const utils = {

  capitalizeElements(array) {
    const formatted = array.map(string => {
      let words = string.split(' ');
      const capitalized = words.map(word => {
        let [ first, ...others ] = word;
        return first.toUpperCase() + others.join('');
      });
      return capitalized.join(' ');
    });
    return formatted;
  },
}

export default utils;
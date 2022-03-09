const parseGenders = gender => {
  switch (gender) {
    case 'Male':
      return 0;

    case 'Female':
      return 1;

    default:
      return 2;
  }
};

export default parseGenders;

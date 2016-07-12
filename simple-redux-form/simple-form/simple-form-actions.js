export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_GENDER = 'CHANGE_GENDER';

export const changeName = (name) => {
  return {
    type: CHANGE_NAME,
    payload: {
      name
    }
  };
};

export const changeGender = (gender) => {
  return {
    type: CHANGE_GENDER,
    payload: {
      gender
    }
  };
};

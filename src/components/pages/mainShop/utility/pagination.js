import _ from 'lodash';
export const pagination = (category, data) => {
  if (!category) {
    let pageSize = 16;
    const dataObj = {};
    data = _.shuffle(data);
    data = _.chunk(data, pageSize);
    for (let i = 0; i < data.length; i++) {
      dataObj[i] = data[i];
    }
    return dataObj;
  } else {
    const dataObj = {};

    for (let d of data) {
      const firstWord = d.subCategory?.trim()[0];
      if (!dataObj[firstWord]) {
        dataObj[firstWord] = {};
        dataObj[firstWord][d.subCategory] = [d];
      } else {
        if (dataObj[firstWord][d.subCategory]) {
          dataObj[firstWord][d.subCategory].push(d);
        } else {
          dataObj[firstWord][d.subCategory] = [d];
        }
      }
    }
    return dataObj;
  }
};

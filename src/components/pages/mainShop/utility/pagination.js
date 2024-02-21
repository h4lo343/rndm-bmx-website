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
  }
};

const CANCEL_TYPE = 1;

export default {
  findCancel(arr) {
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].type === CANCEL_TYPE) {
        flag = arr[i]['message'];
      }
    }
    return flag;
  },
  filterData(arr) {
    const data = [];
    arr.forEach((item) => {
      if (item.type !== CANCEL_TYPE) {
        data.push(item);
      }
    });
    return data;
  }
};

exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf(arr, item) {
    let firstIndex = -1;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === item && firstIndex == -1) {
        firstIndex = i;
      }
    }
    return firstIndex;
  },

  sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
  },

  remove(arr, item) {
    const indexToRemove = [];
    for(let i = arr.length - 1; i >= 0; i--) {
      if(arr[i] === item) {
        indexToRemove.push(i);
      }
    }
    for(let i = 0; i < indexToRemove.length; i++) {
      arr.splice(indexToRemove[i], 1);
    }
    return arr;
  },

  removeWithoutCopy(arr, item) {
    const indexToRemove = [];
    for(let i = arr.length - 1; i >= 0; i--) {
      if(arr[i] === item) {
        indexToRemove.push(i);
      }
    }
    for(let i = 0; i < indexToRemove.length; i++) {
      arr.splice(indexToRemove[i], 1);
    }
    return arr;
  },

  append(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate(arr) {
    arr.pop();
    return arr;
  },

  prepend(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail(arr) {
    arr.shift();
    return arr;
  },

  concat(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count(arr, item) {
    let count = 0;
    arr.forEach((num) => {
      if(num === item) {
        count++;
      }
    });
    return count;
  },

  duplicates(arr) {
    const singles = [];
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr.length; j++) {
        if(i != j && arr[i] === arr[j]) {
          if(!singles.includes(arr[i])) {
            singles.push(arr[i]);
          }
        }
      }
    }
    return singles;
  },

  square(arr) {
    const squares = []
    arr.forEach((num) => {
      squares.push(num * num);
    });
    return squares;
  },

  findAllOccurrences(arr, target) {
    const indexes = [];
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        indexes.push(i);
      }
    }
    return indexes;
  }
};

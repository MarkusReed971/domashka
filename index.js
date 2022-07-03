'use strict'

// Не открывается у меня твоя ссылка, перепишу код просто :^(


const circleEl1 = document.getElementById('circle1');
const circleEl2 = document.getElementById('circle2');

const reset = (element) => {
  element.style = null;
}

const handleReset1 = (callback) => {
  const isDirty = !!circleEl1.style.left || !!circleEl1.style.width;
  if (isDirty) reset(circleEl1);
  setTimeout(callback, isDirty ? 2000 : 0);
}

const handleReset2 = () => {
  reset(circleEl2);
}

// пункт 1

const moveCircle = (x, y, callback) => {
  circleEl1.style.left = `${x}px`;
  circleEl1.style.top = `${y}px`;

  setTimeout(callback, 2000);
}

const callback1 = () => {
  console.log('Пункт 1: ', 'Вроде всё!');
}

const handleMove = () => {
  moveCircle(150, 150, callback1);
}


// пункт 2

const resizeCircle = (radius, callback) => {
  const currentWidth = circleEl1.offsetWidth;
  const delta = (radius - currentWidth) / 2;

  circleEl1.style.width = `${radius}px`;
  circleEl1.style.height = `${radius}px`;

  const currentLeft = circleEl1.offsetLeft;
  const currentTop = circleEl1.offsetTop;

  circleEl1.style.left = `${currentLeft - delta}px`;
  circleEl1.style.top = `${currentTop - delta}px`;

  setTimeout(callback, 2000);
}

const callback2 = () => {
  console.log('Пункт 2: ', 'Вроде тоже всё!');
}

const handleResize = () => {
  resizeCircle(150, callback2);
}


// пункт 3

const callback3 = () => {
  console.log('Пункт 3: ', 'Фуууууух, и здесь всё!');
}

const handleChain = () => {
  moveCircle(150, 150, () => {
    resizeCircle(150, () => {
      moveCircle(20, 150, () => {
        resizeCircle(50, () => {
          moveCircle(20, 60, callback3);
        })
      })
    })
  })
}


// пункт 4

const callback4 = () => {
  console.log('Пункт 4: ', 'И даже тут всё!');
}

const moveCircleWithPromise = (x, y) => {
  return new Promise((resolve) => {
    moveCircle(x, y, resolve);
  });
}

const resizeCircleWithPromise = (radius) => {
  return new Promise((resolve) => {
    resizeCircle(radius, resolve);
  });
}

const handleChainWithPromise = () => {
  moveCircleWithPromise(150, 150)
    .then(() => {
      // Тут разверну типа знаю, что return - это важно!
      return resizeCircleWithPromise(150);
    })
    .then(() => moveCircleWithPromise(20, 150))
    .then(() => resizeCircleWithPromise(50))
    .then(() => moveCircleWithPromise(20, 60))
    .then(callback4);
}


// пункт 5

const TIMEOUT_LIMIT = 2000;
const TIMEOUT_STEPS_COUNT_LIMIT = 200;
const TIMEOUT_STEP = Math.ceil(TIMEOUT_LIMIT / TIMEOUT_STEPS_COUNT_LIMIT);

const moveCircle2 = (x, y, callback) => {
  const initialLeft = circleEl2.offsetLeft;
  const initialTop = circleEl2.offsetTop;

  const stepX = (x - initialLeft) / TIMEOUT_STEPS_COUNT_LIMIT;
  const stepY = (y - initialTop) / TIMEOUT_STEPS_COUNT_LIMIT;

  let timeoutStepsCount = 0;
  const setIntervalId = setInterval(() => {
    circleEl2.style.left = `${initialLeft + stepX * timeoutStepsCount}px`;
    circleEl2.style.top = `${initialTop + stepY * timeoutStepsCount}px`;

    if (timeoutStepsCount++ === TIMEOUT_STEPS_COUNT_LIMIT) {
      clearInterval(setIntervalId);
      callback();
    }
  }, TIMEOUT_STEP);
}

const handleMove2 = () => {
  moveCircle2(150, 150, callback1);
}


const resizeCircle2 = (radius, callback) => {
  const initialWidth = circleEl2.offsetWidth;
  const initialLeft = circleEl2.offsetLeft;
  const initialTop = circleEl2.offsetTop;

  const stepSize = (radius - initialWidth) / TIMEOUT_STEPS_COUNT_LIMIT;
  const stepPosition = stepSize / 2;

  let timeoutStepsCount = 0;
  const setIntervalId = setInterval(() => {
    circleEl2.style.width = `${initialWidth + stepSize * timeoutStepsCount}px`;
    circleEl2.style.height = `${initialWidth + stepSize * timeoutStepsCount}px`;

    circleEl2.style.left = `${initialLeft - stepPosition * timeoutStepsCount}px`;
    circleEl2.style.top = `${initialTop - stepPosition * timeoutStepsCount}px`;

    if (timeoutStepsCount++ === TIMEOUT_STEPS_COUNT_LIMIT) {
      clearInterval(setIntervalId);
      callback();
    }
  }, TIMEOUT_STEP);
}

const handleResize2 = () => {
  resizeCircle2(150, callback2);
}


const handleChain2 = () => {
  moveCircle2(150, 150, () => {
    resizeCircle2(150, () => {
      moveCircle2(20, 150, () => {
        resizeCircle2(50, () => {
          moveCircle2(20, 60, callback3);
        })
      })
    })
  })
}


const moveCircleWithPromise2 = (x, y) => {
  return new Promise((resolve) => {
    moveCircle2(x, y, resolve);
  });
}

const resizeCircleWithPromise2 = (radius) => {
  return new Promise((resolve) => {
    resizeCircle2(radius, resolve);
  });
}

const handleChainWithPromise2 = () => {
  moveCircleWithPromise2(150, 150)
    .then(() => resizeCircleWithPromise2(150))
    .then(() => moveCircleWithPromise2(20, 150))
    .then(() => resizeCircleWithPromise2(50))
    .then(() => moveCircleWithPromise2(20, 60))
    .then(callback4);
}

const handleMagic = () => {
  handleReset2();
  handleReset1(() => {
    handleChainWithPromise();
    handleChainWithPromise2();
  });
}

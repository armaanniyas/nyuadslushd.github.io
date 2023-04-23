const targetDate = new Date();
// set target date as october 20, 2023:
targetDate.setFullYear(2023);
targetDate.setMonth(5);
targetDate.setDate(20);
targetDate.setHours(0);
targetDate.setMinutes(0);
targetDate.setSeconds(0);

function getTimeSegmentElements(segmentElement) {
  const segmentDisplay = segmentElement.querySelector(
    '.segment-display'
  );
  const segmentDisplayTop = segmentDisplay.querySelector(
    '.segment-display__top'
  );
  const segmentDisplayBottom = segmentDisplay.querySelector(
    '.segment-display__bottom'
  );

  const segmentOverlay = segmentDisplay.querySelector(
    '.segment-overlay'
  );
  const segmentOverlayTop = segmentOverlay.querySelector(
    '.segment-overlay__top'
  );
  const segmentOverlayBottom = segmentOverlay.querySelector(
    '.segment-overlay__bottom'
  );

  return {
    segmentDisplayTop,
    segmentDisplayBottom,
    segmentOverlay,
    segmentOverlayTop,
    segmentOverlayBottom,
  };
}

function updateSegmentValues(
  displayElement,
  overlayElement,
  value
) {
  displayElement.textContent = value;
  overlayElement.textContent = value;
}

function updateTimeSegment(segmentElement, timeValue) {
  const segmentElements =
    getTimeSegmentElements(segmentElement);

  if (
    parseInt(
      segmentElements.segmentDisplayTop.textContent,
      10
    ) === timeValue
  ) {
    return;
  }

  segmentElements.segmentOverlay.classList.add('flip');

  updateSegmentValues(
    segmentElements.segmentDisplayTop,
    segmentElements.segmentOverlayBottom,
    timeValue
  );

  function finishAnimation() {
    segmentElements.segmentOverlay.classList.remove('flip');
    updateSegmentValues(
      segmentElements.segmentDisplayBottom,
      segmentElements.segmentOverlayTop,
      timeValue
    );

    this.removeEventListener(
      'animationend',
      finishAnimation
    );
  }

  segmentElements.segmentOverlay.addEventListener(
    'animationend',
    finishAnimation
  );
}

function updateTimeSection(sectionID, timeValue) {
  const firstNumber = Math.floor(timeValue / 10) || 0;
  const secondNumber = timeValue % 10 || 0;
  const sectionElement = document.getElementById(sectionID);
  const timeSegments =
    sectionElement.querySelectorAll('.time-segment');

  updateTimeSegment(timeSegments[0], firstNumber);
  updateTimeSegment(timeSegments[1], secondNumber);
}

// update time section for days if days is greater than 3 digits
function updateTimeSectionDays(sectionID, timeValue) {
    const firstNumber = Math.floor(timeValue / 100) || 0;
    const secondNumber = Math.floor(timeValue / 10) || 0;
    const thirdNumber = timeValue % 10 || 0;
    const sectionElement = document.getElementById(sectionID);
    const timeSegments = sectionElement.querySelectorAll('.time-segment');
    if (firstNumber === 0) {
    updateTimeSegment(timeSegments[0], 0);
    updateTimeSegment(timeSegments[1], secondNumber);
    updateTimeSegment(timeSegments[2], thirdNumber);
    }
    else {
    updateTimeSegment(timeSegments[0], firstNumber);
    updateTimeSegment(timeSegments[1], secondNumber);
    updateTimeSegment(timeSegments[2], thirdNumber);
    }
}


function getTimeRemaining(targetDateTime) {
  const nowTime = Date.now();
  const complete = nowTime >= targetDateTime;

  if (complete) {
    return {
      complete,
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
    };
  }

  const secondsRemaining = Math.floor(
    (targetDateTime - nowTime) / 1000
  );
  const days = Math.floor(secondsRemaining / 60 / 60 / 24);
  const hours = Math.floor(secondsRemaining / 60 / 60)%24;
  const minutes =
    (Math.floor(secondsRemaining / 60) - hours * 60)%60;
  const seconds = secondsRemaining % 60;

  return {
    complete,
    seconds,
    minutes,
    hours,
    days,
  };
}

function updateAllSegments() {
  const timeRemainingBits = getTimeRemaining(
    new Date(targetDate).getTime()
  );

  updateTimeSection('seconds', timeRemainingBits.seconds);
  updateTimeSection('minutes', timeRemainingBits.minutes);
  updateTimeSection('hours', timeRemainingBits.hours);
//   if (timeRemainingBits.days < 99) {
//     updateTimeSection('days', timeRemainingBits.days);
//   } else {
    updateTimeSectionDays('days', timeRemainingBits.days);}
// }

const countdownTimer = setInterval(() => {
  const isComplete = updateAllSegments();

  if (isComplete) {
    clearInterval(countdownTimer);
  }
}, 1000);

updateAllSegments();
const addThreeFadeOutClasses = (list, setActiveNotifs) => {
  const freshlist = [];
  list.forEach((toBeRemoved) => {
    toBeRemoved.fadeOut = 'fadeOut';
    freshlist.push(toBeRemoved);
  });
  setActiveNotifs(freshlist);
};

export const setFadeOutNext = (
  maxNotifs,
  activeNotifs,
  waitingNotifs,
  setActiveNotifs,
  setWaitingNotifs,
) => {
  const timer = setTimeout(() => {
    addThreeFadeOutClasses(activeNotifs, setActiveNotifs);

    setTimeout(() => {
      setActiveNotifs(waitingNotifs.slice(0, maxNotifs));
      setWaitingNotifs(waitingNotifs.slice(maxNotifs));
    }, 250);
  }, 5000);
  return () => clearTimeout(timer);
};

export const setFadeOutRest = (
  maxNotifs,
  activeNotifs,
  waitingNotifs,
  setActiveNotifs,
  setWaitingNotifs,
) => {
  const timer = setTimeout(() => {
    addThreeFadeOutClasses(activeNotifs, setActiveNotifs);
    setTimeout(() => {
      setActiveNotifs([]);
      setWaitingNotifs([]);
    }, 250);
  }, 5000);
  return () => clearTimeout(timer);
};

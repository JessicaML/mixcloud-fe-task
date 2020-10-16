const addNotif = (list, waitingNotifs, setWaitingNotifs) => {
  setWaitingNotifs(waitingNotifs.slice(1));
  list.push(waitingNotifs[0]);
  return list;
};

const addslideUpClass = (follower, activeNotifs, setActiveNotifs) => {
  const newList = [];
  activeNotifs.forEach((notif) => {
    if (notif.key === follower.key) {
      notif.slideUp = 'slideUp';
    }
    newList.push(notif);
  });
  setActiveNotifs(newList);
};

const removeNotif = (follower, activeNotifs, setActiveNotifs) => {
  addslideUpClass(follower, activeNotifs, setActiveNotifs);
  const list = activeNotifs.filter((notif) => notif.key !== follower.key);
  return list;
};

const removeOrReplaceNotif = (
  follower,
  activeNotifs,
  waitingNotifs,
  setActiveNotifs,
  setWaitingNotifs,
) => {
  const list = removeNotif(follower, activeNotifs, setActiveNotifs);
  if (waitingNotifs.length > 1 && activeNotifs.length < 4) {
    setTimeout(() => {
      setActiveNotifs(addNotif(list, waitingNotifs, setWaitingNotifs));
    }, 250);
  } else {
    setTimeout(() => {
      setActiveNotifs(list);
    }, 250);
  }
};

export default removeOrReplaceNotif;

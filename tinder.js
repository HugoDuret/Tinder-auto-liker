function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function start() {
  setInterval(async function () {
    // scroll through other photos
    const otherPhotos = document.getElementsByClassName(
      "bullet D(ib) Va(m) Cnt($blank)::a D(b)::a Cur(p) H(4px)::a W(100%)::a Py(4px) Px(2px) W(100%) Bdrs(100px)::a Bgc($c-ds-background-tappy-indicator-inactive)::a focus-background-style"
    );
    for (let index = 0; index < otherPhotos.length; index++) {
      const photo = otherPhotos.item(index);
      photo.click();
      await sleep((Math.random() + 1) * 1000);
    }

    let likeButton = null;
    // click the Info button
    const infoButtons = document.getElementsByClassName(
      "P(0) Trsdu($normal) Sq(28px) Bdrs(50%) Cur(p) Ta(c) Scale(1.2):h Mb(12px)--ml Mb(8px) focus-button-style"
    );
    if (infoButtons && infoButtons.item(0)) {
      infoButtons.item(0).click();
      await sleep((Math.random() + 1) * 1000);
      likeButton = document
        .getElementsByClassName(
          "button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgc($c-ds-background-primary)"
        )
        .item(1);
    } else {
      likeButton = document
        .getElementsByClassName(
          "button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-like):a"
        )
        .item(0);
    }

    // a pop_up showed
    if (!likeButton) {
      // a pop-up proposing more, so we answer no 'Non merci' in French
      const divs = document.getElementsByTagName("div");
      let nonMerciFound = false;
      for (let index = 0; index < divs.length; index++) {
        const element = divs.item(index);
        if (
          element.innerHTML === "Non merci" ||
          element.innerHTML === "Peut-être plus tard"
        ) {
          element.click();
          nonMerciFound = true;
          break;
        }
      }
      if (!nonMerciFound) {
        throw new Error("Can't find button and no dismissable pop-op found");
      }
    }

    likeButton.click();
  }, (Math.random() + 1) * 1500);
}

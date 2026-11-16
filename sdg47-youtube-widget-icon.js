document.addEventListener("DOMContentLoaded", () => {
  try {
    const html = document.documentElement || document.querySelector("html");
    const body = document.body || document.querySelector("body");

    const fontFamilyVar = "--font-family-var";
    const robotoBold = getComputedStyle(html)
      .getPropertyValue(fontFamilyVar)
      .trim();

    const copy = "copy";
    const dragstart = "dragstart";
    const keydown = "keydown";
    const select = "select";

    const def = "default";
    const none = "none";

    const diamond = "#";
    const get = (id) =>
      document.getElementById(id) || document.querySelector(diamond + id);

    const youtubeIconImgBgDiv = get("youtubeIconImgBgContainerId");
    const youtubeBgDiv = get("youtubeBgContainerId");
    const youtubeIconImg = get("youtubeIconImgId");
    if (!youtubeIconImg.src || !!youtubeIconImg.alt) {
      const youtubeImgPathFile =
        "Img Ordner/Icon Img Ordner/YouTube Icon Ordner/Youtube Music Icon.png";
      const youtubeImgAltText = "YouTube Icon";

      youtubeIconImg.src = youtubeImgPathFile;
      youtubeIconImg.alt = youtubeImgAltText;
    }

    (function htmlElementSecurityToken() {
      try {
        const elementArray = [
          body,
          youtubeIconImgBgDiv,
          youtubeBgDiv,
          youtubeIconImg,
        ];
        const eventArray = [copy, dragstart, keydown, select];

        const styleData = [
          {
            fontFamily: robotoBold,
            webkitUserSelect: none,
            userSelect: none,
            cursor: def,
            pointerEvents: none,
          },
        ];

        elementArray.forEach((element) => {
          if (!element) return;

          eventArray.forEach((event) => {
            if (!event) return;

            element.addEventListener(event, (e) => e.preventDefault());
          });
        });

        elementArray.filter(Boolean).forEach((element) => {
          if (!element || !styleData[0]) return;

          if (element && styleData[0]) {
            Object.assign(element.style, styleData[0]);
          }
        });
      } catch (error) {
        console.error("Fehler beim Sichern der Elemente:", error);
      }
    })();
  } catch (error) {
    console.error("Haupt-Fehler:", error);
  }
});

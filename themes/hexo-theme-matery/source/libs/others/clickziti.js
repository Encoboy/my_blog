function flyFont(textArr, colorArr, fontSize, duration, flyHeight) {
  textArr = textArr || [
    "路飞",
    "索隆",
    "娜美",
    "乌索普",
    "山治",
    "乔巴",
    "罗宾",
    "布鲁克",
    "弗兰奇",
    "甚平",
  ];
  colorArr = colorArr || [
    "red",
    "#38ae70",
    "#ee9d4e",
    "#f5ff40",
    "#c79f78",
    "#f2bbf1",
    "#6100a4",
    "#0d0d0d",
    "#66a1c2",
    "#92c2eb",
  ];
  fontSize = fontSize || "15px";
  duration = duration || 1500;
  flyHeight = flyHeight || 200;
  $("html").click(function (event) {
    event = event || window.event;
    let oSpan = $("<span></span>");
    oSpan.css({
      position: "absolute",
      zIndex: 99999,
      fontWeight: "bold",
      fontSize: fontSize,
      userSelect: "none",
      color: colorArr[0],
      left: event.pageX + "px",
      top: event.pageY + "px",
    });
    console.log(textArr[0]);
    oSpan.text(textArr[0]);
    setTimeout(() => {
      textArr.push(textArr.shift());
      colorArr.push(colorArr.shift());
      $("body").append(oSpan);
      oSpan.animate(
        {
          top: oSpan.offset().top - flyHeight,
          opacity: 0,
        },
        duration,
        "linear",
        function () {
          $(this).remove();
        }
      );
    }, 50);
  });
}
flyFont();

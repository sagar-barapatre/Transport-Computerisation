function $$(selector, context) {
  var context = context || document;
  var elements = context.querySelectorAll(selector);
  var nodesArr = [].slice.call(elements);
  return nodesArr.length === 1 ? nodesArr[0] : nodesArr;
}

var $emotesArr = $$(".fb-emote");
var numOfEmotes = $emotesArr.length;

var $dragCont = $$(".fb-cont__drag-cont");
var $activeEmote = $$(".fb-active-emote");
var $leftEye = $$(".fb-active-emote__eye--left");
var $rightEye = $$(".fb-active-emote__eye--right");
var $smile = $$(".fb-active-emote__smile");

var emoteColors = {
  terrible: "#f8b696",
  bad: "#f9c686",
  default: "#ffd68c",
};

var animTime = 0.5;

$emotesArr.forEach(function ($emote, i) {
  var progressStep = i / (numOfEmotes - 1);
  $emote.dataset.progress = progressStep;

  $emote.addEventListener("click", function () {
    var progressTo = +this.dataset.progress;
    var type = this.dataset.emote;
    var $target = document.querySelector("#fb-emote-" + type);
    var $lEye = $target.querySelector(".fb-emote__eye--left");
    var $rEye = $target.querySelector(".fb-emote__eye--right");
    var leftEyeTargetD = $lEye.getAttribute("d");
    var rightEyeTargetD = $rEye.getAttribute("d");
    var smileTargetD = $target
      .querySelector(".fb-emote__smile")
      .getAttribute("d");
    var bgColor = emoteColors[type];
    if (!bgColor) bgColor = emoteColors.default;

    $$(".fb-emote.s--active").classList.remove("s--active");
    this.classList.add("s--active");

    TweenMax.to($activeEmote, animTime, { backgroundColor: bgColor });
    TweenMax.to($dragCont, animTime, { x: progressTo * 100 + "%" });
    TweenMax.to($leftEye, animTime, { morphSVG: $lEye });
    TweenMax.to($rightEye, animTime, { morphSVG: $rEye });
    TweenMax.to($smile, animTime, { attr: { d: smileTargetD } });
  });
});

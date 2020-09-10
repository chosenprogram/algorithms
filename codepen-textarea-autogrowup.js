function setup() {
  let template = `<p>Change <mark><span class="variableColor">prevent</span> <span class="equalColor">=</span> false</mark> to remove the <mark class="functionColor">checkEnterKey()</mark> tracking. You can also set the limit of the title area height, Play with height by <br /> changing <mark><span class="variableColor">limit</span> <span class="equalColor">=</span> <span class="functionColor">100</span></mark></p><p>Task: Remove the scrollbar from the textarea when it does not need.</p>`,
    root = document.querySelector(".root");

  root.insertAdjacentHTML("beforeend", template);
  return false;
}

window.addEventListener('load', setup);

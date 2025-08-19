let count = document.querySelector("textarea");
count.addEventListener("input", () => {
  let chrValueStore = document.querySelector("#char-count");
  let wordValueStore = document.querySelector("#word-count");
  let lineValueStore = document.querySelector("#line-count");
  // Character count
  chrValueStore.textContent = count.value.length;
  // Word count (trim removes spaces from start/end)
  let text = count.value.trim();
  let words = text === "" ? 0 : text.split(/\s+/).length;
  wordValueStore.textContent = words;
  // Line count
  // split by newline character "\n"
  let lines = count.value.split("\n").length;
  lineValueStore.textContent = lines;
});

var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "htmlmixed",
  lineNumbers: true,
  theme: "material-darker"
});

function runCode() {
  var code = editor.getValue();
  document.getElementById("preview").srcdoc = code;
}

function saveCode() {
  localStorage.setItem("savedCode", editor.getValue());
  alert("Code Saved!");
}

function loadCode() {
  var saved = localStorage.getItem("savedCode");
  if (saved) {
    editor.setValue(saved);
  } else {
    alert("No Saved Code Found");
  }
}

function downloadFile() {
  var blob = new Blob([editor.getValue()], { type: "text/html" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "myfile.html";
  a.click();
}

function toggleTheme() {
  var current = editor.getOption("theme");
  editor.setOption("theme", current === "material-darker" ? "default" : "material-darker");
}

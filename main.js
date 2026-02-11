let pyReady = loadPyodide();

async function runCode() {
  const code = document.getElementById("code").value;
  const lang = document.getElementById("lang").value;
  const output = document.getElementById("output");
  output.textContent = "";

  if(lang === "python") {
    const pyodide = await pyReady;
    try {
      let result = await pyodide.runPythonAsync(code);
      output.textContent = result ?? "";
    } catch(e) {
      output.textContent = e;
    }
  } 
  else if(lang === "c" || lang === "cpp") {
    output.textContent = "C/C++ execution placeholder (add WASM runtime later)";
    // Later: run your WASM compiler here
  } 
  else if(lang === "java") {
    output.textContent = "Java execution placeholder (add CheerpJ / Doppio JVM later)";
    // Later: run your Java WASM here
  }
}
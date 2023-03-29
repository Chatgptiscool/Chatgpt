function logToTxtFile(text) {
  const currentDate = new Date();
  const fileName = `log-${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}.txt`;

  const fileContents = `Log entry from ${currentDate.toLocaleString()}:\n${text}\n`;

  const fileBlob = new Blob([fileContents], { type: "text/plain" });

  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(fileBlob);
  downloadLink.download = fileName;
  downloadLink.click();
}
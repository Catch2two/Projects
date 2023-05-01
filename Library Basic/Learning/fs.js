import fs from "fs";

function saveLibrary() {
  // Get the library data.
  const libraryData = JSON.stringify(myLibrary);

  // Save the library data to a file.
  const filePath = "library.json";
  try {
    fs.writeFileSync(filePath, libraryData);
  } catch (error) {
    console.error(error);
  }
}

// Call the saveLibrary() function whenever you want to save your library locally.
saveLibrary();
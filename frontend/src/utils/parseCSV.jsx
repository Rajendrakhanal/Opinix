import Papa from "papaparse";

const parseCSV = (file, onDataRead) => {
  Papa.parse(file, {
    complete: (result) => {
      onDataRead(result.data);
    },
    header: true, // Assuming the first row contains headers
  });
};

export default parseCSV;

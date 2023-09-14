import AddTableData from "./components/AddTableData";
import TableData from "./components/Table";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TableData />} />
        <Route path="/add-table-data" element={<AddTableData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

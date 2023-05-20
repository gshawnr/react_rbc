import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

import "./SearchBar.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="search-box">
      <TextField fullWidth value={searchInput} variant="outlined" />
      <Button
        onClick={() => console.log("search value", searchInput)}
        sx={{ backgroundColor: "yellow", color: "#000" }}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Sidebar() {
  return (
    <div>
      <div>
        <Button color="secondary">
          <Link to="/">Home</Link>
        </Button>
      </div>
      <div>
        <Button color="secondary">
          <Link to="/mypage">Profile</Link>
        </Button>
      </div>
      <div>
        <Button color="secondary">
          <Link to="/mint">NFT Market</Link>
        </Button>
      </div>
      <div>
        <Button color="secondary">
          <Link to="/write">Post</Link>
        </Button>
      </div>
    </div>
  );
}

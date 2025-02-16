import { useState } from "react";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";

export default function App() {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      label: "New Tab",
      fn: () => {console.log("New Tab")},
      keys: "ctrl+k",
    },
    {
      id: 2,
      label: "New Window",
      fn: () => {},
      keys: "ctrl+n",
    },
    {
      id: 3,
      label: "Open Close Tab",
      fn: () => {},
      keys: "ctrl+d",
    },
  ]);

  return (
    <div className="App">
      <Menu>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </Menu>
    </div>
  );
}

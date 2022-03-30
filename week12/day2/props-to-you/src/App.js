import "./App.css";
import House from "./compnents/House";
import Grid from "./compnents/Grid";

function App() {
  const pictures = [
    {
      url: "https://images.unsplash.com/photo-1648563678346-d72fd33aa451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1648302670175-390ca4faba7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1004&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1648561117825-92ce2750b4c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1648468092356-5587d9acc33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1648395384644-68e5f309df58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1648492678464-ad5fba913b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1648559695645-9b34e65dfb4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1648459915266-d4793e6b5a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1648560127625-1444f6996139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];
  const rooms = [
    { name: "Living Room" },
    { name: "Primary Bedroom" },
    { name: "Kitchen" },
  ];
  return (
    <div className="App">
      <h1>Props Passing</h1>
      <House rooms={rooms} />
      <Grid pictures={pictures} />
      <h1>React Router</h1>
    </div>
  );
}

export default App;

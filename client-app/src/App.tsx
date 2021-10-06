import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((resp) => {
      console.log(resp);
      setActivities(resp.data);
    });
  }, []);

  return (
    <div>
      <Header as="h2" icon="users" content="React" />
      <List>
        <List.Item>
          {activities.map((activity: any) => (
            <li key={activity.id}>{activity.title}</li>
          ))}
        </List.Item>
      </List>
      <ul></ul>
    </div>
  );
}

export default App;

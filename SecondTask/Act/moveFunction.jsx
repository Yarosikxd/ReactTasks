import { useEffect, useState } from "react";
import { animals } from "../src/components/entities";
import "../Style/List.css"

function List() {
    const [list, setList] = useState(animals);
  
    useEffect(() => {
      let intervalId;
      let activatedItems = 0;
  
      const activateRandomItem = () => {
        if (activatedItems >= list.length) {
          clearInterval(intervalId);
          return;
        }
  
        const randomIndex = Math.floor(Math.random() * list.length);

        if (!list[randomIndex].active) {
          const newList = [...list];
          newList[randomIndex].active = true;
          setList(newList);
          activatedItems++;
        }
      };
  
      intervalId = setInterval(activateRandomItem, 1000);
  
      return () => clearInterval(intervalId);
    }, [list]);
  
    return (
      <table>
          <thead>
              <tr>
                  <th>Type</th>
                  <th>Icon</th>
              </tr>
          </thead>
          <tbody>
              {list.map((item, index) => (
                  <tr key={index} className={item.active ? "active" : ""}>
                      <td>{item.type}</td>
                      <td>{item.icon}</td>
                  </tr>
              ))}
          </tbody>
      </table>
  );
}

export default List;
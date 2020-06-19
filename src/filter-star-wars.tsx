import React from "react";
import { useDebounce } from "use-debounce";

const useDebouncedFilter = (defaultValue) => {
  const [filter, setFilter] = React.useState(defaultValue);
  const [debouncedFilter] = useDebounce(filter, 500);

  return { filter, setFilter, debouncedFilter };
};

const useUserCollection = () => {
  const [userCollection, setUserCollection] = React.useState([]);

  const loadUsers = (filter) => {
    fetch(`https://swapi.dev/api/people?search=${filter}`)
      .then((response) => response.json())
      .then((json) => setUserCollection(json.results));
  };

  return { loadUsers, userCollection };
};

export const OnlyOneTime = () => {
  const { userCollection, loadUsers } = useUserCollection();

  React.useEffect(() => {
    loadUsers("");
  }, []);

  return (
    <div>
      <h1> El de solo una vez</h1>
      <ul>
        {userCollection.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const MyComponent = () => {
  const { debouncedFilter, setFilter, filter } = useDebouncedFilter("");
  const { userCollection, loadUsers } = useUserCollection();

  React.useEffect(() => {
    loadUsers(debouncedFilter);
  }, [debouncedFilter]);

  return (
    <div>
      <input
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <ul>
        {userCollection.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

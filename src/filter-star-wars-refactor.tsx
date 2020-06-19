import React from "react";
import { useDebounce } from "use-debounce";

const useUserCollection = () => {
  const [filter, setFilter] = React.useState("");
  const [debouncedFilter] = useDebounce(filter, 500);
  const [userCollection, setUserCollection] = React.useState([]);
  const loadUsers = (filter) => {
    fetch(`https://swapi.dev/api/people?search=${filter}`)
      .then((response) => response.json())
      .then((json) => setUserCollection(json.results));
  };

  return { filter, setFilter, userCollection, debouncedFilter, loadUsers };
};

export const MyComponent = () => {
  const {
    setFilter,
    filter,
    userCollection,
    debouncedFilter,
    loadUsers,
  } = useUserCollection();

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

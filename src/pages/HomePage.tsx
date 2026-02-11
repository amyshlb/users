import { useEffect, useState } from 'react';
import '../App.css';
import Loader from '../components/Loader';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import SearchResultsList from '../components/SearchResultsList';
import Pagination from '../components/Pagination';
import { useNavigate } from 'react-router-dom';

function App() {
  const [results, setResults] = useState<User[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 5
  const lastPage = Math.ceil(users.length / usersPerPage)
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)

  interface User {
    id: number;
    name: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    }
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    }
  }

  useEffect(() => {
    console.log(users)
  }, [users])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok")
        }
        return res.json()
      })
      .then(res => {
        setUsers(res.slice(0, 10))
      })
      .catch(() => setError("Failed to fetch users"))
  }, [])

  const startIndex = (currentPage - 1) * usersPerPage
  const endIndex = startIndex + usersPerPage
  const paginatedUsers = users.slice(startIndex, endIndex)
  const usersToShow = results.length > 0 ? results : paginatedUsers

  return (

    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
      {usersToShow.length > 0 ? usersToShow.map((user: User) => (
        <section className="user-card-container" key={user.id}>

          <Card
            id={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
            company={user.company}
            badge={{ text: "User", filled: true }}
            btn={{
              text: "View Profile",
              type: "secondary",
              filled: true,
              onclick: () => navigate(`/users/${user.id}`)
            }} />
        </section>

      )) : <Loader />}

      <Pagination currentPage={currentPage} lastPage={lastPage} setCurrentPage={setCurrentPage} />
    </div>


  );
}

export default App;
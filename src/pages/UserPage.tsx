import React, { use, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './UserPage.css'
import { UserPageInterface } from '../types'
import { ReactComponent as SearchIcon } from "../assets/search.svg";
export default function UserPage() {


const { userId } = useParams<{ userId: string }>()
const [postQuery, setPostQuery] = React.useState("")
const [user, setUser] = React.useState<UserPageInterface | null>(null)
const [posts, setPosts] = React.useState<any[]>([])
const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(postQuery.toLowerCase()))

React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())   
        .then(user => {
            setUser(user)
            console.log(user)})
}, [userId])
React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
            console.log(posts)
        })
}, [userId])

    if (!user) {
        return <div>Loading...</div>
    }

  return (
    <div className="user-page-container">
        <h1>{user.name}</h1>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        <p>Phone number: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>Company: {user.company.name} - {user.company.catchPhrase} - {user.company.bs}</p>
        <div className="input-wrapper">
           <SearchIcon className='search-icon' />
        <input 
            type="text" 
            placeholder="Search posts by title..."
            value={postQuery}
            onChange={(e) => setPostQuery(e.target.value)}
        /> 
        </div>
        <h2>Posts</h2>
        <ul>
            {filteredPosts.map(post => (    
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
      
    </div>
  )
}

import React, { useState, useEffect } from 'react';

const ReposGrid = ({ id }) => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  // Here we use the `useEffect()` hook to sync `repos` with our `fetchRepos` API request
  useEffect(() => {
    setLoading(true)
    fetchRepos(id)
      .then((repos) => {
        setRepos(repos)
        setLoading(false)

      })
  }, [id])

  // Any time `id` changes the effect is going to re-run, setting loading to 'true',
  // fetching the repos at that id, then setting loading to 'false'

  return loading === true ? (
    <Loading />
  ) : (
    <ul>
      {repos.map(({name, handle, stars, url}) => (
        <li key={name}>
          <ul>
            <li><a href={url}></a></li>
            <li>@{handle}</li>
            <li>{stars} stars</li>
          </ul>
        </li>
      ))}
    </ul>
  )
}
export default ReposGrid
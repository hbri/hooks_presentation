import React, { useState, useEffect } from 'react';

const useRepos = (id) => {
  const [ repos, setRepos ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {

    setLoading(true)

    fetchRepos(id)
      .then((repos) => {
        setRepos(repos)
        setLoading(false)
      })
  }, [id])

  return [ loading, repos ]
}

export default useRepos;

/*
  This custom hook takes in the id of the repo we want to fetch and returns an array with the first element being the `loading` state and the second being the `repo` state.

  Now, regardless of which component we're in, whenever we need data regarding repos we can simply use our custom `useRepos` hook.

  Additionally, any logic related to fetching our repos can be abstracted inside of this custom hook.
*/

/*
  Examples of how to use `useRepos` custom hook:
*/

const ReposGrid = ({ id }) => {
  const [ loading, repos ] = useRepos(id)
  ...
}

const Profile = ({ user }) => {
  const [ loading, repos ] = useRepos(user.id)
  ...
}

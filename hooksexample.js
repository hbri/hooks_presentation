import React from 'react';

class ReposGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: null,
      loading: false,
    };
    this.updateReposs = this.updateRepos.bind(this)
  }

  componentDidMount() {
    this.updateRepos(this.props.id)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.updateRepos(this.props.id)
    }
  }

  updateRepos = (id) => {
    this.setState({
      loading: true
    })
    fetchRepos(id)
      .then((repos) => this.setState({
        repos,
        loading: false
      }))
  }

  render() {
    return (
      <ul>
        {this.state.repos.map(({name, handle, stars, url}) => (
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
}

export default ReposGrid;
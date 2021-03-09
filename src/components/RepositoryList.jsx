import { RepositoryItem } from './RepositoryItem'

const repository = {
  name: 'Repo name',
  description: 'Repo description',
  url: 'Go to repo',
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}
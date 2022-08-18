import './SearchBar.css'

type SearchBarProps = {
  search: string
  inLocation: boolean
  onInputChange: (event: any) => void
}

function SearchBar({ search, inLocation, onInputChange }: SearchBarProps) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <fieldset>
        <legend>Search</legend>
        <input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={onInputChange}
        />

        <label htmlFor="location">
          <input
            type="checkbox"
            name="location"
            id="location"
            checked={inLocation}
            onChange={onInputChange}
          />
          Only show tweets in current location
        </label>
      </fieldset>
    </form>
  )
}

export default SearchBar

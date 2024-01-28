export default function FilterBar({ searchQuery, onSearchQueryChange, onOrderByChange, onPlatformChange }) {
    return (
        <div className="filterbar">
            <div className="filterbarinner">
                <h1>Games</h1>
                <lable>Order By</lable>
                <select name="orderby" id="orderby" className="orderby" onChange={(e)=>onOrderByChange(e.target.value)}>
                    <option value="default">Default</option>
                    <option value="name">Name</option>
                    <option value="cost">Cost</option>
                </select>
                <label>Platforms</label>
                <select name="platforms" id="platforms" className="platforms" onChange={(e)=>onPlatformChange(e.target.value)}>
                    <option value="all">All</option>
                    <option value="pc">PC</option>
                    <option value="playstation">PlayStation</option>
                    <option value="xbox">Xbox</option>
                </select>
            </div>
            <div className='searchcontainer'>
                  <img src="images/search.svg" className="searchicon" />
                    <input
                        id='searchbar'
                        type='text'
                        placeholder='Search Games'
                        value={searchQuery}
                        onChange={(e) => {onSearchQueryChange(e.target.value)}}
                    />
            </div>
        </div>
    );
}
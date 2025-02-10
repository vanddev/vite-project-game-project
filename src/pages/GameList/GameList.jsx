import GameWideCard from "../../components/GameWideCard/GameWideCard"

const GameList = () => {
  return (
    <div>
        <h2>Playstation 5 Games</h2>
        <nav className="pagination is-small" role="navigation" aria-label="pagination">
            <ul className="pagination-list">
                <li><a href="#" className="pagination-previous">Previous</a></li>
                <li><a href="#" className="pagination-link" aria-label="Goto page 1">1</a></li>
                <li><a href="#" className="pagination-link" aria-label="Goto page 2">2</a></li>
                <li><a href="#" className="pagination-link" aria-label="Goto page 3">3</a></li>
                <li><span className="pagination-ellipsis">&hellip;</span></li>
                <li><a href="#" className="pagination-link" aria-label="Goto page 45">45</a></li>
                <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
                <li><a href="#" className="pagination-link" aria-label="Goto page 47">47</a></li>
                <li><span className="pagination-ellipsis">&hellip;</span></li>
                <li><a href="#" className="pagination-link" aria-label="Goto page 84">84</a></li>
                <li><a href="#" className="pagination-link" aria-label="Goto page 85">85</a></li>
                <li><a href="#" className="pagination-link" aria-label="Goto page 86">86</a></li>
                <li><a href="#" className="pagination-next">Next page</a></li>
            </ul>
        </nav>
  
        <ol>
            <GameWideCard></GameWideCard>
            <GameWideCard></GameWideCard>
            <GameWideCard></GameWideCard>
            <GameWideCard></GameWideCard>
            <GameWideCard></GameWideCard>
            <GameWideCard></GameWideCard>
            <GameWideCard></GameWideCard>
            <GameWideCard></GameWideCard>
            <GameWideCard></GameWideCard>
            <GameWideCard></GameWideCard>
        </ol>
    </div>
  )
}

export default GameList
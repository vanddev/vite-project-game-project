import React from 'react'

const GameWideCard = () => {
  return (
    <div className='wrapper flex-content'>
        <div>
            <figure className="image is-3by4" style={{ height: '120px'}}>
                <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co7497.webp" />
            </figure>
        </div>

        <div style={{padding: "0 20px", display: "flex", flexDirection: "column", width: "100%"}}>
            <h3 style={{color: "#EBECF0", marginBottom: "10px"}}>Game name</h3>
            <div style={{fontSize: "12px"}}>Rating: 9.5</div>
            <div style={{fontSize: "12px"}}>Adventure, Metroidvania, Underwater</div>
            <div style={{marginTop: "auto"}}><span className="tag is-dark">PSP</span>  <span className="tag is-dark">PS1</span> <span className="tag is-dark">PS2</span></div>
        </div>
    </div>
  )
}

export default GameWideCard
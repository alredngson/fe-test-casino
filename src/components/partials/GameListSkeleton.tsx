import React, { type ReactElement } from 'react'

const GameListSkeleton = (): ReactElement => (
  <div className="container-fluid">
    <div className="row row-cols-4">
      {[...Array(12)].map((index) => (
        <div key={index} className="col p-1">
          <div className="placeholder-glow">
            <div
              className="placeholder col-12 rounded"
              style={{ height: '75px' }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default GameListSkeleton

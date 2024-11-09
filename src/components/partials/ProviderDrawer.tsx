import React, { type FC } from 'react'
import { type Provider } from '../../utils/hooks/useFetchProviders'

interface ProviderDrawerProps {
  providerData?: Provider[]
  onProviderClick: (providerName: string) => void
}

const ProviderDrawer: FC<ProviderDrawerProps> = ({
  providerData,
  onProviderClick
}: ProviderDrawerProps) => {
  return (
    <>
      <div
        className="offcanvas offcanvas-bottom"
        tabIndex={-1}
        id="providerDrawer"
        aria-labelledby="providerDrawerLabel"
        style={{ height: '75vh' }}
      >
        <div
          className="offcanvas-header"
          style={{ backgroundColor: '#00A6FF', color: 'white' }}
        >
          <h5 className="offcanvas-title" id="providerDrawerLabel">
            Game Providers
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="row row-cols-2 g-2">
            {providerData?.map((provider) => (
              <div
                key={provider.id}
                className="col"
                onClick={() => { onProviderClick(provider.name) }}
                data-bs-dismiss="offcanvas"
                role="button"
              >
                <div className="card p-2 shadow-sm h-100 rounded-3 border d-flex justify-content-center align-items-center">
                  <img
                    src={provider.img}
                    alt={`${provider.name} logo`}
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProviderDrawer

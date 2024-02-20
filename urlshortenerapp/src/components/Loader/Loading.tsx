import React from 'react'
import SyncLoader from "react-spinners/SyncLoader";

export default function Loading() {
  return (
    <div className="flex justify-center bg-white h-screen">
          <div className="fixed inset-0 bg-white bg-opacity-50 z-50 flex justify-center items-center overflow-hidden">
              <SyncLoader color="#36d7b7"
                size={50}
                loading={true}
              />
        </div>
    </div>
  )
}
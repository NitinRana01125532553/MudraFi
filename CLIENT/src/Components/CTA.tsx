import React from 'react'

const CTA = () => {
    const backgroundImageUrl =
    "https://images.unsplash.com/photo-1615992174118-9b8e9be025e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  return (
    <div>
         <div className="bg-cover bg-center flex  justify-center items-center mb-0 mt-20 ">
        <div
          className=" p-24 pl-4 lg:pl-20 rounded-t-3xl" style={{
            backgroundImage: `url('${backgroundImageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            width: "100%",
          }}
        >
          <p className="text-6xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Trade Now</p>
          <p className="lg:text-2xl md:text-xl sm:text-lg mb-5 mt-0 text-white">Sync your crypto wallet to start</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  )
}

export default CTA
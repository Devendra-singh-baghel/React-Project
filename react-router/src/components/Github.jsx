import React, { useEffect, useState } from 'react'
import Loader from './Loader';

function Github() {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Devendra-singh-baghel')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUserDetails(data);
      })
      .catch(error => console.log("GitHub Error: ", error))
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-150 p-10 flex flex-col items-center justify-center">
      <h2 className='font-bold text-3xl m-4'>GitHub Pfofile</h2>
      <div className='bg-gray-300 p-4 rounded-lg w-85 flex flex-col items-center justify-center'>
        <img src={userDetails.avatar_url} alt="" width={250}
          className='rounded-full shadow-xl m-4'
        />

        <table className="table-fixed text-left w-full mt-4 rounded-lg overflow-hidden">
          <tbody>
            <tr>
              <th className="px-4 py-3 w-1/3 text-gray-700 font-medium">Name:</th>
              <td className="px-4 py-3">{userDetails.name}</td>
            </tr>
            <tr>
              <th className="px-4 py-3 w-1/3 text-gray-700 font-medium">Username:</th>
              <td className="px-4 py-3 ">{userDetails.login}</td>
            </tr>
            <tr>
              <th className="px-4 py-3 w-1/3 text-gray-700 font-medium">Repos:</th>
              <td className="px-4 py-3">{userDetails.public_repos}</td>
            </tr>
          </tbody>
        </table>

        <button className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 mt-5 focus:outline-none cursor-pointer">
          <a href="https://github.com/Devendra-singh-baghel" target='_blank'>Follow me</a>
        </button>
      </div>
    </div>
  ) : <Loader />
}

export default Github

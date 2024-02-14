import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState([])
  const [imagedata, setImagedata] = useState([])
  const [ip, setIp] = useState([])
  useEffect(() => {
    fetch('https://api.genderize.io/?name=umesh').then(response => response.json()).then(data => {
      console.log(data);
      setData(data)
    })
  }, [])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(imagedata => {
      console.log(imagedata);
      setImagedata(imagedata)
    })
  }, [])

  useEffect(() => {
    fetch('https://api.ipify.org/?format=json').then(response => response.json()).then(data => {
      console.log(data);
      setIp(data)
    })
  }, [])
  return (<>

    <div className='text-center bg-auto text-red-600'>
      <h1>You are browsing from this iP : {ip["ip"]}</h1>
    </div>
    <div className='text-center m-4 bg-gray-600 text-white mx-3'>GitHub Followers: {data.count}
      <img src={imagedata.message} alt="Git Picture" width={300} />
    </div>
  </>
  )
}

export default Github

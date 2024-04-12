import React, { useState } from 'react'

const FooterComp = () => {
    let [menu, setMenu] = useState(["Meta",
"About",
"Blog",
"Jobs",
"Help",
"API",
"Privacy",
"Terms",
"Locations",
"Instagram Lite",
"Threads",
"Contact uploading and non-users",
"Meta Verified"])
  return (
    <div className='footer'>
    <menu>
      {menu.map((item, index)=> ( <a href="https://www.w3schools.com"> <li>{item}</li></a> ))}
    </menu>
</div>  )
}

export default FooterComp
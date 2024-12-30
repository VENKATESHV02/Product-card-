let main=document.querySelector('body')
async function page() {

    let response= await fetch('https://api.github.com/users')    
    let finalresponse= await response.json()
    console.log(finalresponse)
    finalresponse.map(value =>
    {
    let section =document.createElement("section") 
    let img =document.createElement('img')
    let userId=document.createElement('h3')
    let username=document.createElement('h3')
    let More=document.createElement('button')
    img.src=value.avatar_url
    userId.innerHTML="Id : "+value.id
    username.innerHTML="Name : "+value.login
    More.innerHTML="More details"
    section.append(img,userId,username,More)
    main.append(section)
    }
    )
    
}
page()
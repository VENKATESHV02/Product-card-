let main=document.querySelector("body")
async function page() {
    let response= await fetch('https://fakestoreapi.com/products')    
    let finalresponse= await response.json()
    console.log(finalresponse)
    finalresponse.map(value =>
    {
        let section =document.createElement("section")
        let img =document.createElement("img")
        let proname=document.createElement("h3")
        let cat=document.createElement("h4")
        let price=document.createElement("h4")
        let rating=document.createElement("h4")
        // let prodes=document.createElement("h4")
        let aside=document.createElement("aside")
        let article=document.createElement("article")
        let button=document.createElement("button")
        img.src=value.image
        proname.innerHTML=value.title
        cat.innerHTML=value.category
        price.innerHTML=value.price
        rating.innerHTML="Rating :"+value.rating.rate
        // prodes.innerHTML=value.description
        button.innerHTML="add to cart"
        aside.append(price,rating)
        article.append(aside,button)
        section.append(img,proname,cat,article)
        main.append(section)
    }
    )

}
page()
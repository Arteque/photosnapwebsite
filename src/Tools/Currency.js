const Currency = (item) => {
    const itemNumb = Number(item)
    const price = new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(itemNumb) 
    return price
}

export default Currency
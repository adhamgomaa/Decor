product.forEach( (item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});
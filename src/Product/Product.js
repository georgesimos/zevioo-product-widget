import React from 'react'

const product = (props) => {

    String.prototype.trimString = function(max, add){
        add = add || '...';
        return (this.length > max ? this.substring(0,max)+add : this);
     };

     function rounding(x) {
        return Number.parseFloat(x).toFixed(1);
      }

      
    let title = props.name.trimString(40,'...') ;
    let rating = rounding(props.rating);
    let stars = '';

    if(props.rating < 1 ) {
        stars = (
            <div className="zevioo-rating__stats"></div>
        )
    }else if(props.rating >= 1 && props.rating < 2){
        stars = (
            <div className="zevioo-rating__stats">
            <span className="zevioo-rating__text"><span itemProp="ratingValue" className="zevioo-rating__text-bold">{rating} </span>  <span itemProp="reviewCount" className="zevioo-rating__count"> ({props.rc})</span></span>
            <div className="zevioo-star-ratings">
            <div className="zevioo-star-ratings_top" style={{width: '20%', color: 'var(--zevioo)'}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            <div className="zevioo-star-ratings_bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            </div>
            </div>
            
        )
    }else if(props.rating >= 2 && props.rating < 3){
        stars = (
            <div className="zevioo-rating__stats">
            <span className="zevioo-rating__text"><span itemProp="ratingValue" className="zevioo-rating__text-bold">{rating} </span>  <span itemProp="reviewCount" className="zevioo-rating__count"> ({props.rc})</span></span>
            <div className="zevioo-star-ratings">
            <div className="zevioo-star-ratings_top" style={{width: '40%', color: 'rgb(242, 98, 54)' }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            <div className="zevioo-star-ratings_bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            </div>
            </div>
        )
    }else if(props.rating >= 3 && props.rating < 4){
        stars = (
            <div className="zevioo-rating__stats">
            <span className="zevioo-rating__text"><span itemProp="ratingValue" className="zevioo-rating__text-bold">{rating} </span>  <span itemProp="reviewCount" className="zevioo-rating__count"> ({props.rc})</span></span>
            <div className="zevioo-star-ratings">
            <div className="zevioo-star-ratings_top" style={{width: '60%', color: 'rgb(250, 163, 50)'}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            <div className="zevioo-star-ratings_bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            </div>
            </div>
        )
    }else if(props.rating >= 4 && props.rating < 5){
        stars = (
            <div className="zevioo-rating__stats">
            <span className="zevioo-rating__text"><span itemProp="ratingValue" className="zevioo-rating__text-bold">{rating} </span>  <span itemProp="reviewCount" className="zevioo-rating__count"> ({props.rc})</span></span>
            <div className="zevioo-star-ratings">
            <div className="zevioo-star-ratings_top" style={{width: '80%', color: 'rgb(175, 211, 68)'}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            <div className="zevioo-star-ratings_bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            </div>
            </div>
        )
    }else {
        stars = (
            <div className="zevioo-rating__stats">
            <span className="zevioo-rating__text"><span itemProp="ratingValue" className="zevioo-rating__text-bold">{rating} </span>  <span itemProp="reviewCount" className="zevioo-rating__count"> ({props.rc})</span></span>
            <div className="zevioo-star-ratings">
            <div className="zevioo-star-ratings_top" style={{width: '100%', color: 'rgb(82, 185, 82)'} }><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            <div className="zevioo-star-ratings_bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            </div>
            </div>
        )
    }



   
    return (
        <div itemScope itemType="http://schema.org/Product" className="zevioo-product">
            <a className="zevioo-product__link" href={props.link + '/?utm_source=zevioo&utm_campaign=zevioo_conversion_widget'}>
                <div itemProp="image" className="zevioo-product__img" style={{backgroundImage: `url(${props.img})`}}>
                   
                </div>
                <div className="zevioo-product__stats">
                    <span itemProp="name" 
                          className="zevioo-product__title">{title}
                    </span>
                    <span itemProp="aggregateRating"
                          itemScope 
                          itemType="http://schema.org/AggregateRating" 
                          className="zevioo-product__rating">
                          {stars} 
                    </span>
                    <span className="zevioo-product__price"> <span itemProp="priceCurrency"> &#8364; </span>  <span  itemProp="price">{props.price}</span> </span>
                </div>
            </a>
        </div>
    )
}

export default product;
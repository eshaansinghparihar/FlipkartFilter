import React , { useEffect, useState } from "react";
import './FilterComponent.css';
import './Products.css';
import productsData from './products.json';

function Filter({handleProductChange , handleUpdate , update}){
    const [products,setProducts]=useState(productsData);
    // let products=productsData;
    const [isSmallChecked,setSmallChecked]=useState(false)
    const [isMedChecked,setMedChecked]=useState(false)
    const [isLargeChecked,setLargeChecked]=useState(false)
    const [isXLChecked,setXLChecked]=useState(false)

    const [isBreilByFortCollinsChecked,setBreilByFortCollinsChecked]=useState(false)
    const [isRoadsterChecked,setRoadsterChecked]=useState(false)
    const [isVanHeusenSportChecked,setVanHeusenSportChecked]=useState(false)
    const [isSevenRocksChecked,setSevenRocksChecked]=useState(false)

    // const [brandSearchResult,setBrandSearchResult]=useState([])
    // var brandSearchResult=[]
    function handleClearFilter(){
        // setProducts(productsData)
        setSmallChecked(false)
        setMedChecked(false)
        setLargeChecked(false)
        setXLChecked(false)
        handleProductChange(productsData)
        setBreilByFortCollinsChecked(false)
        setRoadsterChecked(false)
        setVanHeusenSportChecked(false)
        setSevenRocksChecked(false)
        // setBrandSearchResult([])
        // brandSearchResult=[]
    }
    var sortedResult=[]
    // sortedResult=products.filter(product=>(product.price.sort()));
    // console.log(sortedResult)

    function handleSmallChange(){
        var searchResult=[];
        if(isSmallChecked)
        {
            setSmallChecked(false)
        }
        

        else
        {
            setSmallChecked(true)
            searchResult=products.filter(product=>(product.sizes.includes("S")));
            handleProductChange(searchResult)
        }
        
    }
    function handleMedChange(){
        var searchResult=[];
        if(isMedChecked)
        {
            setMedChecked(false)

        }
        

        else
        {
            setMedChecked(true)
            searchResult=products.filter(product=>(product.sizes.includes("M")));
            handleProductChange(searchResult)
        }
        
    }
    function handleLargeChange(){
        var searchResult=[];
        if(isLargeChecked)
        {
            setLargeChecked(false)

        }
        

        else
        {
            setLargeChecked(true)
            searchResult=products.filter(product=>(product.sizes.includes("L")));
            handleProductChange(searchResult)
        }
        
    }
    function handleXLChange(){
        var searchResult=[];
        if(isXLChecked)
        {
            setXLChecked(false)

        }
        

        else
        {
            setXLChecked(true)
            searchResult=products.filter(product=>(product.sizes.includes("XL")));
            handleProductChange(searchResult)
        }
        
    }

     function handleBBFCChange(){
        var searchResult=[];
        if(isBreilByFortCollinsChecked)
        {
            setBreilByFortCollinsChecked(false)

        }
        

        else
        {
            setBreilByFortCollinsChecked(true)
            searchResult=products.filter(product=>(product.brand.includes("Breil By Fort Collins")));
            // if(brandSearchResult.length)
            // handleProductChange(brandSearchResult)
            // searchResult.map(elem=>{
            //     brandSearchResult.push(elem)
            // })
            handleProductChange(searchResult)
        }
        
    }
     function handleVHChange(){
        var searchResult=[];
        if(isVanHeusenSportChecked)
        {
            setVanHeusenSportChecked(false)

        }
        

        else
        {
            setVanHeusenSportChecked(true)
            searchResult=products.filter(product=>(product.brand.includes("VAN HEUSEN SPORT")));
            // searchResult.map(elem=>{
            //     brandSearchResult.push(elem)
            // })
            handleProductChange(searchResult)
        }
        
    }
     function handleRoadsterChange(){
        var searchResult=[];
        if(isRoadsterChecked)
        {
            setRoadsterChecked(false)

        }
        

        else
        {
            setRoadsterChecked(true)
            searchResult=products.filter(product=>(product.brand.includes("Roadster")));
            // searchResult.map(elem=>{
            //     brandSearchResult.push(elem)
            // })
            handleProductChange(searchResult)
        }
        
    }
    function handleSRChange(){
        var searchResult=[];
        if(isSevenRocksChecked)
        {
            setSevenRocksChecked(false)

        }

        else
        {
            setSevenRocksChecked(true)
            searchResult=products.filter(product=>(product.brand.includes("Seven Rocks")));
            // searchResult.map(elem=>{
            //     brandSearchResult.push(elem)
            // })
            handleProductChange(searchResult)
        }
        
    }
    function handleAscSort(){
        var sortedResult=products.sort((a, b) => a.price - b.price);
        // handleProductChange(searchResult)
        handleProductChange(sortedResult)
        handleUpdate(update+1)
    }
    function handleDescSort(){
        var sortedResult=products.sort((a, b) => a.price - b.price).reverse();
        handleProductChange(sortedResult)
        handleUpdate(update+1)
    }
return(
    <div className="filters">
        <h4>Sort By Price</h4>
        <div>
            <button onClick={handleAscSort}>Low to High</button>
        </div>
        <div>
            <button onClick={handleDescSort}>High to Low</button>
        </div>
        <div>
            <h4>Brands</h4>
            <div>
            <input
            type="checkbox"
            checked={isBreilByFortCollinsChecked}
            onChange={handleBBFCChange}
            />
            Breil By Fort Collins
            </div>
            <div>
            <input
            type="checkbox"
            checked={isVanHeusenSportChecked}
            onChange={handleVHChange}
            />
            VAN HEUSEN SPORT
            </div>
            <div>
            <input
            type="checkbox"
            value="L"
            checked={isRoadsterChecked}
            onChange={handleRoadsterChange}
            />
            Roadster
            </div>
            <div>
            <input
            type="checkbox"
            value="XL"
            checked={isSevenRocksChecked}
            onChange={handleSRChange}
            />
            Seven Rocks
            </div>
        </div>
        <div>
            <h4>Size</h4>
            <div>
            <input
            type="checkbox"
            value="S"
            checked={isSmallChecked}
            onChange={handleSmallChange}
            />
            S
            </div>
            <div>
            <input
            type="checkbox"
            value="M"
            checked={isMedChecked}
            onChange={handleMedChange}
            />
            M
            </div>
            <div>
            <input
            type="checkbox"
            value="L"
            checked={isLargeChecked}
            onChange={handleLargeChange}
            />
            L
            </div>
            <div>
            <input
            type="checkbox"
            value="XL"
            checked={isXLChecked}
            onChange={handleXLChange}
            />
            XL
            </div>
        </div>
        <div>
            <button onClick={handleClearFilter}>Clear Filters</button>
        </div>
    </div>
)
}
export default Filter;
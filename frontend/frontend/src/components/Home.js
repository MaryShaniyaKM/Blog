import { Button } from '@mui/material'
import React from 'react'

function Home() {

    return (
        <>
            <h4 style={{ marginLeft: "400px", marginTop: "40px" }}>SIMPLE RECIPES MADE FOR
                <i style={{ color: "brown" }}> real, actual, everyday life</i></h4>
            <div style={{ marginLeft: "80px", marginTop: "30px" }}>
                <a href="https://www.bbcgoodfood.com/recipes/collection/pasta-recipes" style={{ textDecoration: 'none' }}><Button style={{ marginLeft: "40px", backgroundColor: "#FF9A8B", color: "white" }}>PASTA</Button></a>
                <a href="https://www.acouplecooks.com/best-salad-recipes/" style={{ textDecoration: 'none' }}><Button style={{ marginLeft: "200px", backgroundColor: "#FF9A8B", color: "white" }}>SALADS</Button></a>
                <a href="https://www.thepioneerwoman.com/food-cooking/meals-menus/g32934608/sheet-pan-dinner-recipes/" style={{ textDecoration: 'none' }}><Button style={{ marginLeft: "170px", backgroundColor: "#FF9A8B", color: "white" }}>SHEET PAN</Button></a>
                <a href="https://www.bbcgoodfood.com/recipes/collection/dessert-recipes" style={{ textDecoration: 'none' }}><Button style={{ marginLeft: "160px", backgroundColor: "#FF9A8B", color: "white" }} >DESSERTS</Button></a>
            </div>
            <div style={{ marginTop: "-20px", marginLeft: "20px" }}>
                <img src="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Baked-Mac-and-Cheese-5.jpeg" style={{ width: "260px", height: "350px" }} />
                <img src="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Squash-Salad-Square.jpg" style={{ width: "260px", height: "350px" }} />
                <img src="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Thanksgiving-Sheet-Pan-Sides-5.jpg" style={{ width: "260px", height: "350px" }} />
                <img src="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Apple-Cake-Slice-2.jpg" style={{ width: "260px", height: "350px" }} />
            </div>
        </>
    )
}

export default Home
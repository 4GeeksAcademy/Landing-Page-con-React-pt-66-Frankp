import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const cardData = [
    { title: "Card Title 1", description: "Lorem ipsum dolor sit amet...", imageUrl: "https://placehold.co/500x325" },
    { title: "Card Title 2", description: "Sed do eiusmod tempor incididunt...", imageUrl: "https://placehold.co/500x325" },
    { title: "Card Title 3", description: "Ut enim ad minim veniam...", imageUrl: "https://placehold.co/500x325" },
    { title: "Card Title 4", description: "Duis aute irure dolor in reprehenderit...", imageUrl: "https://placehold.co/500x325" }
];

const Home = () => {
    return (
       
        <div className="d-flex flex-column min-vh-100">
            
            <Navbar />

            <div className="container mt-5 pt-4 flex-grow-1">
                <Jumbotron />
                
                <div className="row text-center">
                    {cardData.map((item, index) => (
                        
                        <div className="col-12 col-sm-6 col-lg-3 mb-4" key={index}>
                            <Card 
                                title={item.title} 
                                description={item.description} 
                                imageUrl={item.imageUrl} 
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
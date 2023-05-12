import React from "react";
import mountainImage from './anaimg13.jpg';
import { Anchor } from "@mantine/core";


function HomePage() {
    return (
        <div className="homepage">
            <nav className="navbar">
                <div className="navbar__logo">
                    EXPENSO
                </div>
                <div className="navbar__menu">
                    <a href="#about-us">About Us</a>
                    <a href="#contact-us">Contact Us</a>
                    <button color="green" > <Anchor href = "/Home" >Join us </Anchor> </button>
                </div>
            </nav>
            <h1 className="homepage__title">Welcome to EXPENSO Tracker App</h1>
            <p className="homepage__description">
                Our app helps you keep track of your expenses so you can better manage
                your budget and savings. With easy-to-use features and intuitive
                design, you'll always know where your money is going.
            </p>
            <h2 className="homepage__section-title" id="Features"> Features </h2>

            <div className="homepage__cards">
                <div className="card">
                    <h3>Simple Money Tracker</h3>
                    <p>It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.</p>
                </div>
                <div className="card">
                    <h3>Painless Budgeting</h3>
                    <p>Easily create a budget and track your spending to ensure you stay on track. Our app makes it painless to manage your finances.</p>
                </div>
                <div className="card">
                    <h3>The Whole Picture in One Place</h3>
                    <p>See a clear view of your spending patterns with easy-to-read graphs. Understand where your money comes and goes.</p>
                </div>
            </div>



            <h2 className="homepage__section-titles" id="content">Leading a Richer Life</h2>
            <p className="homepage__section-description">
                Our mission at Budgetbakers is to help you lead a Organised life.
                Building a picture of all your assets, monitoring your money and controlling your spending has one purpose,
                and one purpose only: to lead to a richer life.
            </p>



            <div className="homepage__cards">

                <div className="cardz">
                    <h3>Multiple devices</h3>
                    <p>Safely synchronize across devices with Bank standard security.</p>
                </div>

                <div className="cards">
                    <img src={mountainImage} />
                </div>

                <div className="cardz">
                    <h3>100% Secured data</h3>
                    <p>Data is accessed and copied only over strongly-encrypted connections.
                        We implement separate databases for each customer to add an additional layer of security</p>
                </div>

            </div>

            <h2 className="homepage__section-title" id="about-us">About Us</h2>
            <p className="homepage__section-description">
                We are a team of developers passionate about creating tools that help
                people achieve their financial goals. We believe that everyone should
                have access to technology that empowers them to make smart financial
                decisions.
            </p>



            <h2 className="homepage__section-title" id="contact-us">Contact Us</h2>
            <p className="homepage__section-description">
                If you have any questions or feedback, please don't hesitate to
                get in touch with us. You can reach us by email at
                <a href="Expenso:support@expensetrackerapp.com">
                    support@expensetrackerapp.com
                </a>
                or by phone at +1 (555) 123-4567.
            </p>
        </div>
    );
}

export default HomePage;
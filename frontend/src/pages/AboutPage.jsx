import React from "react";

const AboutPage = () => {
  return (
    <div style={{ textAlign: "center", margin: "1rem" }}>
      <div>
        <h2>Opinix</h2>
        <h4>Uncover The Pulse of Customer Sentiments</h4>
      </div>
      <div style={{margin: "1rem auto", width: "60%", textAlign: "justify"}}>
        The project Opinix: Uncover the Pulse of Customer Sentiments is an
        extensive effort aimed at tackling the growing problems related to
        e-commerce. Currently, this is the era of e-commerce, and most people
        prefer purchasing products online. There are thousands of reviews on
        each product and to go through each review and analyze the sentiment of
        every customer is a complicated task. <br /><br />Through the use of machine
        learning, web scraping, and sentiment analysis, the Opinix web
        application analyzes user evaluations and presents the opinions of a
        customer in a visually pleasing way. The goal of this project is to
        create a platform through which companies can easily analyze the
        sentiments of customers on their products and look out for room for
        improvement if there is any. Through the extraction of significant data from the
        huge world of consumer evaluations, Opinix hopes to transform
        decision-making processes across a range of application domains,
        including online shopping platforms, brand feedback, and customer
        service improvement.
      </div>
    </div>
  );
};

export default AboutPage;

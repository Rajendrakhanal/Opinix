import { Link } from "react-router-dom";
import "../../styles/pages/HomePage.css";
const HomePage = () => {
  return (
    <>
      <div className="banner">
        <div className="content">
          <h2>Understanding your audience better with sentiment analysis</h2>
          <p>
            Sentiment Analysis is a powerful tool that can help you understand
            how people feel about your products, services, or brand. It analyzes
            text data to determine the sentiment expressed in each piece of
            content.{" "}
          </p>
          <Link to="/analyze">
            <button className="banner-button">Analyze New Content</button>
          </Link>
        </div>
      </div>
      <div className="box-title">
        <h2>How to use Sentiment Analysis</h2>
        <p>Here are some common use cases for sentiment analysis:</p>
      </div>

      <div className="boxes-container">
        <div className="box">
          <p>&#128269;</p>
          <h3>Analyze new content</h3>
          <p>
            Use our sentiment analysis tool to analyze new content and get
            insights about how people feel about your products, services, or
            brand.
          </p>
        </div>

        <div className="box">
          <p>&#9998;</p>
          <h3>Write a report</h3>
          <p>
            Write a report and share it with your team or clients. Reports can
            include up to 10,000 characters of text and are typically used to
            summarize sentiment analysis results, provide recommendations, or
            explain the methodology used to analyze sentiment.
          </p>
        </div>

        <div className="box">
          <p>&#xF17E;</p>
          <h3>View analytics</h3>
          <p>
            View analytics for your reports, including sentiment score
            distributions, word clouds, and more.
          </p>
        </div>
      </div>

      <div className="gallery">
        <div className="gallery-item">
          <img src="https://via.placeholder.com/250" alt="Image 1" />
        </div>

        <div className="gallery-item">
          <img src="https://via.placeholder.com/250" alt="Image 2" />
        </div>

        <div className="gallery-item">
          <img src="https://via.placeholder.com/250" alt="Image 3" />
        </div>

        <div className="gallery-item">
          <img src="https://via.placeholder.com/250" alt="Image 4" />
        </div>
      </div>
    </>
  );
};

export default HomePage;

import { Link } from "react-router-dom";
import "../../styles/pages/HomePage.css";
const HomePage = () => {
  return (
    <>
      <div className="banner">
        <div className="content">
          <span>Understanding your audience better with sentiment analysis</span>
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
    </>
  );
};

export default HomePage;

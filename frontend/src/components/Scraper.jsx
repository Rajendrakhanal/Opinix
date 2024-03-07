import React, { useState } from "react";
import { useScrapeReviewMutation } from "../slices/analyzeApiSlice";
import {saveAs} from "file-saver"

const Scraper = () => {
  const [scrapeReview, { isLoading }] = useScrapeReviewMutation();
  const [productLink, setProductLink] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await scrapeReview({productLink}).unwrap()
      const reviewText = response.reviews;
      const reviewTime = response.dates;

      // generate csv content
      let csvContent = "reviewText,reviewTime\n";
      for (let i = 0; i < reviewText.length; i++) {
        csvContent += `"${reviewText[i]}","${reviewTime[i]}"\n`;
      }

      // convert csv content to blob
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });

      // save blob as a file
      saveAs(blob, "product_reviews.csv");

      console.log("CSV file generated successfully");

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter product link"
          value={productLink}
          onChange={(e) => setProductLink(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Scraper;

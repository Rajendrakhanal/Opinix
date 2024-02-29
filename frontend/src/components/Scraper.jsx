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
      const reviews = response.reviews;
      const ratings = response.ratings;

      // Generate CSV content
      let csvContent = "Review, Rating\n";
      for (let i = 0; i < reviews.length; i++) {
        csvContent += `"${reviews[i]}", "${ratings[i]}"\n`;
      }

      // Convert CSV content to Blob
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });

      // Save Blob as a file
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

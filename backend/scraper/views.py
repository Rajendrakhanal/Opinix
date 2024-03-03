from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from bs4 import BeautifulSoup
import requests

class MyScraperView(APIView):
    def post(self, request, *args, **kwargs):
        # Parse incoming product link
        product_link = request.data.get('productLink', '')

        # Check if product link is empty
        if not product_link:
            return Response({'message': 'No product link provided'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Perform web scraping
            response = requests.get(product_link)
            response.raise_for_status()  # Raise an exception for non-200 status codes
            soup = BeautifulSoup(response.content, 'html.parser')

            # Extract reviews and ratings (adjust according to the structure of the webpage)
            reviewText = []  # Store extracted reviews

            # Example extraction
            review_elements = soup.find_all(class_='review-text')
            rating_elements = soup.find_all(class_='review-rating')

            for review in review_elements:
                reviewText.append(review.get_text().strip())


            # Prepare JSON response
            response_data = {
                'message': 'Data scraped successfully',
                'productLink': product_link,
                'reviews': reviewText
            }

            # Return JSON response
            return Response(response_data, status=status.HTTP_200_OK)
        
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

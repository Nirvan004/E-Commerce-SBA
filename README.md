E-Commerce System

A TypeScript-based E-Commerce System that fetches product data from the DummyJSON Products API
 and demonstrates Object-Oriented Programming (OOP) principles, error handling, and utility functions for discounts and taxes.

Features

Fetch multiple products from the API

Fetch a single product by ID

Calculate discounts for each product

Calculate taxes based on category (standard 4.75%, groceries 3%)

Custom error handling for invalid product requests

Display product details in a readable format


Version History

1.0 – Initial release with product fetching, discount/tax calculations, and error handling.

License

This project is licensed under the Nirvanand Baichoo license AKA me.

Acknowledgments

Me im awesome

also the API I used DummyJSON Products API


Reflection 
For this project, I used typing provided through typescript to make a good product object that was easily manipulated by every other function I needed. Using OOP I also was able to easily implement functions like displayDetails() and getPriceWithDiscount(). Also being able to do the tax and discount calculator was easier with OOP. The API was nice for being able to reuse code because knowing exactly how everything is formatted in the api meant finding what I needed way easier. For example, If I wanted the product category I knew it would always be the 4th thing in the class. I didnt have to itterate through each product individually to find a string that could be a category. My biggest challenge was actually running my files. I had to go back through and figure out what wasnt working and some of my imports didnt include the .js or I forgot to properly add the new parts into the tsconfig.json file or that I didnt know that I couldnt be in the dist/ file if i wanted to run it I had to go out of the dist and into the e-commerce-system file just to run it. I think that its mostly due to experiecne but now I know. 

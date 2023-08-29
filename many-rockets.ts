/**
 * Many-Rockets is used in RocketBot
 * It takes no parameters but demonstrates the use of a carousel image reply
 * The URLs are stock Starship images from a Google Images search
*/
import Chatend from "chatend";

Chatend.done("Explain what the SpaceX Starship rocket looks like.", {
  images: [
    "https://static.independent.co.uk/2023/04/17/15/17145629-5dc61c4e-3b78-4134-b6d3-926bbb8d0f7b.jpg",
    "https://ichef.bbci.co.uk/news/640/cpsprodpb/1355D/production/_129379197_size_comparison_2x640-nc.png",
    "https://i.cbc.ca/1.6823201.1682531887!/fileImage/httpImage/spacex-starship.JPG",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_9Y7tmneukhrS0cmf6VmX3bUD5TFGnTTXw&usqp=CAU",
    "https://spaceflightnow.com/wp-content/uploads/2023/04/20230411starship1.jpg"
  ]
});
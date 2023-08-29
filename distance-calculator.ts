/**
 * Distance-Calculator is used in CalcBot
 * It takes two parameters:
  * speedMPH: The speed the user is traveling in miles per hour
  * timeHours: The amount of time the user has been traveling in hours
*/

// d = r * t
import Chatend from "chatend";

const { speedMPH, timeHours } = Chatend.input;
const distance = speedMPH * timeHours;
Chatend.done(`The user has traveled ${distance} miles`);
import "./styles.css";
import { useState } from "react";

const emojipedia = {
  "🌟":
    "Gold Star — Someone has replayed this person's snaps in the past 24 hours. They must have something interesting to show.",

  "💛":
    "Yellow Heart — You are #1 best friends (#1 BFs) with each other. You send the most snaps to this person, and they send the most snaps to you.",

  "❤️":
    " Red Heart — You have been #1 BFs with each other for two weeks straight.",

  "💕":
    "Pink Hearts — You have been #1 BFs with each other for two months straight. Dedication!",

  "👶": "Baby — You just became friends with this person.",

  "😎":
    "Face With Sunglasses — One of your best friends is one of their best friends. This means that you send a lot of snaps to someone that they also send a lot of snaps to.",

  "😬":
    "Grimacing Face — Your #1 best friend is their #1 best friend. You send the most snaps to the same person that they do. Awkward.",

  "😏":
    "Smirking Face — You are one of their best friends…but they are not a best friend of yours. You don’t send them many snaps, but they send you a lot of snaps.",

  "😊":
    "Smiling Face — Another best friend of yours. You send this person a lot of snaps. Not your #1 best friend, but they are up there.",

  "🔥":
    "Fire — You are on a Snapstreak! You have snapped this person every day, and they have snapped you back. Increases with number of consecutive days.",

  "💯":
    "Hundred — 100 Day Snapstreak. The 100 emoji appears next to the fire when you snap back and forth with someone for one hundred days in a row.",

  "⌛":
    "Hourglass — Your Snapstreak is about to end. Quickly send another snap to keep it alive.",

  "🎂":
    "Birthday Cake — This friend has a birthday today. Only displays if friend has the Birthday Party feature enabled in settings.",

  "♈": "Aries — Birthday of your friend is between March 21 - April 20",
  "♉": "Taurus — Birthday of your friend is between April 21 - May 21",
  "♊": "Gemini — Birthday of your friend is between May 22 - June 21",
  "♋": "Cancer — Birthday of your friend is between June 22 - July 22",
  "♌": "Leo — Birthday of your friend is between July 23 - August 22",
  "♍": "Virgo — Birthday of your friend is between August 23 - September 23",
  "♎": "Libra — Birthday of your friend is between September 24 - October 23",
  "♏":
    "Scorpius — Birthday of your friend is between October 24 - November 22",
  "♐":
    "Sagittarius — Birthday of your friend is between November 23 - December 21",
  "♑":
    "Capricorn — Birthday of your friend is between December 22 - January 20",
  "♒":
    "Aquarius — Birthday of your friend is between January 21 - February 19",
  "♓": "Pisces — Birthday of your friend is between February 20 - March 20"
};

export default function App() {
  var listOfEmojis = Object.keys(emojipedia);

  const [currentState, setCurrentState] = useState("");
  function changeHandler(event) {
    var userInput = event.target.value;
    var output = emojipedia[userInput];

    if (output === undefined){
      setCurrentState("Emoji not found")
    }else{
    setCurrentState(output);
    }
  }

  function clickHandler(emoji) {
    setCurrentState(emojipedia[emoji]);
  }

  return (
    <div className="App">
      <h1>Know the meaning of Snapchat emojis</h1>
      <input onChange={changeHandler} placeholder="Type an emoji here..." />
      <h4>Meaning:</h4>
      <div className="outputDiv">{currentState}</div>

      <h2>Select from the following emojis </h2>
      {listOfEmojis.map((emoji) => {
        return (
          <span
            key={emoji}
            onClick={() => clickHandler(emoji)}
            style={{
              cursor: "pointer",
              fontSize: "2rem",
              padding: "0.5rem",
              margin: "1.5rem"
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

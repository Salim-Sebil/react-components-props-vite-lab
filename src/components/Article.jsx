import React from "react";

// export default function Article({ title, date = "January 1, 1970", preview, minutes}) {

 
//   return (
//     <article>
//       <h3>{title}</h3>
//       <small>{date}</small>
//       <p>{preview}</p>
//       <p>{minutes}</p>
//     </article>
//   );
// }

export default function Article({ title, date = "January 1, 1970", preview, minutes = 0 }) {

  function getReadTime() {
    if (minutes < 30) {
      // round up to nearest 5
      const cups = Math.ceil(minutes / 5);
      return "☕️".repeat(cups) + ` ${minutes} min read`;
    } else {
      // round up to nearest 10
      const bentos = Math.ceil(minutes / 10);
      return "🍱".repeat(bentos) + ` ${minutes} min read`;
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{getReadTime()}</p>
    </article>
  );
}
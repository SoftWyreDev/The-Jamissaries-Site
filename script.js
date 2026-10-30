window.addEventListener("load", (event) => {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        console.log(link.innerText);
        link.href = link.href + link.innerText;
    });
});

// Event List
const data = `
Tuesday, November 3, 2026 | 6:00 - 8:00 p.m. | Woodhouse Brewing | 119 Madrone St, Santa Cruz, CA <br> (No cover)

Saturday, November 14, 2026 | 2:00 - 5:00 p.m. | Shanty Shack Brewing | 138 Fern St, Santa Cruz, CA <br> (No cover)

Friday, December 4, 2026 | 8:30 - 11:30 p.m. | Joe's Bar | 13118 Hwy 9, Boulder Creek, CA <br> (No cover)

Saturday, December 12, 2026 | 2:00 - 5:00 p.m. | Shanty Shack Brewing | 138 Fern St, Santa Cruz, CA <br> (No cover)
`;

const eventsDiv = document.getElementById("events");

const eventsHTML = data
  .trim()
  .split("\n")
  .filter(line => line.trim())
  .map(line => {
    const [date, time, venue, address] = line.split("|").map(x => x.trim());

    return `
      <div class="event-bubble">
        <div class="event-date event-item">${date}</div>
        <div class="event-time event-item">${time}</div>
        <div class="event-venue event-item">${venue}</div>
        <div class="event-address event-item">${address}</div>
      </div>
    `;
  })
  .join("");

eventsDiv.innerHTML = eventsHTML + eventsDiv.innerHTML;


window.addEventListener("load", (event) => {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        console.log(link.innerText);
        link.href = link.href + link.innerText;
    });
});

// Event List
const data = `



Saturday, July 11, 2026 | 2:00 - 5:00 p.m. | Shanty Shack Brewing | 138 Fern St, Santa Cruz, CA <br> (No cover)

Saturday, July 18, 2026 | 4:30 - 7:00 p.m. | Cayuga Stage | 429 Cayuga St, Santa Cruz, CA <br> (Sliding scale donation)

Friday, July 31, 2026 | 5:30 - 8:30 p.m. | Aroma Restaurant | 9600 Hwy 9, Ben Lomond, CA <br> (No cover)

Saturday, August 8, 2026 | 2:00 - 5:00 p.m. | Shanty Shack Brewing | 138 Fern St, Santa Cruz, CA <br> (Beer Brunch, No cover)

Saturday, August 22, 2026 | 5:30 - 7:30 p.m. | Discretion Brewing | 2703 41st Ave. Ste A, Soquel, CA <br> (no cover)

Friday, September 4, 2026 | 8:30 - 11:30 p.m. | Joe's Bar | 13118 Hwy 9, Boulder Creek, CA <br> (No cover)

Saturday, September 12, 2026 | 2:00 - 5:00 p.m. | Shanty Shack Brewing | 138 Fern St, Santa Cruz, CA <br> (No cover)

Saturday, October 10, 2026 | 2:00 - 5:00 p.m. | Shanty Shack Brewing | 138 Fern St, Santa Cruz, CA <br> (No cover)

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


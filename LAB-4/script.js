document.addEventListener('DOMContentLoaded', function() {
    const eventDetails = {
        title: "Institute Event",
        description: "A special event organized by our institute.",
        date: "June 15, 2024",
        time: "6:00 PM - 8:00 PM",
        location: "Main Auditorium"
    };

    document.getElementById('event-title').textContent = eventDetails.title;
    document.getElementById('event-description').textContent = eventDetails.description;
    document.getElementById('event-date').textContent = eventDetails.date;
    document.getElementById('event-time').textContent = eventDetails.time;
    document.getElementById('event-location').textContent = eventDetails.location;

    document.getElementById('interest-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert("Thank you for expressing your interest!");
    });
});

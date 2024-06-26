
// Function to calculate and display time left dynamically
function updateTimeLeft() {
    // Set the target date and time for the offer to end (example)
    const targetDate = new Date('2024-07-01T00:00:00'); // Replace with your target end date/time

    // Get current date and time
    const now = new Date();

    // Calculate the difference in milliseconds
    const diff = targetDate - now;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update the time left element
    document.getElementById('time-left').textContent = `Offer ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Update every second
    setTimeout(updateTimeLeft, 1000);
}

// Function to update actual price, deleted price, and percentage off
function updatePricing() {
    const actualPrice = 180; // Replace with actual price
    const deletedPrice = 250; // Replace with previous price
    const percentageOff = Math.round(((deletedPrice - actualPrice) / deletedPrice) * 100);

    document.getElementById('actual-price').textContent = `$${actualPrice}`;
    document.getElementById('deleted-price').textContent = `$${deletedPrice}`;
    document.getElementById('percentage-off').textContent = `${percentageOff}%`;
}

// Function to calculate star ratings dynamically
function updateStarRatings() {
    const ratingScore = 4.5; // Replace with actual rating score

    const starsContainer = document.getElementById('star-ratings');
    starsContainer.innerHTML = ''; // Clear previous stars

    // Generate full and half stars based on rating score
    const fullStars = Math.floor(ratingScore);
    const halfStars = Math.ceil(ratingScore - fullStars);

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        const starIcon = document.createElement('span');
        starIcon.classList.add('fa', 'fa-star', 'checked');
        starsContainer.appendChild(starIcon);
    }

    // Add half star if needed
    if (halfStars === 1) {
        const halfStarIcon = document.createElement('span');
        halfStarIcon.classList.add('fa', 'fa-star-half', 'checked');
        starsContainer.appendChild(halfStarIcon);
    }
}

// Function to update seller badge text based on criteria
function updateSellerBadge() {
    const isStarSeller = true; // Replace with actual logic to determine if seller is a star seller

    if (isStarSeller) {
        document.getElementById('seller-badge-text').textContent = 'Star Seller. This seller consistently earned 5-star reviews, dispatched on time, and replied quickly to any messages they received.';
    } else {
        document.getElementById('seller-badge-text').textContent = '';
    }
}

// Function to update product description
function updateProductDescription() {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida semper velit, nec mattis erat posuere id. Donec ullamcorper, nunc non tempus elementum, dui nunc pharetra nisl, at posuere quam ante id elit.";

    document.getElementById('product-description').textContent = description;
}

// Call the functions to start updating time left, pricing, star ratings, seller badge, and product description
updateTimeLeft();
updatePricing();
updateStarRatings();
updateSellerBadge();
updateProductDescription();
  // Initialize Slick Slider for preview-thumbnail
 

//   comment

    // Simulated data for demonstration
    let comments = [
        { name: "John Doe", comment: "This is a great website!" },
        { name: "Jane Smith", comment: "Awesome design and functionality." }
    ];

    // Function to display comments
    function displayComments() {
        let commentHTML = '';
        comments.forEach(comment => {
            commentHTML += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${comment.name}</h5>
                        <p class="card-text">${comment.comment}</p>
                    </div>
                </div>
            `;
        });
        $('#commentList').html(commentHTML);
    }

    // Add a new comment
    $('#commentForm').submit(function(event) {
        event.preventDefault();
        let userName = $('#userName').val();
        let userComment = $('#userComment').val();
        comments.push({ name: userName, comment: userComment });
        displayComments();
        $('#userName').val('');
        $('#userComment').val('');
    });

    // Initial display of comments
    displayComments();



function login() {
    alert("Login Successful");
}

function register() {
    alert("Registration Successful");
}

function bookTour() {
    alert("Tour Booked Successfully");
}
function bookTour() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let place = document.getElementById("place").value;
    let persons = document.getElementById("persons").value;

    alert("Payment Successful!");

    alert(
        "Email Confirmation Sent!\n\n" +
        "Hello " + name +
        "\nDestination: " + place +
        "\nPersons: " + persons +
        "\nEmail: " + email +
        "\n\nYour Tour Booking is Confirmed."
    );

    return false;
}

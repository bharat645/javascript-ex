function getstudents() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                id: 501,
                name: "Laptop",
                price: 55000
            }

            if (user) {
                resolve(user);
            } else {
                reject("User not found");
            }
        }, 2000);
    });
}
function getproduct(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Good product", "Excellent", "Worth buying"])

        }, 1500);
    });
}


async function showUserOrders() {
    try {
        const user = await getstudents();
        console.log(user);
        const product = await getproduct(user.id);
        console.log(product);
    } catch (error) {
        console.log("Error:", error);

    }
}
showUserOrders();



// pratice 2 

function getProduct() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const product = {
                id: 301,
                name: "Mobile",
                price: 25000
            };

            if (product) {
                resolve(product);
            } else {
                reject("Product not found");
            }

        }, 2000);
    });
}


function getReviews(productId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const reviews = [
                "Very good",
                "Nice product",
                "Value for money"
            ];

            if (reviews.length > 0) {
                resolve(reviews);
            } else {
                reject("Reviews not found");
            }

        }, 1500);
    });
}


async function showProductReviews() {

    try {

        const product = await getProduct();

        console.log("Product:", product);

        const reviews = await getReviews(product.id);

        console.log("Reviews:", reviews);

    } catch (error) {

        console.log("Error:", error);

    }
}


showProductReviews();



// examplle 3



function getstudent() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                id: 501,
                name: "Bharat",
                course: "BCA"
            }
            if (user) {
                resolve(user)

            } else {
                reject(" user not found")
            }
        }, 2000)
    })
}
function getCourses(studentId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const course = ["JavaScript", "React", "Node.js"]

            if (course.length > 0) {
                resolve(course)

            } else {
                reject(" user not found")
            }
        }, 1500)
    })
}

async function showStudentCourses() {
    try {

        const product = await getstudent();

        console.log("Product:", product);

        const reviews = await getCourses();

        console.log("Reviews:", reviews);

    } catch (error) {

        console.log("Error:", error);

    }
}

showStudentCourses();


// ex 4

function getUser() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const user = {

                id: 101,

                name: "Bharat",

                course: "BCA"

            };

            if (user) {

                resolve(user);

            } else {

                reject("User not found");

            }

        }, 2000);

    });

}

function getOrders(userId) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(

                ["JavaScript", "React", "Node.js"]

            );

        }, 1500);

    });

}

async function showUserOrders() {

    try {

        const user = await getUser();

        console.log("User:", user);

        const orders = await getOrders(user.id);

        console.log("Orders:", orders);

    } catch (error) {

        console.log("Error:", error);

    }

}

showUserOrders();


// ex 5





function getUser() {

    return new  Promise  (( resolve , reject ) => {

        setTimeout(() => {

            const user = {

                id: 202,

                name: "Rahul",

                course: "MCA"

            };

            if (user) {

                resolve(user);

            } else {

                reject("User not found");

            }

        }, 2000);

    });

}



function getOrders( userId) {

    return new  Promise  (( resolve , reject ) => {

        setTimeout(() => {

            const orders = [

                "Mobile",

                "Headphones",

                "Keyboard"

            ];

            if (orders.length > 0) {

                resolve(orders);

            } else {

                reject("Orders not found");

            }

        }, 1500);

    });

}



async function showUserOrders() {

    try {

        const user = await getUser();

        console.log("User:", user);

        const orders = await getOrders();

        console.log("Orders:", orders);

    } catch (error) {

        console.log("Error:", error);

    }

}

showUserOrders();


fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
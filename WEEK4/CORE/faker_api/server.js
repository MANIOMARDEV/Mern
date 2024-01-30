const express = require("express");
const app = express();
const port = 5000;

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { faker } = require('@faker-js/faker');

class User {
    constructor(firstName, lastName, password, email, phoneNumber, _id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this._id = _id;
    }
}

class Company {
    constructor(_id, name, street, city, state, zipCode, country) {
        this._id = _id;
        this.name = name;
        this.address = `${street} ${city}, ${state} ${zipCode} ${country}`;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.country = country;
    }
}

app.get("/api", (req, res) => {
    res.json({ msg: "Up and running" });
});

app.get("/api/user/new", (req, res) => {
    const user = new User(
        faker.name.firstName(),
        faker.name.lastName(),
        faker.random.word(),
        faker.internet.email(),
        faker.phone.phoneNumber(),
        faker.database.mongodbObjectId()
    );

    res.json({
        new_user: user
    });
});

app.get("/api/companies/new", (req, res) => {
    const company = new Company(
        faker.database.mongodbObjectId(),
        faker.company.companyName(),
        faker.address.streetAddress(false),
        faker.address.city(),
        faker.address.state(),
        faker.address.zipCode(),
        faker.address.country()
    );

    res.json({
        new_company: company
    });
});

app.get("/api/user/company", (req, res) => {
    const company = new Company(
        faker.database.mongodbObjectId(),
        faker.company.companyName(),
        faker.address.streetAddress(false),
        faker.address.city(),
        faker.address.state(),
        faker.address.zipCode(),
        faker.address.country()
    );

    const user = new User(
        faker.name.firstName(),
        faker.name.lastName(),
        faker.random.word(),
        faker.internet.email(),
        faker.phone.phoneNumber(),
        faker.database.mongodbObjectId()
    );

    res.json({
        user: user,
        company: company
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
require('dotenv').config();

export const config = {
    dev: {
        jwt: {
            secret: process.env.JWT_SECRET,
        },
    },
    prod: {
        jwt: {
            secret: process.env.JWT_SECRET,
        },
    },
};

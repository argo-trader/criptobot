db.createUser(
    {
        user: "cripto",
        pwd: "setPassword",
        roles: [
            {
                role: "readWrite",
                db: "mongo-candles"
            }
        ]
    }
)
var passport = require("passport");
// import { Strategy, ExtractJwt } from "passport-jwt";
var jwt = require("passport-jwt");
module.exports = app => {
    const Users = app.db.models.Users;
    const cfg = app.libs.config;
    const params = {
        secretOrKey: cfg.jwtSecret,
        jwtFromRequest: jwt.ExtractJwt.fromAuthHeaderAsBearerToken()
    };
    const strategy = new jwt.Strategy(params, (payload, done) => {
        Users.findById(payload.id)
        .then(user => {
            if (user) {
                return done(null, {
                    id: user.id,
                    email: user.email
                });
            }
            return done(null, false);
        })
        .catch(error => done(error, null));
    });
    passport.use(strategy);
    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate("jwt", cfg.jwtSession);
        }
    };
};

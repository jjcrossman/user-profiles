module.exports = {

  login ( req, res ) {
    //find user from req
    for ( let i = 0; i < users.length; i++ ) {
      if ( req.body.name === users[i].name ) {
        //we found user, does password match?
        if ( req.body.password === users[i].password ) {
          req.session.currentUser = req.body;
          req.session.currentUser.friends = users[ i ].friends;
          console.log( `CURRENT USER IS: ${ req.session.currentUser.name }`);
          return res.status( 200 ).json( { userFound: true, message: `${ req.session.currentUser.name } has been logged in.`} );
        }
          return res.status( 401 ).json( { error: "Username or password is incorrect, debug: valid username, wrong password" } );
      }
    }
    return res.status( 401 ).json( { error: "Username or password is incorrect, debug: wrong username" } );
  }
}

const users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  // GET "/api/houses"
  getHouses: (req, res) => {
    const db = req.app.get('db');
    db.get_houses()
      .then( response => res.status(200).send(response) )
      .catch( err => console.log(err.message) );
  },
  // GET "/api/house"
  getHouse: (req, res) => {
    const db = req.app.get('db');
    let { id } = req.params;
    db.get_house([id])
      .then( response => res.status(200).send(response[0]) )
      .catch( err => console.log(err.message) );
  },
  // POST "/api/house"
  createHouse: (req, res) => {
    const db = req.app.get('db');
    let { image_url, property_name, address, city, state, zipcode, monthly_morgage, desired_rent } = req.body;
    db.create_house([image_url, property_name, address, city, state, zipcode, monthly_morgage, desired_rent])
      .then( response => res.status(200).send(response) )
      .catch( err => console.log(err.message) );
  },
  // PUT "/api/house/:id"
  editHouse: (req, res) => {
    let { image_url, property_name, address, city, state, zipcode, monthly_morgage, desired_rent } = req.body;
    let { id } = req.params;
    const db = req.app.get('db');
    db.edit_house([id, image_url, property_name, address, city, state, zipcode, monthly_morgage, desired_rent])
      .then(response => res.status(200).send(response))
      .catch(err => console.log(err));
  },
  // DELETE "/api/house/:id"
  deleteHouse: (req, res) => {
    let { id } = req.params;
    const db = req.app.get('db');
    db.delete_house([id])
      .then(response => res.status(200).send(response))
      .catch(err => console.log(err.message));
    console.log('deleting house' + req.params.id);
  }
}

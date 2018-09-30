update houses
  set image_url = $2,
  property_name = $3,
  address = $4,
  city = $5,
  state = $6,
  zipcode = $7,
  monthly_morgage = $8,
  desired_rent = $9
    where house_id = $1;

select * from houses;
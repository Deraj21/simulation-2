insert into houses (image_url, property_name, address, city, state, zipcode, monthly_morgage, desired_rent)
  values ($1, $2, $3, $4, $5, $6, $7, $8);

select * from houses;
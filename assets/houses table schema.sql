-- table houses
create table houses (
  house_id serial primary KEY,
  image_url text,
  property_name text,
  address text,
  city text,
  state char(2),
  zipcode int,
  monthly_morgage decimal(18,2),
  desired_rent decimal(18,2)
);

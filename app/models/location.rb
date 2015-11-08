class Location < ActiveRecord::Base
  geocoded_by :address
  after_validation :geocode
  reverse_geocoded_by :latitude, :longitude
  after_validation :reverse_geocode  # auto-fetch address
end
